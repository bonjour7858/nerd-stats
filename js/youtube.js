const YOUTUBE_API_KEY = "__YOUTUBE_API_KEY__";


function extractVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}


async function fetchVideoData(url) {
  const videoId = extractVideoId(url);
  if (!videoId) {
    throw new Error("L'URL YouTube fournie est invalide.");
  }

  const endpoint = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${YOUTUBE_API_KEY}`;
  
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Erreur de communication avec l'API YouTube.");
  }

  const data = await response.json();
  if (!data.items || data.items.length === 0) {
    throw new Error("Vidéo introuvable ou définie comme privée.");
  }

  const item = data.items[0];
  const snippet = item.snippet;
  const stats = item.statistics;

  return {
    id: videoId,
    title: snippet.title,
    channel: snippet.channelTitle,
    thumbnail: snippet.thumbnails.maxres?.url || snippet.thumbnails.high.url,
    views: parseInt(stats.viewCount || 0, 10),
    likes: parseInt(stats.likeCount || 0, 10),
    comments: parseInt(stats.commentCount || 0, 10)
  };
}
