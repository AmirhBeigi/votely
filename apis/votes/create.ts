import { formData } from '../../utils/formData';
import { httpClient } from '../client';
import { useMutation } from 'react-query';

interface CreatePoll {
  title: string;
  cover?: File;
  options: { title: string }[];
  tag_ids?: number[];
}

const createPoll = (voteParams: CreatePoll) =>
  httpClient.post(`/polls`, formData({ ...voteParams }));

export const useCreatePoll = () => useMutation(createPoll);
