import isEmpty from 'lodash/isEmpty';
import { useGetVotes } from '../../../apis/votes/getAll';
import Box from '../../atom/Box';
import { Skeleton } from '../../atom/Skeleton';
import Text from '../../atom/Text';
import { Browse } from '../../illustrations';
import VoteCard from '../VoteCard';

interface PollsProps {
  search?: string;
  tagId?: number;
  ownerId?: number;
  isClosed?: boolean;
}

export const Polls: React.FC<PollsProps> = ({ search, tagId, ownerId, isClosed }) => {
  const { data, isSuccess, isError, isLoading } = useGetVotes({
    page: 1,
    search,
    tag_id: tagId,
    owner_id: ownerId,
    is_closed: isClosed
  });

  if (isLoading) return <PollsLoading />;
  if (isError) return <PollsError />;
  if (isSuccess && isEmpty(data.data)) return <PollsEmpty />;
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

const PollsLoading: React.FC = () => {
  return (
    <Box className="flex flex-col space-y-5 ">
      <Skeleton className="!w-full !h-28 rounded-lg" />
      <Skeleton className="!w-full !h-28 rounded-lg" />
      <Skeleton className="!w-full !h-28 rounded-lg" />
      <Skeleton className="!w-full !h-28 rounded-lg" />
    </Box>
  );
};

const PollsEmpty: React.FC = () => {
  return (
    <Box className="flex flex-col justify-center items-center h-96 space-y-3">
      <Browse color="#000" />
      <Text fontWeight="medium">Polls Not Found!</Text>
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
