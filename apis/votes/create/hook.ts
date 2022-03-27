import { useMutation } from "react-query";
import { createPoll } from "./api";

export const useCreatePoll = () => useMutation(createPoll);
