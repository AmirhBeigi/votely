import { httpClient } from '../client';
import { useMutation } from 'react-query';
import { setCookies } from 'cookies-next';
import { useUser } from '../../contexts/user';
import { useRouter } from 'next/router';
import { useBackUrl } from 'contexts/backUrl';

interface GoogleLoginType {
  access_token: string;
}

const GoogleLogin = ({ access_token }: GoogleLoginType) => {
  return httpClient.post('/auth/google-token/login', { access_token });
};

export const useGoogleLogin = () => {
  const router = useRouter();
  const [backUrl, setBackUrl] = useBackUrl();
  const [, setUser] = useUser();

  return useMutation(GoogleLogin, {
    onSuccess: data => {
      setCookies('votely.token', data.data.access_token);
      setCookies('votely.refresh_token', data.data.refresh_token);
      setUser(data.data.user);
      router.push(backUrl ?? '/');
      setBackUrl(null);
    }
  });
};
