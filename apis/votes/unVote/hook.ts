import { useMutation } from "react-query";
import { unVote } from "./api";

export const useUnVote = () => useMutation(unVote);
