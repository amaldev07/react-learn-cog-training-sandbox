import axios from "axios";

const fetchVideos = () => {
  return axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResult: 20,
      key: "AIzaSyCMmIA8hCBSmNIn44TLu9Uc4HFyf7GpcBA"
    }
  });
};

export default fetchVideos;
