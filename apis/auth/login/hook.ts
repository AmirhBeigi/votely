import { useMutation } from "react-query";
import { login } from "./api";

export const useLogin = () => useMutation(login);
