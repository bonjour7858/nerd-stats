const API_KEY = "__YOUTUBE_API_KEY__";

async function fetchVideoData(videoId) {
    if (!API_KEY || API_KEY === "__YOUTUBE_API_KEY__") {
        console.warn("Mode Démo activé (Clé API non injectée).");
        return null;
    }

    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`);
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
            return data.items[0];
        } else {
            throw new Error("Vidéo introuvable.");
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données YouTube :", error);
        return null;
    }
}
