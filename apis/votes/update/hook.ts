import { useMutation } from 'react-query';
import { updatePoll } from './api';

export const useUpdatePoll = () => useMutation(updatePoll);
