import { httpClient } from '../client';
import { useQuery } from 'react-query';

const me = () => httpClient.get('/auth/me');

export const useMe = () => useQuery(['me'], me, { enabled: false });
