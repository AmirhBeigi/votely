import axios from 'axios';
import { getCookie } from 'cookies-next';
import { showError } from '../utils/showError';

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

client.interceptors.request.use(config => {
  const token = getCookie('votely.token');
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return config;
});

client.interceptors.response.use(
  data => {
    return data;
  },
  error => {
    showError(error);
    return Promise.reject(error);
  }
);
