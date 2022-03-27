import { useMutation } from "react-query";
import { vote } from "./api";

export const useVote = () => useMutation(vote);
