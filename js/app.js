const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1546918309377745017/9n1wRbEvzr9tN9u1Ewcy9yJbODmxMODeMTGUSkbOQkgqIYyJkKXDCljYfNBLlG_awCww";

window.switchTab = function(tabId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active-page'));
  document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
  
  const targetPage = document.getElementById('page-' + tabId);
  if (targetPage) targetPage.classList.add('active-page');
  
  const activeBtn = Array.from(document.querySelectorAll('.nav-tab')).find(btn => 
    btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId)
  );
  if (activeBtn) activeBtn.classList.add('active');
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.addEventListener('DOMContentLoaded', () => {
  initI18n();

  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
  }

  const analyzeBtn = document.getElementById('analyzeBtn');
  const urlInput = document.getElementById('urlInput');

  if (analyzeBtn && urlInput) {
    analyzeBtn.addEventListener('click', async () => {
      const videoId = extractVideoId(urlInput.value.trim());
      if (!videoId) return alert("URL invalide / Invalid URL");
      await runAnalysis(videoId);
    });
  }

  const compareBtn = document.getElementById('compareRunBtn');
  if (compareBtn) {
    compareBtn.addEventListener('click', async () => {
      const urlA = document.getElementById('urlA').value.trim();
      const urlB = document.getElementById('urlB').value.trim();
      const idA = extractVideoId(urlA);
      const idB = extractVideoId(urlB);

      if (!idA || !idB) return alert("Veuillez fournir 2 URLs valides.");

      const dataA = await fetchYouTubeVideoData(idA);
      const dataB = await fetchYouTubeVideoData(idB);
      renderComparison(dataA, dataB);
    });
  }

  const supportForm = document.getElementById('supportForm');
  if (supportForm) {
    supportForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const statusDiv = document.getElementById('supportStatus');
      const type = document.getElementById('supportType').value;
      const msg = document.getElementById('supportMsg').value;

      if (!DISCORD_WEBHOOK_URL || !DISCORD_WEBHOOK_URL.startsWith('https://discord.com')) {
        statusDiv.style.color = '#ff4444';
        statusDiv.innerText = "Webhook Discord non configuré.";
        statusDiv.classList.remove('hidden');
        return;
      }

      try {
        const res = await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: "NerdStats Support",
            embeds: [{
              title: "📩 Nouveau Message Support — NerdStats",
              color: 16738816,
              fields: [
                { name: "Type", value: type, inline: true },
                { name: "Message", value: msg }
              ],
              timestamp: new Date().toISOString()
            }]
          })
        });

        if (res.ok) {
          statusDiv.style.color = 'var(--green-brand)';
          statusDiv.innerText = translations[currentLang].support_success || "Message envoyé !";
          supportForm.reset();
        } else {
          throw new Error();
        }
      } catch (err) {
        statusDiv.style.color = '#ff4444';
        statusDiv.innerText = translations[currentLang].support_error || "Erreur lors de l'envoi.";
      }
      statusDiv.classList.remove('hidden');
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const sharedVideoId = urlParams.get('v');
  if (sharedVideoId) {
    runAnalysis(sharedVideoId);
  }
});

async function runAnalysis(videoId) {
  try {
    const data = await fetchYouTubeVideoData(videoId);
    displayResults(data);
    
    const newUrl = `${window.location.origin}${window.location.pathname}?v=${videoId}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  } catch (err) {
    alert("Impossible de charger les données de la vidéo.");
  }
}

function displayResults(data) {
  const resultsSection = document.getElementById('resultsSection');
  if (!resultsSection) return;

  resultsSection.classList.remove('hidden');

  document.getElementById('videoTitle').innerText = data.title;
  document.getElementById('channelName').innerText = data.channel;
  document.getElementById('publishDate').innerText = data.publishedAt;
  document.getElementById('thumbImg').src = `https://img.youtube.com/vi/${data.videoId}/mqdefault.jpg`;

  document.getElementById('viewCount').innerText = formatLocaleNumber(data.views);
  document.getElementById('likeCount').innerText = formatLocaleNumber(data.likes);
  document.getElementById('commentCount').innerText = formatLocaleNumber(data.comments);

  const engagement = data.views > 0 ? (((data.likes + data.comments) / data.views) * 100).toFixed(2) : 0;
  document.getElementById('engagementRate').innerText = `${engagement}%`;

  const nerdScore = calculateNerdScore(data.views, data.likes, data.comments);
  document.getElementById('nerdScoreVal').innerText = `${nerdScore} / 100`;

  const minRev = Math.round((data.views / 1000) * 0.5);
  const maxRev = Math.round((data.views / 1000) * 2.5);
  document.getElementById('estRevenue').innerText = `$${formatLocaleNumber(minRev)} – $${formatLocaleNumber(maxRev)}`;

  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) {
    shareBtn.onclick = () => {
      navigator.clipboard.writeText(window.location.href);
      alert(translations[currentLang].link_copied || "Lien copié !");
    };
  }

  resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function renderComparison(dataA, dataB) {
  const container = document.getElementById('compareResults');
  if (!container) return;

  container.classList.remove('hidden');
  const scoreA = calculateNerdScore(dataA.views, dataA.likes, dataA.comments);
  const scoreB = calculateNerdScore(dataB.views, dataB.likes, dataB.comments);

  container.innerHTML = `
    <div class="compare-container">
      <div class="compare-card ${scoreA >= scoreB ? 'compare-winner' : ''}">
        <h3>${dataA.title}</h3>
        <p style="color:var(--text-muted);">${dataA.channel}</p>
        <hr style="border-color:var(--border-card); margin:12px 0;">
        <p><strong>NerdScore:</strong> ${scoreA}/100</p>
        <p><strong>${translations[currentLang].stat_views || 'Views'}:</strong> ${formatLocaleNumber(dataA.views)}</p>
        <p><strong>${translations[currentLang].stat_likes || 'Likes'}:</strong> ${formatLocaleNumber(dataA.likes)}</p>
      </div>
      <div class="compare-card ${scoreB >= scoreA ? 'compare-winner' : ''}">
        <h3>${dataB.title}</h3>
        <p style="color:var(--text-muted);">${dataB.channel}</p>
        <hr style="border-color:var(--border-card); margin:12px 0;">
        <p><strong>NerdScore:</strong> ${scoreB}/100</p>
        <p><strong>${translations[currentLang].stat_views || 'Views'}:</strong> ${formatLocaleNumber(dataB.views)}</p>
        <p><strong>${translations[currentLang].stat_likes || 'Likes'}:</strong> ${formatLocaleNumber(dataB.likes)}</p>
      </div>
    </div>
  `;
}
