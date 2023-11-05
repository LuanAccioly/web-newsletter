import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-newsletter-tan.vercel.app/',
});

export default api;
