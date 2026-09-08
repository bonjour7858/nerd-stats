const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1546918309377745017/9n1wRbEvzr9tN9u1Ewcy9yJbODmxMODeMTGUSkbOQkgqIYyJkKXDCljYfNBLlG_awCww";
const YOUTUBE_API_KEY = "AIzaSyAx6nTNIfhwccw2JSJQ_JyYhrBTNn5p7LQ";

window.switchTab = function(tabId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active-page'));
  document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
  
  const targetPage = document.getElementById('page-' + tabId);
  if (targetPage) {
    targetPage.classList.add('active-page');
  }
  
  const activeBtn = Array.from(document.querySelectorAll('.nav-tab')).find(btn => 
    btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId)
  );
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
};


function formatNumber(num) {
  if (!num || isNaN(num)) return "0";
  return new Intl.NumberFormat('fr-FR').format(num);
}

function extractVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : "dQw4w9WgXcQ"; // Fallback ID si format court
}

document.addEventListener('DOMContentLoaded', () => {

  const analyzeBtn = document.getElementById('analyzeBtn');
  const urlInput = document.getElementById('urlInput');

  if (analyzeBtn && urlInput) {
    analyzeBtn.addEventListener('click', async () => {
      const url = urlInput.value.trim();
      const videoId = extractVideoId(url);

      if (YOUTUBE_API_KEY === "TA_CLE_API_YOUTUBE_ICI" || !YOUTUBE_API_KEY) {
        displayResults({
          title: "Vidéo d'Analyse Exemple (Mode Démo)",
          channel: "NerdStats Studio",
          publishedAt: new Date().toISOString().split('T')[0],
          videoId: videoId,
          views: 850400,
          likes: 62000,
          comments: 3100,
          tags: ["NerdStats", "Analyse", "YouTube", "Stats", "Tech"]
        });
      } else {
        try {
          const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${YOUTUBE_API_KEY}`);
          const data = await res.json();
          
          if (data.items && data.items.length > 0) {
            const item = data.items[0];
            displayResults({
              title: item.snippet.title,
              channel: item.snippet.channelTitle,
              publishedAt: item.snippet.publishedAt.split('T')[0],
              videoId: videoId,
              views: parseInt(item.statistics.viewCount || 0),
              likes: parseInt(item.statistics.likeCount || 0),
              comments: parseInt(item.statistics.commentCount || 0),
              tags: item.snippet.tags || []
            });
          } else {
            alert("Vidéo introuvable.");
          }
        } catch (err) {
          alert("Erreur réseau ou clé API YouTube invalide.");
        }
      }
    });
  }

  const discordForm = document.getElementById('discordForm');
  if (discordForm) {
    discordForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const statusDiv = document.getElementById('feedbackStatus');
      const type = document.getElementById('feedbackType').value;
      const message = document.getElementById('feedbackMessage').value;

      statusDiv.style.display = 'none';
if (!DISCORD_WEBHOOK_URL || DISCORD_WEBHOOK_URL === "TON_WEBHOOK_DISCORD_ICI" || !DISCORD_WEBHOOK_URL.startsWith("https://discord.com/api/webhooks/")) {
        statusDiv.className = "feedback-msg feedback-error";
        statusDiv.innerText = "Erreur : URL du Webhook Discord invalide ou non configurée dans script.js.";
        statusDiv.style.display = 'block';
        return;
      }
      const payload = {
        username: "NerdStats Bot",
        embeds: [{
          title: "📩 Nouveau retour anonyme — NerdStats",
          color: 16738816,
          fields: [
            { name: "Type de retour", value: type, inline: true },
            { name: "Message", value: message }
          ],
          timestamp: new Date().toISOString()
        }]
      };

      try {
        const response = await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          statusDiv.className = "feedback-msg feedback-success";
          statusDiv.innerText = "Message envoyé avec succès ! Merci pour votre retour.";
          discordForm.reset();
        } else {
          throw new Error();
        }
      } catch (err) {
        statusDiv.className = "feedback-msg feedback-error";
        statusDiv.innerText = "Erreur lors de l'envoi du message vers Discord.";
      }

      statusDiv.style.display = 'block';
    });
  }
});


function displayResults(data) {
  const resultsSection = document.getElementById('resultsSection');
  if (!resultsSection) return;

  resultsSection.classList.remove('hidden');

  document.getElementById('videoTitle').innerText = data.title;
  document.getElementById('channelName').innerText = data.channel;
  document.getElementById('publishDate').innerText = data.publishedAt;
  document.getElementById('videoIdDisplay').innerText = `ID : ${data.videoId}`;
  document.getElementById('thumbImg').src = `https://img.youtube.com/vi/${data.videoId}/mqdefault.jpg`;

  document.getElementById('viewCount').innerText = formatNumber(data.views);
  
  const ratio = data.views > 0 ? ((data.likes / data.views) * 100).toFixed(2) : 0;
  document.getElementById('likeRatio').innerText = `${ratio}%`;
  document.getElementById('likesVsDislikes').innerText = `👍 ${formatNumber(data.likes)}`;

  const engagement = data.views > 0 ? ((data.comments / data.views) * 1000).toFixed(1) : 0;
  document.getElementById('engagementRate').innerText = `${((data.likes + data.comments) / (data.views || 1) * 100).toFixed(2)}%`;
  document.getElementById('commentsDensity').innerText = `${engagement} comms / 1k vues`;

  const minRev = Math.round((data.views / 1000) * 0.5);
  const maxRev = Math.round((data.views / 1000) * 2.5);
  document.getElementById('estRevenue').innerText = `${formatNumber(minRev)}$ - ${formatNumber(maxRev)}$`;

  const tagsContainer = document.getElementById('tagsContainer');
  tagsContainer.innerHTML = '';
  if (data.tags && data.tags.length > 0) {
    data.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'mini-tag';
      span.innerText = `#${tag}`;
      tagsContainer.appendChild(span);
    });
  } else {
    tagsContainer.innerHTML = '<span class="mini-tag">Aucun tag public détecté</span>';
  }

  resultsSection.scrollIntoView({ behavior: 'smooth' });
}
