import Text from '@/components/atom/Text';
import { Browse } from '@/components/illustrations';
import Box from '../../atom/Box';

export const EmptyState: React.FC = () => {
  return (
    <Box className="flex flex-col justify-center items-center h-96 space-y-3">
      <Browse color="#000" />
      <Text fontWeight="medium">Not Found!</Text>
    </Box>
  );
};

export default EmptyState;
