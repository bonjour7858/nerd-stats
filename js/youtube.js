const YOUTUBE_API_KEY = "AIzaSyAx6nTNIfhwccw2JSJQ_JyYhrBTNn5p7LQ";

function extractVideoId(url) {
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function calculateNerdScore(views, likes, comments) {
  if (!views || views === 0) return 0;
  
  const likeRatio = (likes / views) * 100;
  const commentRatio = (comments / views) * 100;
  
  let score = 50; 
  score += Math.min(likeRatio * 6, 30); 
  score += Math.min(commentRatio * 40, 20); 

  return Math.min(Math.round(score), 99);
}

async function fetchYouTubeVideoData(videoId) {
  if (!YOUTUBE_API_KEY || YOUTUBE_API_KEY === "TA_CLE_API_YOUTUBE_ICI") {
    return {
      isDemo: true,
      title: "Demo Analysis — Setup API Key",
      channel: "NerdStats Studio",
      publishedAt: new Date().toISOString().split('T')[0],
      videoId: videoId,
      views: 186035,
      likes: 7449,
      comments: 300,
      tags: ["NerdStats", "Analytics", "YouTube"]
    };
  }

  const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${YOUTUBE_API_KEY}`);
  if (!response.ok) throw new Error(`API Error ${response.status}`);
  
  const data = await response.json();
  if (!data.items || data.items.length === 0) throw new Error("Video not found");

  const item = data.items[0];
  return {
    isDemo: false,
    title: item.snippet.title,
    channel: item.snippet.channelTitle,
    publishedAt: item.snippet.publishedAt.split('T')[0],
    videoId: videoId,
    views: parseInt(item.statistics.viewCount || 0),
    likes: parseInt(item.statistics.likeCount || 0),
    comments: parseInt(item.statistics.commentCount || 0),
    duration: item.contentDetails ? item.contentDetails.duration : "",
    tags: item.snippet.tags || []
  };
}
