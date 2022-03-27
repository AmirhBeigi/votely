import { formData } from "../../../utils/formData";
import { client } from "../../client";

interface CreatePoll {
  title: string;
  cover?: string;
  options: { title: string }[];
  tag_id?: number[];
}

export const createPoll = (voteParams: CreatePoll) =>
  client.post(`/polls`, formData({ ...voteParams }));
