import { httpClient } from '../client';
import { useMutation } from 'react-query';

interface UpdatePoll {
  id: number;
  is_closed?: 'true' | 'false';
}

export const updatePoll = ({ id, ...params }: UpdatePoll) =>
  httpClient.patch(`/polls/${id}`, { ...params });

export const useUpdatePoll = () => useMutation(updatePoll);
