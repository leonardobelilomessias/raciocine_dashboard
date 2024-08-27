import axios from 'axios';

const axiosApi = axios.create({
  baseURL: process.env.URL_HOST,
});
export {axiosApi}