import { useRouter } from 'next/router';
import Box from '../../atom/Box';
import Text from '../../atom/Text';
import { GraphIcon, UsersIcon } from '../../icons';

interface TagsCardProps {
  title: string;
  pollsCount: number;
  votersCount: number;
  identifier: number;
}

export const TagCard: React.FC<TagsCardProps> = ({
  title,
  pollsCount,
  identifier,
  votersCount
}) => {
  const router = useRouter();
  return (
    <Box
      className="bg-[#F0F3F4] w-full p-5 space-y-2 rounded-lg"
      onClick={() => router.push(`/tags/${identifier}`)}
    >
      <Text fontWeight="medium" dir="auto">
        {title}
      </Text>
      <Box className="flex items-center space-x-3">
        <Box className="flex items-center space-x-2">
          <UsersIcon color="#000" />
          <Text fontSize="sm" fontWeight="medium">
            {votersCount} Voters
          </Text>
        </Box>
        <Box className="flex items-center space-x-2">
          <GraphIcon color="#000" />
          <Text fontSize="sm" fontWeight="medium">
            {pollsCount} Polls
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TagCard;
