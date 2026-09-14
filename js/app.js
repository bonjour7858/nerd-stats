const ADMIN_HASH = "__ADMIN_HASH__";

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  const resultsCard = document.getElementById('resultsCard');
  const searchBtn = document.getElementById('searchBtn');

  if (!searchForm) return;

  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const inputUrl = searchInput.value.trim();
    if (!inputUrl) return;

    if (searchBtn) {
      searchBtn.disabled = true;
      searchBtn.innerHTML = `<span>⏳</span> Analyse en cours...`;
    }

    try {
      const data = await fetchVideoData(inputUrl);

      const thumb = document.getElementById('videoThumbnail');
      if (thumb) thumb.src = data.thumbnail;

      const title = document.getElementById('videoTitle');
      if (title) title.textContent = data.title;

      const channel = document.getElementById('channelTitle');
      if (channel) channel.textContent = data.channel;

      const playerPreview = document.querySelector('.youtube-player-preview') || document.getElementById('videoPlayerContainer') || document.getElementById('youtube-player-preview');
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

      const views = document.getElementById('statViews');
      if (views) views.textContent = data.views.toLocaleString();

      const likes = document.getElementById('statLikes');
      if (likes) likes.textContent = data.likes.toLocaleString();

      const comments = document.getElementById('statComments');
      if (comments) comments.textContent = data.comments.toLocaleString();

      const interactions = data.likes + data.comments;
      const engagementRate = data.views > 0 ? ((interactions / data.views) * 100).toFixed(2) : "0.00";
      const engagement = document.getElementById('statEngagement');
      if (engagement) engagement.textContent = `${engagementRate}%`;

      const score = Math.min(Math.round((parseFloat(engagementRate) / 5) * 100), 100);
      const nerdScore = document.getElementById('nerdScoreValue');
      if (nerdScore) nerdScore.textContent = `${score} / 100`;

      const minRev = ((data.views / 1000) * 0.5).toFixed(2);
      const maxRev = ((data.views / 1000) * 2.5).toFixed(2);
      const revenue = document.getElementById('statRevenue');
      if (revenue) revenue.textContent = `$${minRev} - $${maxRev}`;

      if (resultsCard) {
        resultsCard.style.display = 'block';
        resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

    } catch (err) {
      alert(err.message);
    } finally {
      if (searchBtn) {
        searchBtn.disabled = false;
        searchBtn.innerHTML = `<span>▶</span> Analyser`;
      }
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
