import { useQuery } from 'react-query';
import { getActiveCounts } from './api';

export const useGetActiveCounts = (token?: string) =>
  useQuery(['getActiveCounts', token], () => getActiveCounts(token));
