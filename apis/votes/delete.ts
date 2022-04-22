import { httpClient } from '../client';
import { useMutation } from 'react-query';

interface DeletePoll {
  id: number;
}

export const deletePoll = ({ id }: DeletePoll) => httpClient.delete(`/polls/${id}`);

export const useDeletePoll = () => useMutation(deletePoll);
