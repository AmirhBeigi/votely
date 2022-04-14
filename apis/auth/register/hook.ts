import { useMutation } from 'react-query';
import { setCookies } from 'cookies-next';
import { register } from './api';

export const useRegister = () =>
  useMutation(register, {
    onSuccess: data => {
      setCookies('votely.token', data.data.access_token);
    }
  });
