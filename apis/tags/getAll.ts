import { httpClient } from '../client';
import { useQuery } from 'react-query';

interface GetTags {
  page: number;
  search?: string;
}

export const getTags = (params: GetTags): Promise<Tag[]> =>
  httpClient.get(`/tags`, { params }).then(res => res.data);

export const useGetTags = (params: GetTags, initialData?: any, enabled: boolean = false) => {
  return useQuery<Tag[]>(['getTags', params], () => getTags(params), {
    initialData,
    enabled: enabled
  });
};
