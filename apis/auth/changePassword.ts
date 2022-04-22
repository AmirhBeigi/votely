import { httpClient } from '../client';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';

interface ChangePasswordType {
  new_password: string;
  confirm_new_password: string;
  current_password: string;
}

const changePassword = (params: ChangePasswordType) => {
  return httpClient.patch('/auth/change-password', params);
};

export const useChangePassword = () =>
  useMutation(changePassword, {
    onSuccess: () => {
      toast('Password changed!');
    }
  });
