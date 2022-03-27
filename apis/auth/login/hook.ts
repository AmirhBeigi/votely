import { useMutation } from "react-query";
import { setCookies } from "cookies-next";
import { login } from "./api";

export const useLogin = () =>
  useMutation(login, {
    onSuccess: (data) => {
      setCookies("votely.token", data.data.access_token);
    },
  });
