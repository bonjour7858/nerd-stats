const translations = {
  en: {
    nav_home: "Home",
    nav_compare: "Compare",
    nav_api: "API & Data",
    nav_faq: "FAQ",
    nav_support: "Support",
    hero_tag: "PUBLIC YOUTUBE ANALYTICS",
    hero_title: "Understand YouTube. Better.",
    hero_sub: "Analyze public YouTube videos and channels with transparent metrics, engagement insights, and side-by-side comparisons.",
    search_placeholder: "Paste a YouTube video or channel URL...",
    search_btn: "Analyze",
    search_example: "Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    stat_views: "Views",
    stat_likes: "Likes",
    stat_comments: "Comments",
    stat_engagement: "Public Engagement",
    stat_revenue: "Estimated Revenue",
    nerdscore_explain: "NerdScore is calculated using public engagement signals.",
    revenue_disclaimer: "Estimated based on assumed RPM ranges ($0.50 - $2.50). Actual creator revenue varies.",
    share_btn: "Share Analysis",
    link_copied: "Link copied to clipboard!",
    trust_title: "What data does NerdStats use?",
    trust_desc: "NerdStats relies exclusively on publicly accessible data provided via the official YouTube Data API v3.",
    compare_title: "Side-by-Side Comparison",
    compare_btn: "Compare Videos",
    
    api_title: "API & Data Transparency",
    api_sub: "How NerdStats fetches, processes, and displays public YouTube metrics.",
    api_source_title: "Data Source",
    api_source_desc: "All video statistics are fetched in real-time directly from the official Google YouTube Data API v3.",
    api_limits_title: "API Quotas & Limits",
    api_limits_desc: "Google enforces daily quota units on API calls. During high traffic, updates may be throttled to preserve availability.",
    api_freq_title: "Data Refresh Rate",
    api_freq_desc: "Metrics reflect the exact public values stored by YouTube at the time of your search request.",
    api_est_title: "About Estimates",
    api_est_desc: "Revenue and retention figures are math-based estimates calculated from public view counts and engagement ratios.",
    api_json_title: "Sample API Response Payload",

    faq_q1: "What is NerdStats?",
    faq_a1: "NerdStats is a public YouTube analytics platform designed to help creators and analysts inspect public engagement metrics, side-by-side video performance, and transparent data insights.",
    faq_q2: "Where does the data come from?",
    faq_a2: "All data is retrieved live directly from the official YouTube Data API v3 provided by Google.",
    faq_q3: "Is the revenue estimate accurate?",
    faq_a3: "No public tool can access exact YouTube earnings. Our revenue range is an estimation based on public views and standard industry RPM ranges ($0.50 - $2.50).",
    faq_q4: "What is NerdScore and how is it calculated?",
    faq_a4: "NerdScore is a custom analytical index (0-100) combining public likes, comments ratio, and audience velocity signals.",
    faq_q5: "Can NerdStats see private YouTube analytics or revenue?",
    faq_a5: "No. NerdStats only accesses publicly available signals. We cannot read private Studio metrics, subscriber retention graphs, or exact RPM.",
    faq_q6: "Can I analyze unlisted or private videos?",
    faq_a6: "You can analyze unlisted videos if you have their URL, but strictly private videos cannot be accessed via the public API.",
    faq_q7: "How is Public Engagement calculated?",
    faq_a7: "Public Engagement is calculated as: (Public Likes + Public Comments) divided by Total Views, expressed as a percentage.",
    faq_q8: "Does NerdStats store my searches?",
    faq_a8: "No. Searches are processed client-side in real-time. We do not store or track your individual search history.",
    faq_q9: "Which languages are supported?",
    faq_a9: "NerdStats supports 7 languages: English, Français, Español, Português, Deutsch, 日本語, and 한국어.",
    faq_q10: "What are the API usage limits?",
    faq_a10: "Requests are governed by Google YouTube API daily quota limits. If a limit is hit, request processing may pause temporarily.",

    // Support
    support_title: "Support & Feedback",
    support_sub: "Found a bug or have a suggestion? Send us a message directly.",
    support_type_bug: "Bug Report",
    support_type_feature: "Feature Request",
    support_type_issue: "Analysis Issue",
    support_type_other: "Other",
    support_send: "Send Message",
    support_success: "Thank you! Your message has been sent successfully.",
    support_error: "Error sending message. Please check your Webhook URL or try again later."
  },
  fr: {
    nav_home: "Accueil",
    nav_compare: "Comparer",
    nav_api: "API & Données",
    nav_faq: "FAQ",
    nav_support: "Support",
    hero_tag: "ANALYTIQUE YOUTUBE PUBLIQUE",
    hero_title: "Comprenez YouTube. En mieux.",
    hero_sub: "Analysez les vidéos et chaînes YouTube publiques avec des métriques transparentes et des comparaisons.",
    search_placeholder: "Collez une URL de vidéo ou chaîne YouTube...",
    search_btn: "Analyser",
    search_example: "Exemple : https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    stat_views: "Vues",
    stat_likes: "Likes",
    stat_comments: "Commentaires",
    stat_engagement: "Engagement Public",
    stat_revenue: "Revenu Estimé",
    nerdscore_explain: "Le NerdScore est basé sur les signaux d'engagement publics.",
    revenue_disclaimer: "Estimation basée sur des plages de RPM standard (0.50$ - 2.50$). Les revenus réels varient.",
    share_btn: "Partager l'Analyse",
    link_copied: "Lien copié dans le presse-papier !",
    trust_title: "Quelles données utilise NerdStats ?",
    trust_desc: "NerdStats s'appuie exclusivement sur les données publiques fournies par l'API officielle YouTube Data v3.",
    compare_title: "Comparaison Côte à Côte",
    compare_btn: "Comparer les Vidéos",
    
    api_title: "API & Transparence des Données",
    api_sub: "Comment NerdStats récupère, traite et affiche les métriques publiques YouTube.",
    api_source_title: "Source des Données",
    api_source_desc: "Toutes les statistiques sont récupérées en temps réel via l'API officielle YouTube Data v3 de Google.",
    api_limits_title: "Limites & Quotas API",
    api_limits_desc: "Google impose des quotas d'appels quotidiens. En cas de fort trafic, les rafraîchissements peuvent être régulés.",
    api_freq_title: "Fréquence des Données",
    api_freq_desc: "Les données reflètent les chiffres publics exacts renvoyés par YouTube au moment précis de votre recherche.",
    api_est_title: "Explication des Estimations",
    api_est_desc: "Les revenus et métriques de rétention sont des estimations basées sur le nombre de vues et l'engagement public.",
    api_json_title: "Exemple de Réponse API JSON",

    faq_q1: "Qu'est-ce que NerdStats ?",
    faq_a1: "NerdStats est une plateforme d'analyse YouTube publique conçue pour aider les créateurs et analystes à inspecter les métriques d'engagement et comparer les performances.",
    faq_q2: "D'où proviennent les données ?",
    faq_a2: "Toutes les données sont récupérées en direct depuis l'API officielle YouTube Data v3 de Google.",
    faq_q3: "L'estimation des revenus est-elle exacte ?",
    faq_a3: "Aucun outil public ne peut accéder aux revenus exacts. Notre plage est une estimation basée sur les vues publiques et un RPM moyen ($0.50 - $2.50).",
    faq_q4: "Qu'est-ce que le NerdScore et comment est-il calculé ?",
    faq_a4: "Le NerdScore est un indice analytique (0-100) combinant le ratio de likes, les commentaires et la vitesse d'engagement du public.",
    faq_q5: "NerdStats accède-t-il aux données privées ?",
    faq_a5: "Non. NerdStats n'accède qu'aux données publiques. Nous ne pouvons pas lire les statistiques privées YouTube Studio.",
    faq_q6: "Puis-je analyser une vidéo non répertoriée ou privée ?",
    faq_a6: "Vous pouvez analyser les vidéos non répertoriées si vous avez l'URL, mais les vidéos strictement privées ne sont pas accessibles.",
    faq_q7: "Comment est calculé l'engagement public ?",
    faq_a7: "L'engagement public correspond à : (Likes + Commentaires) divisé par le nombre total de Vues, exprimé en pourcentage.",
    faq_q8: "NerdStats stocke-t-il mes recherches ?",
    faq_a8: "Non. Les recherches sont traitées directement dans votre navigateur. Nous ne conservons aucun historique.",
    faq_q9: "Quelles sont les langues supportées ?",
    faq_a9: "NerdStats gère 7 langues : Anglais, Français, Espagnol, Portugais, Allemand, Japonais et Coréen.",
    faq_q10: "Quelles sont les limites d'utilisation de l'API ?",
    faq_a10: "Les requêtes dépendent des quotas quotidiens fournis par Google. En cas de dépassement, le service peut être temporairement ralenti.",

    support_title: "Support & Feedback",
    support_sub: "Un bug à signaler ou une idée d'amélioration ? Envoyez-nous un message.",
    support_type_bug: "Signalement de Bug",
    support_type_feature: "Suggestion de Fonctionnalité",
    support_type_issue: "Problème avec une Analyse",
    support_type_other: "Autre",
    support_send: "Envoyer le Message",
    support_success: "Merci ! Votre message a bien été envoyé.",
    support_error: "Erreur lors de l'envoi du message. Vérifiez l'URL du Webhook Discord."
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerText = translations[lang][key];
      }
    }
  });

  const selector = document.getElementById('langSelect');
  if (selector) selector.value = lang;
}

function initI18n() {
  const userLang = navigator.language.slice(0, 2);
  const supported = ['en', 'fr'];
  const defaultLang = supported.includes(userLang) ? userLang : 'en';
  setLanguage(defaultLang);
}

function formatLocaleNumber(num) {
  if (!num || isNaN(num)) return "0";
  return new Intl.NumberFormat(currentLang).format(num);
}
