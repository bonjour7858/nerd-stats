function switchTab(tabId) {
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
}

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1546918309377745017/9n1wRbEvzr9tN9u1Ewcy9yJbODmxMODeMTGUSkbOQkgqIYyJkKXDCljYfNBLlG_awCww";

document.addEventListener('DOMContentLoaded', () => {
  const discordForm = document.getElementById('discordForm');

  if (discordForm) {
    discordForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const statusDiv = document.getElementById('feedbackStatus');
      const type = document.getElementById('feedbackType').value;
      const message = document.getElementById('feedbackMessage').value;

      statusDiv.style.display = 'none';

      if (DISCORD_WEBHOOK_URL === "TON_WEBHOOK_DISCORD_ICI" || !DISCORD_WEBHOOK_URL) {
        statusDiv.className = "feedback-msg feedback-error";
        statusDiv.innerText = "Erreur : Le lien du Webhook Discord n'a pas encore été configuré dans le fichier script.js.";
        statusDiv.style.display = 'block';
        return;
      }

      const payload = {
        embeds: [{
          title: "📩 Nouveau retour anonyme — NerdStats",
          color: 16738816, // Couleur Orange
          fields: [
            { name: "Type", value: type, inline: true },
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
