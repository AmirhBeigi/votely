import { client } from '../../client';

interface GetVotes {
  page: number;
  search?: string;
  tag_id?: number;
  owner_id?: number;
  is_closed?: boolean;
}

export const getVotes = (params: GetVotes) => client.get(`/polls`, { params });
