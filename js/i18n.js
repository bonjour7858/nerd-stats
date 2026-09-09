const translations = {
  en: {
    nav_home: "Home",
    nav_features: "Features",
    nav_compare: "Compare",
    nav_api: "API & Data",
    nav_faq: "FAQ",
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
    stat_duration: "Duration",
    nerdscore_explain: "NerdScore is calculated using public engagement signals (likes, comments, velocity).",
    revenue_disclaimer: "This is an estimate based on assumed RPM ranges ($0.50 - $2.50). Actual creator revenue varies.",
    engagement_tooltip: "Calculated as (Likes + Comments) / Views based on public data.",
    share_btn: "Share Analysis",
    copy_link: "Copy Link",
    link_copied: "Link copied to clipboard!",
    trust_title: "What data does NerdStats use?",
    trust_desc: "NerdStats relies exclusively on publicly accessible data provided via the official YouTube Data API v3. We never claim access to private creator analytics.",
    faq_title: "Frequently Asked Questions",
    compare_title: "Side-by-Side Comparison",
    compare_btn: "Compare Videos"
  },
  fr: {
    nav_home: "Accueil",
    nav_features: "Fonctionnalités",
    nav_compare: "Comparer",
    nav_api: "API & Données",
    nav_faq: "FAQ",
    hero_tag: "ANALYTIQUE YOUTUBE PUBLIQUE",
    hero_title: "Comprenez YouTube. En mieux.",
    hero_sub: "Analysez les vidéos et chaînes YouTube publiques avec des métriques transparentes, des indicateurs d'engagement et des comparaisons.",
    search_placeholder: "Collez une URL de vidéo ou chaîne YouTube...",
    search_btn: "Analyser",
    search_example: "Exemple : https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    stat_views: "Vues",
    stat_likes: "Likes",
    stat_comments: "Commentaires",
    stat_engagement: "Engagement Public",
    stat_revenue: "Revenu Estimé",
    stat_duration: "Durée",
    nerdscore_explain: "Le NerdScore est basé sur les signaux d'engagement publics (likes, commentaires, vélocité).",
    revenue_disclaimer: "Estimation basée sur des plages de RPM standard (0.50$ - 2.50$). Les revenus réels varient.",
    engagement_tooltip: "Calculé par (Likes + Commentaires) / Vues selon les données publiques.",
    share_btn: "Partager l'Analyse",
    copy_link: "Copier le Lien",
    link_copied: "Lien copié dans le presse-papier !",
    trust_title: "Quelles données utilise NerdStats ?",
    trust_desc: "NerdStats s'appuie exclusivement sur les données publiques fournies par l'API officielle YouTube Data v3.",
    faq_title: "Foire Aux Questions",
    compare_title: "Comparaison Côte à Côte",
    compare_btn: "Comparer les Vidéos"
  },
  es: {
    nav_home: "Inicio", nav_features: "Funciones", nav_compare: "Comparar", nav_api: "API", nav_faq: "FAQ",
    hero_tag: "ANALÍTICA PÚBLICA DE YOUTUBE", hero_title: "Entiende YouTube. Mejor.",
    hero_sub: "Analiza vídeos y canales públicos de YouTube con métricas transparentes y comparativas.",
    search_placeholder: "Pega una URL de vídeo o canal de YouTube...", search_btn: "Analizar",
    stat_views: "Vistas", stat_likes: "Me gusta", stat_comments: "Comentarios", stat_engagement: "Engagement Público",
    stat_revenue: "Ingresos Estimados", share_btn: "Compartir Análisis", copy_link: "Copiar Enlace"
  },
  pt: {
    nav_home: "Início", nav_features: "Recursos", nav_compare: "Comparar", nav_api: "API", nav_faq: "FAQ",
    hero_tag: "ANÁLISE PÚBLICA DO YOUTUBE", hero_title: "Entenda o YouTube. Melhor.",
    hero_sub: "Análise vídeos e canais públicos do YouTube com métricas transparentes.",
    search_placeholder: "Cole uma URL de vídeo ou canal do YouTube...", search_btn: "Analisar",
    stat_views: "Visualizações", stat_likes: "Curtidas", stat_comments: "Comentários", stat_engagement: "Engajamento Público",
    stat_revenue: "Receita Estimada", share_btn: "Compartilhar Análise", copy_link: "Copiar Link"
  },
  de: {
    nav_home: "Startseite", nav_features: "Funktionen", nav_compare: "Vergleichen", nav_api: "API", nav_faq: "FAQ",
    hero_tag: "ÖFFENTLICHE YOUTUBE-ANALYSEN", hero_title: "Verstehe YouTube. Besser.",
    hero_sub: "Analysieren Sie öffentliche YouTube-Videos und -Kanäle mit transparenten Metriken.",
    search_placeholder: "YouTube-Video- oder Kanal-URL einfügen...", search_btn: "Analysieren",
    stat_views: "Aufrufe", stat_likes: "Gefällt mir", stat_comments: "Kommentare", stat_engagement: "Öffentliches Engagement",
    stat_revenue: "Geschätzter Umsatz", share_btn: "Analyse teilen", copy_link: "Link kopieren"
  },
  ja: {
    nav_home: "ホーム", nav_features: "機能", nav_compare: "比較", nav_api: "API", nav_faq: "よくある質問",
    hero_tag: "パブリック YOUTUBE アナリティクス", hero_title: "YouTubeを、より深く理解する。",
    hero_sub: "公開されているYouTube動画やチャンネルを透明性の高い指標で分析。",
    search_placeholder: "YouTube動画またはチャンネルのURLを貼り付け...", search_btn: "分析する",
    stat_views: "再生回数", stat_likes: "高評価", stat_comments: "コメント", stat_engagement: "エンゲージメント率",
    stat_revenue: "推定収益", share_btn: "分析を共有", copy_link: "リンクをコピー"
  },
  ko: {
    nav_home: "홈", nav_features: "기능", nav_compare: "비교", nav_api: "API", nav_faq: "자주 묻는 질문",
    hero_tag: "공개 YOUTUBE 분석", hero_title: "YouTube를 더 명확하게 이해하세요.",
    hero_sub: "공개된 YouTube 동영상 및 채널을 투명한 지표로 분석합니다.",
    search_placeholder: "YouTube 동영상 또는 채널 URL 붙여넣기...", search_btn: "분석하기",
    stat_views: "조회수", stat_likes: "좋아요", stat_comments: "댓글", stat_engagement: "공개 참여율",
    stat_revenue: "예상 수익", share_btn: "분석 공유", copy_link: "링크 복사"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' && el.type === 'text') {
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
