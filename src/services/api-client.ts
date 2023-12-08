import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5edd010ab9b443fc96eb7ced5a735e52'
  }
})
