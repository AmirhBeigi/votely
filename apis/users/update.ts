import { httpClient } from '../client';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';

interface ChangePasswordType {
  username: string;
}

const update = (params: ChangePasswordType) => {
  return httpClient.patch('/users/me', params);
};

export const useUpdateUser = () =>
  useMutation(update, {
    onSuccess: () => {
      toast('username changed!');
    }
  });
