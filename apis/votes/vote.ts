import { httpClient } from '../client';
import { useMutation } from 'react-query';

interface Vote {
  id: number;
  option_id: string;
}

export const vote = ({ id, option_id }: Vote) =>
  httpClient.post(`/polls/${id}/vote`, { option_id });

export const useVote = () => useMutation(vote);
