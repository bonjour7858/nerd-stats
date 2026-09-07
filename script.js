const API_KEY = 'AIzaSyAx6nTNIfhwccw2JSJQ_JyYhrBTNn5p7LQ'; -- Cette clé n'est pas utilisable hors de ce site pour qu'elle reste en sécurité ! Cordialement

const analyzeBtn = document.getElementById('analyzeBtn');
const urlInput = document.getElementById('urlInput');
const errorBox = document.getElementById('errorBox');
const resultsSection = document.getElementById('resultsSection');
const statusBadge = document.getElementById('statusBadge');

function parseVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

async function runNerdAnalysis() {
  errorBox.style.display = 'none';
  statusBadge.textContent = 'FETCHING...';
  statusBadge.style.color = '#58a6ff';
  statusBadge.style.borderColor = '#58a6ff';

  const rawUrl = urlInput.value.trim();
  const videoId = parseVideoId(rawUrl);

  if (!videoId) {
    showError('URL YouTube invalide. Vérifie le lien saisi.');
    return;
  }

  try {
    const videoRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${API_KEY}`);
    
    if (!videoRes.ok) {
      const errPayload = await videoRes.json();
      throw new Error(`Google API: ${errPayload.error?.message || videoRes.statusText}`);
    }

    const videoData = await videoRes.json();
    if (!videoData.items || videoData.items.length === 0) {
      throw new Error('Vidéo introuvable, supprimée ou privée.');
    }

    const video = videoData.items[0];
    const channelId = video.snippet.channelId;

    const channelRes = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`);
    const channelData = await channelRes.json();
    const channelStats = channelData.items ? channelData.items[0].statistics : null;

    let dislikes = null;
    try {
      const disRes = await fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${videoId}`);
      if (disRes.ok) {
        const disData = await disRes.json();
        dislikes = disData.dislikes;
      }
    } catch (e) {}

    renderDashboard(video, channelStats, dislikes);
    
    statusBadge.textContent = 'SUCCESS';
    statusBadge.style.color = '#3fb950';
    statusBadge.style.borderColor = '#3fb950';

  } catch (err) {
    showError(err.message);
  }
}

function renderDashboard(video, channelStats, dislikes) {
  const snip = video.snippet;
  const stats = video.statistics;

  document.getElementById('thumbImg').src = snip.thumbnails.medium?.url || snip.thumbnails.default?.url;
  document.getElementById('videoTitle').textContent = snip.title;
  document.getElementById('channelName').textContent = snip.channelTitle;
  document.getElementById('videoIdDisplay').textContent = video.id;
  
  const pubDate = new Date(snip.publishedAt);
  document.getElementById('publishDate').textContent = pubDate.toLocaleDateString();

  const views = parseInt(stats.viewCount || 0);
  const likes = parseInt(stats.likeCount || 0);
  const comments = parseInt(stats.commentCount || 0);

  document.getElementById('viewCount').textContent = views.toLocaleString();

  const daysOld = Math.max(1, Math.floor((new Date() - pubDate) / (1000 * 60 * 60 * 24)));
  const vpd = Math.round(views / daysOld);
  document.getElementById('viewsPerDay').textContent = `~${vpd.toLocaleString()} views/jour (depuis ${daysOld}j)`;

  if (dislikes !== null && dislikes !== undefined) {
    const totalVotes = likes + dislikes;
    const ratio = totalVotes > 0 ? ((likes / totalVotes) * 100).toFixed(1) : 0;
    document.getElementById('likeRatio').textContent = `${ratio}%`;
    document.getElementById('likesVsDislikes').textContent = `👍 ${likes.toLocaleString()} / 👎 ${dislikes.toLocaleString()}`;
  } else {
    document.getElementById('likeRatio').textContent = 'N/A';
    document.getElementById('likesVsDislikes').textContent = `👍 ${likes.toLocaleString()} / 👎 Masqué`;
  }

  const engagement = views > 0 ? (((likes + comments) / views) * 100).toFixed(2) : 0;
  document.getElementById('engagementRate').textContent = `${engagement}%`;
  
  const commDensity = views > 0 ? ((comments / views) * 1000).toFixed(1) : 0;
  document.getElementById('commentsDensity').textContent = `${commDensity} comms / 1k vues`;

  const minRev = ((views / 1000) * 0.50).toFixed(2);
  const maxRev = ((views / 1000) * 2.50).toFixed(2);
  document.getElementById('estRevenue').textContent = `$${minRev} - $${maxRev}`;

  if (channelStats) {
    const subs = parseInt(channelStats.subscriberCount || 0);
    const channelViews = parseInt(channelStats.viewCount || 0);

    document.getElementById('channelSubs').textContent = subs.toLocaleString();
    document.getElementById('channelTotalViews').textContent = `${channelViews.toLocaleString()} vues cumulées`;

    const subRatio = subs > 0 ? ((views / subs) * 100).toFixed(1) : 0;
    document.getElementById('subConversion').textContent = `${subRatio}%`;
  } else {
    document.getElementById('channelSubs').textContent = 'Inconnu';
    document.getElementById('channelTotalViews').textContent = '-';
    document.getElementById('subConversion').textContent = '-';
  }

  const tagsContainer = document.getElementById('tagsContainer');
  tagsContainer.innerHTML = '';
  if (snip.tags && snip.tags.length > 0) {
    snip.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'mini-tag';
      span.textContent = `#${tag}`;
      tagsContainer.appendChild(span);
    });
  } else {
    tagsContainer.innerHTML = '<span class="no-tags">Aucun tag public détecté</span>';
  }

  resultsSection.classList.remove('hidden');
}

function showError(msg) {
  errorBox.textContent = `❌ ${msg}`;
  errorBox.style.display = 'block';
  resultsSection.classList.add('hidden');
  statusBadge.textContent = 'ERROR';
  statusBadge.style.color = '#f85149';
  statusBadge.style.borderColor = '#f85149';
}

analyzeBtn.addEventListener('click', runNerdAnalysis);
urlInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') runNerdAnalysis();
});
