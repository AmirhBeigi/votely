import { client } from "../../client";

interface GetVotes {
  page: number;
  search?: string;
  tag_id?: number;
}

export const getVotes = (params: GetVotes) => client.get(`/polls`, { params });
