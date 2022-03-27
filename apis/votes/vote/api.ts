import { client } from "../../client";

interface Vote {
  id: number;
  option_id: string;
}

export const vote = ({ id, option_id }: Vote) => client.post(`/polls/${id}/vote`, { option_id });
