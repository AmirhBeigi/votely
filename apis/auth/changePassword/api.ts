import { client } from '../../client';

interface ChangePasswordType {
  new_password: string;
  confirm_new_password: string;
  current_password: string;
}

export const changePassword = (params: ChangePasswordType) => {
  return client.patch('/auth/change-password', params);
};
