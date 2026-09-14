const translations = {
  fr: {
    navAnalyze: "Analyser", navFaq: "FAQ", navSupport: "Support",
    heroBadge: "ANALYTICS YOUTUBE PUBLIC", heroTitle1: "Accrois Tes", heroTitle2: "Performances !",
    heroSub: "NerdStats est l'outil ultime d'audit YouTube. Analysez l'engagement, estimez les revenus et découvrez le NerdScore.",
    inputPlaceholder: "Colle le lien d'une vidéo YouTube...", analyzeBtn: "Analyser",
    previewPlaceholder: "Lance une analyse pour visionner la vidéo ici",
    lblScore: "NERDSCORE", scoreSub: "Indice de viralité & d'engagement",
    lblViews: "VUES", lblLikes: "LIKES", lblEngagement: "ENGAGEMENT", lblComments: "COMMENTAIRES",
    lblRevenue: "REVENUS ESTIMÉS (RPM)", revenueSub: "Basé sur un RPM moyen de $0.50 à $2.50",
    shareBtn: "Partager le rapport", faqTitle: "Foire Aux Questions",
    faqSub: "Tout ce que vous devez savoir sur le fonctionnement des algorithmes NerdStats.",
    faqSearchPh: "Rechercher une question...",
    faqQ1: "Comment est calculé le NerdScore ?", faqA1: "Le NerdScore croise le taux d'interaction par rapport aux vues.",
    faqQ2: "D'où viennent les estimations ?", faqA2: "Des tranches de RPM standardisées sur YouTube ($0.50 - $2.50).",
    faqQ3: "Les données sont-elles en temps réel ?", faqA3: "Oui, direct via l'API officielle v3 YouTube.",
    faqQ4: "Pourquoi certains likes sont masqués ?", faqA4: "Si le créateur désactive les likes, l'API renvoie 0.",
    faqQ5: "Puis-je analyser des Shorts ?", faqA5: "Oui, colle simplement le lien du Short.",
    supportTitle: "Support & Feedback", supportSub: "Un bug ou une idée ? Laisse-nous un message.",
    lblCategory: "Catégorie", lblMessage: "Votre message",
    optBug: "Rapporter un bug", optFeature: "Proposer une idée", optQuestion: "Question générale",
    supportPlaceholder: "Explique ton problème...", sendBtn: "Envoyer"
  },
  en: {
    navAnalyze: "Analyze", navFaq: "FAQ", navSupport: "Support",
    heroBadge: "PUBLIC YOUTUBE ANALYTICS", heroTitle1: "Boost Your", heroTitle2: "Performance!",
    heroSub: "NerdStats is the ultimate YouTube audit tool. Analyze engagement, estimate revenue, and discover the NerdScore.",
    inputPlaceholder: "Paste a YouTube video link...", analyzeBtn: "Analyze",
    previewPlaceholder: "Run an analysis to watch the video here",
    lblScore: "NERDSCORE", scoreSub: "Virality & engagement index",
    lblViews: "VIEWS", lblLikes: "LIKES", lblEngagement: "ENGAGEMENT", lblComments: "COMMENTS",
    lblRevenue: "ESTIMATED REVENUE (RPM)", revenueSub: "Based on average RPM of $0.50 to $2.50",
    shareBtn: "Share Report", faqTitle: "Frequently Asked Questions",
    faqSub: "Everything you need to know about NerdStats metrics.",
    faqSearchPh: "Search a question...",
    faqQ1: "How is NerdScore calculated?", faqA1: "It measures interaction rate against total views.",
    faqQ2: "Where do estimates come from?", faqA2: "Based on standard YouTube RPM rates.",
    faqQ3: "Is data real-time?", faqA3: "Yes, fetched live via official YouTube API.",
    faqQ4: "Why are some likes hidden?", faqA4: "If creator hidden likes, API returns 0.",
    faqQ5: "Can I analyze Shorts?", faqA5: "Yes, just paste the Short link.",
    supportTitle: "Support & Feedback", supportSub: "Bug or feature idea? Send a message.",
    lblCategory: "Category", lblMessage: "Your message",
    optBug: "Report a bug", optFeature: "Suggest feature", optQuestion: "General question",
    supportPlaceholder: "Describe your issue...", sendBtn: "Send"
  },
  ro: {
    navAnalyze: "Analizează", navFaq: "FAQ", navSupport: "Suport",
    heroBadge: "ANALIZĂ YOUTUBE PUBLICĂ", heroTitle1: "Mărește-ți", heroTitle2: "Performanța!",
    heroSub: "NerdStats este instrumentul suprem de audit YouTube. Analizează interacțiunea și estimează veniturile.",
    inputPlaceholder: "Lipește un link video YouTube...", analyzeBtn: "Analizează",
    previewPlaceholder: "Lansează o analiză pentru a viziona videoclipul aici",
    lblScore: "NERDSCORE", scoreSub: "Indice de viralitate și interacțiune",
    lblViews: "VIZIONĂRI", lblLikes: "APRECIERI", lblEngagement: "RATA INTERACȚIUNE", lblComments: "COMENTARII",
    lblRevenue: "VENITURI ESTIMATE (RPM)", revenueSub: "Bazat pe un RPM mediu de $0.50 la $2.50",
    shareBtn: "Distribuie raportul", faqTitle: "Întrebări Frecvente",
    faqSub: "Tot ce trebuie să știi despre metricele NerdStats.",
    faqSearchPh: "Caută o întrebare...",
    faqQ1: "Cum este calculat NerdScore?", faqA1: "Compară rata de interacțiune cu numărul total de vizionări.",
    faqQ2: "De unde provin estimările de venit?", faqA2: "Sunt bazate pe valorile medii RPM YouTube.",
    faqQ3: "Datele sunt în timp real?", faqA3: "Da, sunt preluate direct prin API-ul oficial YouTube.",
    faqQ4: "De ce sunt ascunse unele aprecieri?", faqA4: "Dacă creatorul a ascuns aprecierile, API-ul returnează 0.",
    faqQ5: "Pot analiza YouTube Shorts?", faqA5: "Da, lipește doar linkul Short-ului.",
    supportTitle: "Suport și Feedback", supportSub: "Ai un bug sau o idee? Trimite-ne un mesaj.",
    lblCategory: "Categorie", lblMessage: "Mesajul tău",
    optBug: "Raportează o problemă", optFeature: "Propune o funcție", optQuestion: "Întrebare generală",
    supportPlaceholder: "Descrie problema ta...", sendBtn: "Trimite"
  },
  ar: {
    navAnalyze: "تحليل", navFaq: "الأسئلة الشائعة", navSupport: "الدعم",
    heroBadge: "تحليلات يوتيوب العامة", heroTitle1: "عزز", heroTitle2: "أداءك!",
    heroSub: "NerdStats هي الأداة المثالية لتدقيق يوتيوب. تحليلات التفاعل وتقدير الأرباح.",
    inputPlaceholder: "الصق رابط فيديو يوتيوب...", analyzeBtn: "تحليل",
    previewPlaceholder: "قم بإجراء تحليل لمشاهدة الفيديو هنا",
    lblScore: "NERDSCORE", scoreSub: "مؤشر الانتشار والتفاعل",
    lblViews: "المشاهدات", lblLikes: "الإعجابات", lblEngagement: "نسبة التفاعل", lblComments: "التعليقات",
    lblRevenue: "الأرباح المقدرة", revenueSub: "بناءً على متوسط RPM من 0.50$ إلى 2.50$",
    shareBtn: "مشاركة التقرير", faqTitle: "الأسئلة الشائعة",
    faqSub: "كل ما تحتاج لمعرفته حول خوارزميات NerdStats.",
    faqSearchPh: "البحث عن سؤال...",
    faqQ1: "كيف يتم حساب NerdScore؟", faqA1: "يقيس معدل التفاعل مقارنة بإجمالي المشاهدات.",
    faqQ2: "من أين تأتي تقديرات الأرباح؟", faqA2: "تعتمد على معدلات RPM القياسية في يوتيوب.",
    faqQ3: "هل البيانات في الوقت الفعلي؟", faqA3: "نعم، يتم جلبها مباشرة عبر API يوتيوب الرسمي.",
    faqQ4: "لماذا تم إخفاء بعض الإعجابات؟", faqA4: "إذا قام المنشئ بإخفاء الإعجابات، يُرجع النظام 0.",
    faqQ5: "هل يمكنني تحليل مقاطع Shorts؟", faqA5: "نعم، فقط الصق رابط المقطع.",
    supportTitle: "الدعم والملاحظات", supportSub: "هل وجد بقعة أخطاء أو لديك فكرة؟ أرسل لنا رسالة.",
    lblCategory: "الفئة", lblMessage: "رسالتك",
    optBug: "الإبلاغ عن خلل", optFeature: "اقتراح ميزة", optQuestion: "سؤال عام",
    supportPlaceholder: "اشرح مشكلتك...", sendBtn: "إرسال"
  },
  ja: {
    navAnalyze: "分析する", navFaq: "よくある質問", navSupport: "サポート",
    heroBadge: "公開YOUTUBEアナリティクス", heroTitle1: "パフォーマンスを", heroTitle2: "向上させよう！",
    heroSub: "NerdStatsは最高のYouTube監査ツールです。エンゲージメントの分析や収益予測を行います。",
    inputPlaceholder: "YouTube動画のリンクを貼り付け...", analyzeBtn: "分析",
    previewPlaceholder: "分析を実行してここで動画を視聴",
    lblScore: "NERDSCORE", scoreSub: "バイラル＆エンゲージメント指数",
    lblViews: "再生回数", lblLikes: "高評価", lblEngagement: "エンゲージメント率", lblComments: "コメント数",
    lblRevenue: "推定収益 (RPM)", revenueSub: "平均RPM $0.50〜$2.50 に基づく",
    shareBtn: "レポートを共有", faqTitle: "よくある質問",
    faqSub: "NerdStatsの指標とアルゴリズムに関するすべての情報。",
    faqSearchPh: "質問を検索...",
    faqQ1: "NerdScoreはどのように計算されますか？", faqA1: "総再生回数に対する高評価やコメントの割合を測定します。",
    faqQ2: "収益予測はどこから来ていますか？", faqA2: "標準的なYouTube RPM範囲に基づいています。",
    faqQ3: "データはリアルタイムですか？", faqA3: "はい、公式YouTube API v3から直接取得しています。",
    faqQ4: "高評価数が非表示になっているのはなぜ？", faqA4: "投稿者が非表示にしている場合、APIは0を返します。",
    faqQ5: "YouTube Shortsも分析できますか？", faqA5: "はい！Shortsのリンクを貼り付けるだけです。",
    supportTitle: "サポート＆フィードバック", supportSub: "バグやアイデアがありますか？メッセージをお送りください。",
    lblCategory: "カテゴリ", lblMessage: "メッセージ",
    optBug: "バグを報告", optFeature: "機能を提案", optQuestion: "一般的な質問",
    supportPlaceholder: "問題を説明してください...", sendBtn: "送信"
  },
  zh: {
    navAnalyze: "分析", navFaq: "常见问题", navSupport: "支持",
    heroBadge: "公开 YOUTUBE 数据分析", heroTitle1: "提升你的", heroTitle2: "视频表现！",
    heroSub: "NerdStats 是终极 YouTube 审计工具。分析互动率并预测估算收益。",
    inputPlaceholder: "粘贴 YouTube 视频链接...", analyzeBtn: "开始分析",
    previewPlaceholder: "运行分析以在此处观看视频",
    lblScore: "NERDSCORE", scoreSub: "病毒传播与互动指数",
    lblViews: "播放量", lblLikes: "点赞数", lblEngagement: "互动率", lblComments: "评论数",
    lblRevenue: "预估收益 (RPM)", revenueSub: "基于平均 RPM $0.50 至 $2.50",
    shareBtn: "分享报告", faqTitle: "常见问题",
    faqSub: "了解有关 NerdStats 指标的所有信息。",
    faqSearchPh: "搜索问题...",
    faqQ1: "NerdScore 是如何计算的？", faqA1: "它通过比较互动次数与总播放量来计算。",
    faqQ2: "收益预估从何而来？", faqA2: "基于 YouTube 的标准 RPM 范围。",
    faqQ3: "数据是实时的吗？", faqA3: "是的，直接通过 YouTube 官方 API v3 获取。",
    faqQ4: "为什么有些点赞被隐藏了？", faqA4: "如果创作者隐藏了点赞，API 将返回 0。",
    faqQ5: "我可以分析 Shorts 短视频吗？", faqA5: "当然！只需粘贴 Shorts 链接即可。",
    supportTitle: "支持与反馈", supportSub: "发现 Bug 或有新想法？给我们留言。",
    lblCategory: "类别", lblMessage: "您的留言",
    optBug: "报告 Bug", optFeature: "建议新功能", optQuestion: "一般问题",
    supportPlaceholder: "描述您的问题...", sendBtn: "发送"
  },
  ko: {
    navAnalyze: "분석하기", navFaq: "자주 묻는 질문", navSupport: "지원",
    heroBadge: "공개 YOUTUBE 분석", heroTitle1: "성과를", heroTitle2: "극대화하세요!",
    heroSub: "NerdStats는 최상의 YouTube 감사 도구입니다. 참여도를 분석하고 예상 수익을 확인하세요.",
    inputPlaceholder: "YouTube 동영상 링크 붙여넣기...", analyzeBtn: "분석",
    previewPlaceholder: "분석을 실행하여 여기서 동영상 시청",
    lblScore: "NERDSCORE", scoreSub: "바이럴 및 참여도 지수",
    lblViews: "조회수", lblLikes: "좋아요", lblEngagement: "참여율", lblComments: "댓글 수",
    lblRevenue: "예상 수익 (RPM)", revenueSub: "평균 RPM $0.50 ~ $2.50 기준",
    shareBtn: "보고서 공유", faqTitle: "자주 묻는 질문",
    faqSub: "NerdStats 지표에 대해 알아야 할 모든 것.",
    faqSearchPh: "질문 검색...",
    faqQ1: "NerdScore는 어떻게 계산되나요?", faqA1: "총 조회수 대비 참여 비율을 측정합니다.",
    faqQ2: "수익 추정치는 어디서 오나요?", faqA2: "표준 YouTube RPM 범위를 기준으로 합니다.",
    faqQ3: "실시간 데이터인가요?", faqA3: "네, 공식 YouTube API v3를 통해 즉시 가져옵니다.",
    faqQ4: "일부 좋아요 수가 숨겨진 이유는 무엇인가요?", faqA4: "크리에이터가 숨긴 경우 API는 0을 반환합니다.",
    faqQ5: "Shorts도 분석할 수 있나요?", faqA5: "네! Shorts 링크를 붙여넣기만 하면 됩니다.",
    supportTitle: "지원 및 피드백", supportSub: "버그나 아이디어가 있으신가요? 메시지를 남겨주세요.",
    lblCategory: "카테고리", lblMessage: "메시지",
    optBug: "버그 신고", optFeature: "기능 제안", optQuestion: "일반 질문",
    supportPlaceholder: "문제를 설명해주세요...", sendBtn: "전송"
  },
  es: { navAnalyze: "Analizar", navFaq: "FAQ", navSupport: "Soporte" },
  de: { navAnalyze: "Analysieren", navFaq: "FAQ", navSupport: "Support" },
  pt: { navAnalyze: "Analisar", navFaq: "FAQ", navSupport: "Suporte" },
  ru: { navAnalyze: "Анализировать", navFaq: "FAQ", navSupport: "Поддержка" }
};

function changeLanguage(lang) {
  const dictionary = translations[lang] || translations.fr;
  
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
    document.body.classList.add('rtl-mode');
  } else {
    document.documentElement.dir = 'ltr';
    document.body.classList.remove('rtl-mode');
  }

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(element => {
    const key = element.getAttribute('data-i18n-ph');
    if (dictionary[key]) {
      element.setAttribute('placeholder', dictionary[key]);
    }
  });

  localStorage.setItem('nerdstats_lang', lang);
}
