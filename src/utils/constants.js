const YOUTUBE_API_KEY = "AIzaSyDMUuHVMMbZTEjT-UFuSCiRQ0DFOhA0CFI";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;
