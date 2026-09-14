document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('langSelect');
  const savedLang = localStorage.getItem('nerdstats_lang') || 'fr';
  if (langSelect) {
    langSelect.value = savedLang;
    changeLanguage(savedLang);
    langSelect.addEventListener('change', (e) => changeLanguage(e.target.value));
  }

  const tabButtons = document.querySelectorAll('.nav-tab');
  const tabPages = document.querySelectorAll('.page-tab');

  function switchTab(targetTabId) {
    tabPages.forEach(page => page.classList.remove('active'));
    tabButtons.forEach(btn => btn.classList.remove('active'));

    const activePage = document.getElementById(targetTabId);
    if (activePage) activePage.classList.add('active');

    document.querySelectorAll(`[data-tab="${targetTabId}"]`).forEach(btn => btn.classList.add('active'));

    if (targetTabId === 'tab-admin') {
      loadAdminTickets();
    }
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(button.getAttribute('data-tab'));
    });
  });

  document.getElementById('brandLogo')?.addEventListener('click', () => switchTab('tab-analyzer'));

  const searchForm = document.getElementById('searchForm');
  const resultsCard = document.getElementById('resultsCard');
  const searchBtn = document.getElementById('searchBtn');
  const errorBanner = document.getElementById('errorMessage');

  if (searchForm) {
    searchForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      errorBanner.style.display = 'none';
      
      const inputUrl = document.getElementById('searchInput').value.trim();
      if (!inputUrl) return;

      searchBtn.disabled = true;
      searchBtn.innerHTML = `<span>⏳</span> Analyse...`;

      try {
        const data = await fetchVideoData(inputUrl);

        const playerPlaceholder = document.getElementById('playerPlaceholder');
        const embeddedPlayer = document.getElementById('embeddedPlayer');
        if (embeddedPlayer && playerPlaceholder) {
          playerPlaceholder.style.display = 'none';
          embeddedPlayer.style.display = 'block';
          embeddedPlayer.src = `https://www.youtube.com/embed/${data.id}?autoplay=1&enablejsapi=1`;
        }

        document.getElementById('videoThumbnail').src = data.thumbnail;
        document.getElementById('videoTitle').textContent = data.title;
        document.getElementById('channelTitle').textContent = data.channel;

        animateCounter('statViews', data.views);
        animateCounter('statLikes', data.likes);
        animateCounter('statComments', data.comments);

        const interactions = data.likes + data.comments;
        const engagementRate = data.views > 0 ? ((interactions / data.views) * 100).toFixed(2) : "0.00";
        document.getElementById('statEngagement').textContent = `${engagementRate}%`;

        const score = Math.min(Math.round((parseFloat(engagementRate) / 5) * 100), 100);
        document.getElementById('nerdScoreValue').textContent = `${score} / 100`;

        const minRev = ((data.views / 1000) * 0.5).toFixed(2);
        const maxRev = ((data.views / 1000) * 2.5).toFixed(2);
        document.getElementById('statRevenue').textContent = `$${minRev} - $${maxRev}`;

        resultsCard.style.display = 'block';
        resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

      } catch (err) {
        errorBanner.textContent = `❌ ${err.message || "Lien YouTube invalide ou introuvable."}`;
        errorBanner.style.display = 'block';
      } finally {
        searchBtn.disabled = false;
        searchBtn.innerHTML = `<span>▶</span> Analyser`;
      }
    });
  }

  function animateCounter(elementId, targetValue) {
    const el = document.getElementById(elementId);
    if (!el) return;
    let start = 0;
    const duration = 800;
    const stepTime = 20;
    const increment = targetValue / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        el.textContent = targetValue.toLocaleString();
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start).toLocaleString();
      }
    }, stepTime);
  }

  const supportForm = document.getElementById('supportForm');
  if (supportForm) {
    supportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const type = document.getElementById('ticketType').value;
      const message = document.getElementById('ticketMessage').value.trim();

      const newTicket = {
        id: Date.now(),
        type,
        message,
        date: new Date().toLocaleString()
      };

      const existingTickets = JSON.parse(localStorage.getItem('nerdstats_tickets') || '[]');
      existingTickets.unshift(newTicket);
      localStorage.setItem('nerdstats_tickets', JSON.stringify(existingTickets));

      alert(" Message envoyé et enregistré dans l'Admin Panel !");
      supportForm.reset();
    });
  }

  function loadAdminTickets() {
    const container = document.getElementById('adminTicketList');
    if (!container) return;

    const tickets = JSON.parse(localStorage.getItem('nerdstats_tickets') || '[]');

    if (tickets.length === 0) {
      container.innerHTML = `<p class="empty-tickets">Aucun ticket de support reçu pour le moment.</p>`;
      return;
    }

    container.innerHTML = tickets.map(t => `
      <div class="ticket-card">
        <div class="ticket-header">
          <span class="badge-type badge-${t.type.toLowerCase()}">${t.type}</span>
          <span class="ticket-date">${t.date}</span>
        </div>
        <p class="ticket-body">${t.message}</p>
        <button onclick="deleteTicket(${t.id})" class="btn-delete">Supprimer</button>
      </div>
    `).join('');
  }

  window.deleteTicket = function(id) {
    let tickets = JSON.parse(localStorage.getItem('nerdstats_tickets') || '[]');
    tickets = tickets.filter(t => t.id !== id);
    localStorage.setItem('nerdstats_tickets', JSON.stringify(tickets));
    loadAdminTickets();
  };

  document.getElementById('clearTicketsBtn')?.addEventListener('click', () => {
    if (confirm("Supprimer définitivement tous les tickets ?")) {
      localStorage.removeItem('nerdstats_tickets');
      loadAdminTickets();
    }
  });

  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => q.parentElement.classList.toggle('active'));
  });
});
