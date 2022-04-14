import { client } from '../../client';

interface DeletePoll {
  id: number;
}

export const deletePoll = ({ id }: DeletePoll) => client.delete(`/polls/${id}`);
