import axios from 'axios';
import { getCookie, removeCookies, setCookies } from 'cookies-next';
import { showError } from '@/utils/showError';
import { refresh } from './auth/refresh';

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

httpClient.interceptors.request.use(config => {
  const token = getCookie('votely.token');
  const excloudUrl = ['/auth/refresh'];
  if (token && !excloudUrl.includes(config.url!)) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return config;
});

httpClient.interceptors.response.use(
  data => {
    return data;
  },
  async error => {
    const originalRequest = error.config;

    const excloudUrl = [
      '/auth/login',
      '/auth/register',
      '/auth/google-token/login',
      '/auth/refresh'
    ];

    if (error.response?.status === 401 && !excloudUrl.includes(originalRequest.url)) {
      try {
        const { access_token } = await refresh();
        setCookies('votely.token', access_token);

        return httpClient(originalRequest);
      } catch (error) {
        removeCookies('votely.token');
        removeCookies('votely.refresh_token');
        return window.location.replace(`/login`);
      }
    }

    showError(error);
    return Promise.reject(error);
  }
);
