const YOUTUBE_API_KEY = "__YOUTUBE_API_KEY__";

function extractVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

async function fetchVideoData(url) {
  const videoId = extractVideoId(url);
  if (!videoId) throw new Error("Format d'URL invalide. Utilise un lien YouTube valide.");

  if (!YOUTUBE_API_KEY || YOUTUBE_API_KEY === "__YOUTUBE_API_KEY__") {
    console.warn("Mode Démo activé (Clé API non injectée).");
    return fetchMockData(videoId);
  }

  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${YOUTUBE_API_KEY}`;
  
  const response = await fetch(apiUrl);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || "Erreur de communication avec l'API YouTube.");
  }

  const data = await response.json();
  if (!data.items || data.items.length === 0) {
    throw new Error("Vidéo introuvable ou vidéo privée.");
  }

  const item = data.items[0];
  return {
    id: videoId,
    title: item.snippet.title,
    channel: item.snippet.channelTitle,
    thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
    views: parseInt(item.statistics.viewCount || "0", 10),
    likes: parseInt(item.statistics.likeCount || "0", 10),
    comments: parseInt(item.statistics.commentCount || "0", 10)
  };
}

function fetchMockData(videoId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: videoId,
        title: "Analyse Vidéo — Mode Démo NerdStats",
        channel: "NerdStats Channel",
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        views: 1250000,
        likes: 85000,
        comments: 4200
      });
    }, 600);
  });
}
