import axios from "axios";

let api_url = import.meta.env.VITE_API_URL

let api = axios.create({

    baseURL: api_url,

});


export default api;