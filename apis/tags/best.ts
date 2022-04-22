import { httpClient } from '../client';
import { useQuery } from 'react-query';

interface GetBestTags {
  page: number;
}

export const getBestTags = (params: GetBestTags) => httpClient.get(`/tags/best`, { params });

export const useGetBestTags = (params: GetBestTags) => {
  return useQuery(['getTags', params], () => getBestTags(params), {
    enabled: false
  });
};
