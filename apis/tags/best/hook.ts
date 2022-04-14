import { useQuery } from 'react-query';
import { getBestTags } from './api';

interface GetBestTags {
  page: number;
}
export const useGetBestTags = (params: GetBestTags) => {
  return useQuery(['getTags', params], () => getBestTags(params), {
    enabled: false
  });
};
