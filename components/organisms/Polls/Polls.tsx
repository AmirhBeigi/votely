import { EmptyState } from '@/components/molecules/EmptyState';
import { LoadingState } from '@/components/molecules/LoadingState';
import isEmpty from 'lodash/isEmpty';
import { useGetVotes } from '../../../apis/votes/getAll';
import Box from '../../atom/Box';
import Text from '../../atom/Text';
import { Browse } from '../../illustrations';
import VoteCard from '../VoteCard';

interface PollsProps {
  search?: string;
  tagId?: number;
  owner?: string;
  isClosed?: boolean;
}

export const Polls: React.FC<PollsProps> = ({ search, tagId, owner, isClosed }) => {
  const { data, isSuccess, isError, isLoading } = useGetVotes({
    page: 1,
    search,
    tag_id: tagId,
    owner_username: owner,
    is_closed: isClosed
  });

  if (isLoading) return <LoadingState />;
  if (isError) return <PollsError />;
  if (isSuccess && isEmpty(data.data)) return <EmptyState />;
  return (
    <Box className="flex flex-col space-y-5 ">
      {data?.data.map((poll: Poll) => (
        <VoteCard
          key={poll.id}
          title={poll.title}
          votesCount={poll.votes_count}
          optionsCount={poll.options.length}
          identifier={poll.id}
        />
      ))}
    </Box>
  );
};

const PollsError: React.FC = () => {
  return (
    <Box className="flex flex-col space-y-5 ">
      <Text>Error</Text>
    </Box>
  );
};

export default Polls;
