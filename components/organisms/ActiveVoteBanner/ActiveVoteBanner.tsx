import Box from '../../atom/Box';
import Text from '../../atom/Text';
import { ChevronIcon } from '../../icons';

interface ActiveVoteBannerProps {
  count: number;
  onClick: () => void;
}

export const ActiveVoteBanner: React.FC<ActiveVoteBannerProps> = props => {
  const { count, onClick } = props;
  return (
    <Box
      className="flex justify-between items-center bg-black text-white p-5 rounded-lg"
      onClick={onClick}
    >
      <Box className="flex flex-col space-y-1">
        <Text fontWeight="medium">{count} Active poll</Text>
        <Text fontSize="sm" className="text-white text-opacity-60">
          Show details
        </Text>
      </Box>
      <ChevronIcon dir="right" color="#fff" />
    </Box>
  );
};

export default ActiveVoteBanner;
