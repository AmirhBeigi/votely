import { useQuery } from "react-query";
import { getTags } from "./api";

interface GetTags {
  page: number;
  search?: string;
}

export const useGetTags = (params: GetTags) => {
  return useQuery(["getTags", params], () => getTags(params), {
    enabled: false, 
  });
};
