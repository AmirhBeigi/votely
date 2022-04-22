import { httpClient } from '../client';
import { useMutation } from 'react-query';

interface CreateTag {
  title: string;
}

export const createTag = (tagParams: CreateTag) => httpClient.post(`/tags`, { ...tagParams });

export const useCreateTag = () => useMutation(createTag);
