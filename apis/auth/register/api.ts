import { client } from '../../client';

interface RegisterType {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const register = (params: RegisterType) => {
  return client.post('/auth/register', params);
};
