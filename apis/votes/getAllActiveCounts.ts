import { httpClient } from '../client';
import { useQuery } from 'react-query';
import { getCookie } from 'cookies-next';

export const getActiveCounts = () => httpClient.get(`/polls/active-counts`).then(res => res.data);

export const useGetActiveCounts = () =>
  useQuery(['getActiveCounts'], getActiveCounts, {
    enabled: !!getCookie('votely.token')
  });
