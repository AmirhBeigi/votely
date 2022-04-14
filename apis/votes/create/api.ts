import { formData } from '../../../utils/formData';
import { client } from '../../client';

interface CreatePoll {
  title: string;
  cover?: File;
  options: { title: string }[];
  tag_ids?: number[];
}

export const createPoll = (voteParams: CreatePoll) =>
  client.post(`/polls`, formData({ ...voteParams }));
