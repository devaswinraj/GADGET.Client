import axios from "axios";

let api = axios.create({

    baseURL : "http://localhost:1000",

});


export default api;