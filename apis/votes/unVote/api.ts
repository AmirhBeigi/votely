import { client } from "../../client";

interface UnVote {
  id: number;
}

export const unVote = ({ id }: UnVote) => client.post(`/polls/${id}/unvote`);
