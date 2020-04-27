import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_TMDB_API_URL
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.api_key = process.env.REACT_APP_TMDB_API_KEY;
  config.params.language = 'ru-RU';

  return config;
});
