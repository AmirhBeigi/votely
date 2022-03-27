import { useQuery } from "react-query";
import { getVote } from "./api";

export const useGetVote = (idOrShortIdentifier: string, token?: string) => {
  return useQuery(["getVote", idOrShortIdentifier], () => getVote(idOrShortIdentifier, token));
};
