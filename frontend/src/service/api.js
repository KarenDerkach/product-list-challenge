import axios from 'axios';
//import dotenv from "dotenv";
//dotenv.config();



const api = axios.create({
  baseURL:  'http://localhost:4000/api/v1',
})

//axios.defaults.baseURL = process.env.REACT_APP_API || api;

export default api;