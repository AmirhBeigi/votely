import { useQuery } from "react-query";
import { getVotes } from "./api";

interface GetVotes {
  page: number;
  search?: string;
  tag_id?: number;
}

export const useGetVote = (params: GetVotes) => {
  return useQuery(["getVote", params], () => getVotes(params));
};
