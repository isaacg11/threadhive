import axios from 'axios';
import store from '../store/store.js';

const API_BASE_URL = 'http://localhost:5000/api';
// const API_BASE_URL = 'https://w04-mls.onrender.com/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
});

export default apiClient;
