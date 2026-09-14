const ADMIN_HASH = "__ADMIN_HASH__";

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  const resultsCard = document.getElementById('resultsCard');
  const searchBtn = document.getElementById('searchBtn');

  if (!searchForm) return;

  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const inputUrl = document.getElementById('searchInput').value.trim();
    if (!inputUrl) return;

    searchBtn.disabled = true;
    searchBtn.innerHTML = `<span>⏳</span> Analyse en cours...`;

    try {
      const data = await fetchVideoData(inputUrl);

      const thumbEl = document.getElementById('videoThumbnail');
      if (thumbEl) thumbEl.src = data.thumbnail;

      const titleEl = document.getElementById('videoTitle');
      if (titleEl) titleEl.textContent = data.title;

      const channelEl = document.getElementById('channelTitle');
      if (channelEl) channelEl.textContent = data.channel;

      const playerPreview = document.querySelector('.youtube-player-preview') || document.getElementById('videoPlayerContainer');
      if (playerPreview) {
        playerPreview.innerHTML = `
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/${data.id}?autoplay=1" 
            title="${data.title}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        `;
      }

      const viewsEl = document.getElementById('statViews');
      if (viewsEl) viewsEl.textContent = data.views.toLocaleString();

      const likesEl = document.getElementById('statLikes');
      if (likesEl) likesEl.textContent = data.likes.toLocaleString();

      const commentsEl = document.getElementById('statComments');
      if (commentsEl) commentsEl.textContent = data.comments.toLocaleString();

      const interactions = data.likes + data.comments;
      const engagementRate = data.views > 0 ? ((interactions / data.views) * 100).toFixed(2) : "0.00";
      const engagementEl = document.getElementById('statEngagement');
      if (engagementEl) engagementEl.textContent = `${engagementRate}%`;

      const score = Math.min(Math.round((parseFloat(engagementRate) / 5) * 100), 100);
      const scoreEl = document.getElementById('nerdScoreValue');
      if (scoreEl) scoreEl.textContent = `${score} / 100`;

      const minRev = ((data.views / 1000) * 0.5).toFixed(2);
      const maxRev = ((data.views / 1000) * 2.5).toFixed(2);
      const revenueEl = document.getElementById('statRevenue');
      if (revenueEl) revenueEl.textContent = `$${minRev} - $${maxRev}`;

      if (resultsCard) {
        resultsCard.style.display = 'block';
        resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

    } catch (err) {
      alert(err.message);
    } finally {
      searchBtn.disabled = false;
      searchBtn.innerHTML = `<span>▶</span> Analyser`;
    }
  });

  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien du rapport copié dans le presse-papier !");
    });
  }
});
