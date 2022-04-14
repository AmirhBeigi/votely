import { client } from '../../client';

interface GoogleLoginType {
  access_token: string;
}

export const GoogleLogin = ({ access_token }: GoogleLoginType) => {
  return client.post('/auth/google-token/login', { access_token });
};
