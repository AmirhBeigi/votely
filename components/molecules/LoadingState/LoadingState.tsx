import Box from '../../atom/Box';
import { Skeleton } from '../../atom/Skeleton';

export const LoadingState: React.FC = () => {
  return (
    <Box className="flex flex-col space-y-5 ">
      <Skeleton className="!w-full !h-28 rounded-lg" />
      <Skeleton className="!w-full !h-28 rounded-lg" />
      <Skeleton className="!w-full !h-28 rounded-lg" />
      <Skeleton className="!w-full !h-28 rounded-lg" />
    </Box>
  );
};

export default LoadingState;
