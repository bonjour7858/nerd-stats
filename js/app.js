const ADMIN_HASH = "__ADMIN_HASH__";

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  if (!searchForm) return;

  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    if (!searchInput) return;
    
    const inputUrl = searchInput.value.trim();
    if (!inputUrl) return;

    if (searchBtn) {
      searchBtn.disabled = true;
      searchBtn.innerHTML = `<span>⏳</span> Analyse en cours...`;
    }

    try {
      const data = await fetchVideoData(inputUrl);

      const setElText = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
      const setElSrc = (id, val) => { const el = document.getElementById(id); if(el) el.src = val; };

      setElSrc('videoThumbnail', data.thumbnail);
      setElText('videoTitle', data.title);
      setElText('channelTitle', data.channel);
      setElText('statViews', data.views.toLocaleString());
      setElText('statLikes', data.likes.toLocaleString());
      setElText('statComments', data.comments.toLocaleString());

      const interactions = data.likes + data.comments;
      const engagementRate = data.views > 0 ? ((interactions / data.views) * 100).toFixed(2) : "0.00";
      setElText('statEngagement', `${engagementRate}%`);

      const score = Math.min(Math.round((parseFloat(engagementRate) / 5) * 100), 100);
      setElText('nerdScoreValue', `${score} / 100`);

      const minRev = ((data.views / 1000) * 0.5).toFixed(2);
      const maxRev = ((data.views / 1000) * 2.5).toFixed(2);
      setElText('statRevenue', `$${minRev} - $${maxRev}`);

      // Sélecteurs multiples pour s'adapter à ton conteneur vidéo HTML
      const playerPreview = document.querySelector('.youtube-player-preview') || 
                            document.getElementById('videoPlayerContainer') || 
                            document.getElementById('youtube-player-preview') ||
                            document.getElementById('youtubePlayerPreview');
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

      const resultsCard = document.getElementById('resultsCard');
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
