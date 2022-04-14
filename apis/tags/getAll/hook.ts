import { useQuery } from 'react-query';
import { getTags } from './api';

interface GetTags {
  page: number;
  search?: string;
}

export const useGetTags = (params: GetTags, initialData?: any) => {
  return useQuery(['getTags', params], () => getTags(params), {
    initialData,
    enabled: false
  });
};
