import { useMutation } from 'react-query';
import { deletePoll } from './api';

export const useDeletePoll = () => useMutation(deletePoll);
