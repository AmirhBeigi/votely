import { client } from '../../client';

interface LoginType {
  identifier: string;
  password: string;
}

export const login = ({ identifier, password }: LoginType) => {
  return client.post('/auth/login', { identifier, password });
};
