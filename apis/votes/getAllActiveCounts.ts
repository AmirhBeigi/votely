import { httpClient } from '../client';
import { useQuery } from 'react-query';

export const getActiveCounts = (token?: string) =>
  httpClient.get(`/polls/active-counts`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

export const useGetActiveCounts = (token?: string) =>
  useQuery(['getActiveCounts', token], () => getActiveCounts(token));
