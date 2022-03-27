import { useQuery } from "react-query";
import { getActiveCounts } from "./api";

export const useGetVote = () => useQuery("getVote", getActiveCounts);
