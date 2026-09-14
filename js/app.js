// Hash du mot de passe admin (injecté automatiquement par GitHub Actions)
const ADMIN_HASH = "__ADMIN_HASH__";

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  const resultsCard = document.getElementById('resultsCard');
  const searchBtn = document.getElementById('searchBtn');

  if (!searchForm) return;

  // Gestion de la soumission du formulaire d'analyse
  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const inputUrl = document.getElementById('searchInput').value.trim();
    if (!inputUrl) return;

    // État de chargement du bouton
    searchBtn.disabled = true;
    searchBtn.innerHTML = `<span>⏳</span> Analyse en cours...`;

    try {
      const data = await fetchVideoData(inputUrl);

      // Injection des métadonnées principales
      document.getElementById('videoThumbnail').src = data.thumbnail;
      document.getElementById('videoTitle').textContent = data.title;
      document.getElementById('channelTitle').textContent = data.channel;

      // Formatting des valeurs numériques
      document.getElementById('statViews').textContent = data.views.toLocaleString();
      document.getElementById('statLikes').textContent = data.likes.toLocaleString();
      document.getElementById('statComments').textContent = data.comments.toLocaleString();

      // Calcul du taux d'engagement : (Likes + Commentaires) / Vues
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
      alert(err.message);
    } finally {
      searchBtn.disabled = false;
      searchBtn.innerHTML = `<span>▶</span> Analyser`;
    }
  });

  // Copie du lien de rapport dans le presse-papier
  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien du rapport copié dans le presse-papier !");
    });
  }
});
