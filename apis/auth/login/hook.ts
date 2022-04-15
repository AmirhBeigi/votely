import { useMutation } from 'react-query';
import { setCookies } from 'cookies-next';
import { login } from './api';
import { useUser } from '../../../contexts/user';

export const useLogin = () => {
  const [, setUser] = useUser();

  return useMutation(login, {
    onSuccess: data => {
      setCookies('votely.token', data.data.access_token);
      setUser(data.data.user);
    }
  });
};
