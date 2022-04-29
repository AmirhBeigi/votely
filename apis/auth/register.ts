import { httpClient } from '../client';
import { useMutation } from 'react-query';
import { setCookies } from 'cookies-next';
import { useUser } from '../../contexts/user';
import { useRouter } from 'next/router';
import { useBackUrl } from 'contexts/backUrl';

interface RegisterType {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

const register = (params: RegisterType) => {
  return httpClient.post('/auth/register', params);
};

export const useRegister = () => {
  const router = useRouter();
  const [backUrl, setBackUrl] = useBackUrl();
  const [, setUser] = useUser();

  return useMutation(register, {
    onSuccess: data => {
      setCookies('votely.token', data.data.access_token);
      setCookies('votely.refresh_token', data.data.refresh_token);
      setUser(data.data.user);
      router.push(backUrl ?? '/');
      setBackUrl(null);
    }
  });
};
