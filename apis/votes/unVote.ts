import { httpClient } from '../client';
import { useMutation } from 'react-query';

interface UnVote {
  id: number;
}

export const unVote = ({ id }: UnVote) => httpClient.post(`/polls/${id}/unvote`);

export const useUnVote = () => useMutation(unVote);
