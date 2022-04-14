import { useMutation } from 'react-query';
import { setCookies } from 'cookies-next';
import { GoogleLogin } from './api';
import { useUser } from '../../../contexts/user';

export const useGoogleLogin = () => {
  const [, setUser] = useUser();

  return useMutation(GoogleLogin, {
    onSuccess: data => {
      setCookies('votely.token', data.data.access_token);
      setUser(data.data.user);
    }
  });
};
