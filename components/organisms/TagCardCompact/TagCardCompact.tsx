import { useRouter } from 'next/router';
import Box from '../../atom/Box';
import Text from '../../atom/Text';
import { ChevronIcon } from '../../icons';

interface TagCardCompactProps {
  title: string;
  pollsCount: number;
  identifier: number;
}

export const TagCardCompact: React.FC<TagCardCompactProps> = ({
  title,
  pollsCount,
  identifier
}) => {
  const router = useRouter();
  return (
    <Box
      className="flex flex-col space-y-1 bg-[#F0F3F4] p-4 pr-10 rounded-lg cursor-pointer"
      onClick={() => router.push(`/tags/${identifier}`)}
    >
      <Text fontWeight="medium" dir="auto">
        {title}
      </Text>
      <Box className="flex items-center space-x-2">
        <Text fontSize="sm">{pollsCount} polls</Text>
      </Box>
    </Box>
  );
};

export default TagCardCompact;
