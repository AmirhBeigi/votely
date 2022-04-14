import { client } from '../../client';

export const getActiveCounts = (token?: string) =>
  client.get(`/polls/active-counts`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
