import { client } from "../../client";

export const getActiveCounts = (token) =>
  client.get(`/polls/active-counts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
