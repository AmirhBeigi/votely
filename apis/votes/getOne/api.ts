import { client } from "../../client";

export const getVote = (idOrShortIdentifier: string, token?: string) => {
  console.log(token);
  return client.get(`/polls/${idOrShortIdentifier}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
