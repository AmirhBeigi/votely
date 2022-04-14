import { useMutation } from 'react-query';
import { changePassword } from './api';

export const useChangePassword = () => useMutation(changePassword);
