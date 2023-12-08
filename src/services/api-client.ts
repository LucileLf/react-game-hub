import axios from "axios";

const apiClient =  axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5edd010ab9b443fc96eb7ced5a735e52'
  }
})

export default apiClient;
