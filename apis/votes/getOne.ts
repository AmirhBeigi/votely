import { httpClient } from '../client';
import { useQuery } from 'react-query';

export const getVote = (idOrShortIdentifier: string, token?: string) => {
  console.log(token);
  return httpClient.get(`/polls/${idOrShortIdentifier}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const useGetVote = (idOrShortIdentifier: string, token?: string) => {
  return useQuery(['getVote', idOrShortIdentifier], () => getVote(idOrShortIdentifier, token));
};
