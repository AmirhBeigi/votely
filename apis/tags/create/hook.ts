import { useMutation } from 'react-query';
import { createTag } from './api';

export const useCreateTag = () => useMutation(createTag);
