import { client } from "../../client";

interface GetTags {
  page: number;
  search?: string;
}

export const getTags = (params: GetTags) => client.get(`/tags`, { params });
