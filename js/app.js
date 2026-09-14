document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('langSelect');
  const savedLang = localStorage.getItem('nerdstats_lang') || 'fr';
  if (langSelect) {
    langSelect.value = savedLang;
    changeLanguage(savedLang);

    langSelect.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }

  const tabButtons = document.querySelectorAll('.nav-tab');
  const tabPages = document.querySelectorAll('.page-tab');

  function switchTab(targetTabId) {
    tabPages.forEach(page => page.classList.remove('active'));
    tabButtons.forEach(btn => btn.classList.remove('active'));

    const activePage = document.getElementById(targetTabId);
    if (activePage) activePage.classList.add('active');

    document.querySelectorAll(`[data-tab="${targetTabId}"]`).forEach(btn => btn.classList.add('active'));
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = button.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  document.getElementById('brandLogo')?.addEventListener('click', () => switchTab('tab-analyzer'));

  const searchForm = document.getElementById('searchForm');
  const resultsCard = document.getElementById('resultsCard');
  const searchBtn = document.getElementById('searchBtn');

  if (searchForm) {
    searchForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const inputUrl = document.getElementById('searchInput').value.trim();
      if (!inputUrl) return;

      searchBtn.disabled = true;
      searchBtn.innerHTML = `<span>⏳</span> Analyzing...`;

      try {
        const data = await fetchVideoData(inputUrl);

        const playerPlaceholder = document.getElementById('playerPlaceholder');
        const embeddedPlayer = document.getElementById('embeddedPlayer');
        if (embeddedPlayer && playerPlaceholder) {
          playerPlaceholder.style.display = 'none';
          embeddedPlayer.style.display = 'block';
          embeddedPlayer.src = `https://www.youtube.com/embed/${data.id}?autoplay=1`;
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

        // Affichage de la carte
        resultsCard.style.display = 'block';
        resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

      } catch (err) {
        alert(err.message);
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
    const duration = 1000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = targetValue / steps;

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

  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      item.classList.toggle('active');
    });
  });

  const faqSearch = document.getElementById('faqSearch');
  if (faqSearch) {
    faqSearch.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      document.querySelectorAll('.faq-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(term) ? 'block' : 'none';
      });
    });
  }

  const supportForm = document.getElementById('supportForm');
  if (supportForm) {
    supportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Message envoyé avec succès !");
      supportForm.reset();
    });
  }

  document.getElementById('shareBtn')?.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Lien du rapport copié dans le presse-papier !");
  });
});
