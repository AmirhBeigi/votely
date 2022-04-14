import { useQuery } from 'react-query';
import { getVotes } from './api';

interface GetVotes {
  page: number;
  search?: string;
  tag_id?: number;
  owner_id?: number;
  is_closed?: boolean;
}

export const useGetVote = (params: GetVotes) => {
  return useQuery(['getVote', params], () => getVotes(params));
};
