function extractVideoId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function formatNumber(num) {
  if (!num || isNaN(num)) return "0";
  const lang = document.documentElement.lang || 'fr';
  return new Intl.NumberFormat(lang).format(num);
}

function calculateNerdScore(views, likes, comments) {
  if (!views || views === 0) return 0;
  const engagementRatio = ((likes + comments) / views) * 100;
  // Score de base ajusté sur un ratio moyen de 5%
  let score = Math.round((engagementRatio / 5) * 80);
  if (score > 100) score = 100;
  if (score < 10) score = 10;
  return score;
}

function calculateRevenue(views) {
  const min = Math.round((views / 1000) * 0.50);
  const max = Math.round((views / 1000) * 2.50);
  return `$${formatNumber(min)} — $${formatNumber(max)}`;
}

async function analyzeVideo() {
  const inputEl = document.getElementById('searchInput') || document.getElementById('videoUrlInput');
  if (!inputEl) return;
  
  const url = inputEl.value.trim();
  const videoId = extractVideoId(url);

  if (!videoId) {
    alert("Veuillez entrer une URL YouTube valide.");
    return;
  }

  const apiKey = window.YOUTUBE_API_KEY;
  if (!apiKey) {
    alert("Erreur : Clé API YouTube non configurée.");
    return;
  }

  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.error) {
      alert(`Erreur API YouTube : ${data.error.message}`);
      return;
    }

    if (!data.items || data.items.length === 0) {
      alert("Aucune vidéo trouvée pour cette URL.");
      return;
    }

    const video = data.items[0];
    const snippet = video.snippet;
    const stats = video.statistics;

    const views = parseInt(stats.viewCount || 0);
    const likes = parseInt(stats.likeCount || 0);
    const comments = parseInt(stats.commentCount || 0);

    const titleEl = document.getElementById('videoTitle');
    const channelEl = document.getElementById('channelTitle');
    const thumbEl = document.getElementById('videoThumbnail');
    const viewsEl = document.getElementById('statViews');
    const likesEl = document.getElementById('statLikes');
    const commentsEl = document.getElementById('statComments');
    const engagementEl = document.getElementById('statEngagement');
    const revenueEl = document.getElementById('statRevenue');
    const scoreEl = document.getElementById('nerdScoreValue');

    if (titleEl) titleEl.innerText = snippet.title;
    if (channelEl) channelEl.innerText = `${snippet.channelTitle} • ${snippet.publishedAt.split('T')[0]}`;
    if (thumbEl) thumbEl.src = snippet.thumbnails.high ? snippet.thumbnails.high.url : snippet.thumbnails.default.url;
    
    if (viewsEl) viewsEl.innerText = formatNumber(views);
    if (likesEl) likesEl.innerText = stats.likeCount ? formatNumber(likes) : "Masqué";
    if (commentsEl) commentsEl.innerText = stats.commentCount ? formatNumber(comments) : "Masqué";

    const engagementRate = views > 0 ? (((likes + comments) / views) * 100).toFixed(2) : "0.00";
    if (engagementEl) engagementEl.innerText = `${engagementRate}%`;

    
    if (revenueEl) revenueEl.innerText = calculateRevenue(views);
    if (scoreEl) scoreEl.innerText = `${calculateNerdScore(views, likes, comments)} / 100`;

    // 4. Afficher la carte de résultats
    const resultsContainer = document.getElementById('resultsCard') || document.getElementById('results');
    if (resultsContainer) {
      resultsContainer.style.display = 'block';
    }

  } catch (err) {
    console.error("Erreur d'analyse :", err);
    alert("Impossible de charger les données. Vérifiez votre connexion.");
  }
}

// Initialisation des événements au chargement
document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      analyzeVideo();
    });
  }

  const inputEl = document.getElementById('searchInput') || document.getElementById('videoUrlInput');
  if (inputEl) {
    inputEl.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        analyzeVideo();
      }
    });
  }
});
