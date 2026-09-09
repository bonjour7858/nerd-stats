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

    support_title: "Support & Feedback",
    support_sub: "Found a bug or have a suggestion? Send us a message directly.",
    support_type_bug: "Bug Report",
    support_type_feature: "Feature Request",
    support_type_issue: "Analysis Issue",
    support_type_other: "Other",
    support_send: "Send Message",
    support_success: "Thank you! Your message has been sent successfully.",
    support_error: "Error sending message. Please try again later."
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

    support_title: "Support & Feedback",
    support_sub: "Un bug à signaler ou une idée d'amélioration ? Envoyez-nous un message.",
    support_type_bug: "Signalement de Bug",
    support_type_feature: "Suggestion de Fonctionnalité",
    support_type_issue: "Problème avec une Analyse",
    support_type_other: "Autre",
    support_send: "Envoyer le Message",
    support_success: "Merci ! Votre message a bien été envoyé.",
    support_error: "Erreur lors de l'envoi du message. Veuillez réessayer."
  },
  es: { nav_home: "Inicio", nav_compare: "Comparar", nav_api: "API & Datos", nav_faq: "FAQ", nav_support: "Soporte" },
  pt: { nav_home: "Início", nav_compare: "Comparar", nav_api: "API & Dados", nav_faq: "FAQ", nav_support: "Suporte" },
  de: { nav_home: "Startseite", nav_compare: "Vergleichen", nav_api: "API & Daten", nav_faq: "FAQ", nav_support: "Support" },
  ja: { nav_home: "ホーム", nav_compare: "比較", nav_api: "APIとデータ", nav_faq: "よくある質問", nav_support: "サポート" },
  ko: { nav_home: "홈", nav_compare: "비교", nav_api: "API 및 데이터", nav_faq: "자주 묻는 질문", nav_support: "지원" }
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
  const supported = ['en', 'fr', 'es', 'pt', 'de', 'ja', 'ko'];
  const defaultLang = supported.includes(userLang) ? userLang : 'en';
  setLanguage(defaultLang);
}

function formatLocaleNumber(num) {
  if (!num || isNaN(num)) return "0";
  return new Intl.NumberFormat(currentLang).format(num);
}
