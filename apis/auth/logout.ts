import { httpClient } from '../client';
import { useMutation } from 'react-query';
import { removeCookies } from 'cookies-next';
import { useUser } from '../../contexts/user';
import { useRouter } from 'next/router';

const logout = () => {
  return httpClient.post('/auth/logout');
};

export const useLogout = () => {
  const router = useRouter();
  const [, setUser] = useUser();

  return useMutation(logout, {
    onSuccess: () => {
      removeCookies('votely.token');
      removeCookies('votely.refresh_token');
      setUser(null);
      router.push('/');
    }
  });
};
