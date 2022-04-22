import { httpClient } from '../client';
import { useQuery } from 'react-query';

interface GetVotes {
  page: number;
  search?: string;
  tag_id?: number;
  owner_id?: number;
  is_closed?: boolean;
}

export const getVotes = (params: GetVotes) => httpClient.get(`/polls`, { params });

export const useGetVotes = (params: GetVotes) => {
  return useQuery(['getVotes', params], () => getVotes(params));
};
