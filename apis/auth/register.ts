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
      setCookies('votely.token', data.data.access_token, { maxAge: 31536000 });
      setCookies('votely.refresh_token', data.data.refresh_token, { maxAge: 31536000 });
      setUser(data.data.user);
      router.push(backUrl ?? '/');
      setBackUrl(null);
    }
  });
};
