import { client } from '../../client';

interface CreateTag {
  title: string;
}

export const createTag = (tagParams: CreateTag) => client.post(`/tags`, { ...tagParams });
