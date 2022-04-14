import { client } from '../../client';

interface GetBestTags {
  page: number;
}

export const getBestTags = (params: GetBestTags) => client.get(`/tags/best`, { params });
