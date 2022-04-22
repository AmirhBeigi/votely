import { httpClient } from '../client';
import { useMutation } from 'react-query';
import { setCookies } from 'cookies-next';
import { useUser } from '../../contexts/user';
import { useRouter } from 'next/router';

export interface LoginType {
  identifier: string;
  password: string;
}

const login = ({ identifier, password }: LoginType) => {
  return httpClient.post('/auth/login', { identifier, password });
};

export const useLogin = () => {
  const router = useRouter();
  const [, setUser] = useUser();

  return useMutation(login, {
    onSuccess: data => {
      setCookies('votely.token', data.data.access_token);
      setCookies('votely.refresh_token', data.data.refresh_token);
      setUser(data.data.user);
      router.push('/');
    }
  });
};
