interface Poll {
  id: number;
  title: string;
  votes_count: number;
  options: PollOption[];
  identifier: string;
  is_closed: boolean;
  short_identifier: string;
  owner_id: number;
  cover: string;
  owner: User;
  tags: Tag[];
}
