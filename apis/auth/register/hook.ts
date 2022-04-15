import { useMutation } from 'react-query';
import { setCookies } from 'cookies-next';
import { register } from './api';
import { useUser } from '../../../contexts/user';

export const useRegister = () => {
  const [, setUser] = useUser();

  return useMutation(register, {
    onSuccess: data => {
      setCookies('votely.token', data.data.access_token);
      setUser(data.data.user);
    }
  });
};
