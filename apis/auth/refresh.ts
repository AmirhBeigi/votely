import { getCookie } from 'cookies-next';
import { httpClient } from '../client';

export const refresh = () => {
  return httpClient
    .post('/auth/refresh', null, {
      headers: { Authorization: `Bearer ${getCookie('votely.refresh_token')}` }
    })
    .then(res => res.data);
};
