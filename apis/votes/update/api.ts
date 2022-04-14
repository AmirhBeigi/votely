import { client } from '../../client';

interface UpdatePoll {
  id: number;
  is_closed?: 'true' | 'false';
}

export const updatePoll = ({ id, ...params }: UpdatePoll) =>
  client.patch(`/polls/${id}`, { ...params });
