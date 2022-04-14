import { useRouter } from 'next/router';
import Box from '../../atom/Box';
import Button from '../../atom/Button';
import Text from '../../atom/Text';

interface VoteCardProps {
  title: string;
  votesCount: number;
  optionsCount: number;
  identifier: string | number;
}

export const VoteCard: React.FC<VoteCardProps> = ({
  title,
  votesCount,
  optionsCount,
  identifier
}) => {
  const router = useRouter();
  return (
    <Box
      className="flex flex-col space-y-3 bg-[#F0F3F4] w-full p-5 rounded-lg cursor-pointer"
      onClick={() => router.push(`/p/${identifier}`)}
    >
      <Text fontWeight="medium" dir="auto" className="line-clamp-1">
        {title}
      </Text>
      <Box className="flex items-center space-x-4">
        <Box className="flex items-center space-x-1">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.31586 2.52344C4.96865 2.52344 3.06586 4.42623 3.06586 6.77344C3.06586 9.12065 4.96865 11.0234 7.31586 11.0234C9.66307 11.0234 11.5659 9.12065 11.5659 6.77344C11.5659 4.42623 9.66307 2.52344 7.31586 2.52344ZM11.8159 3.27344C11.8159 2.85922 12.1516 2.52344 12.5659 2.52344C14.9131 2.52344 16.8159 4.42623 16.8159 6.77344C16.8159 9.12065 14.9131 11.0234 12.5659 11.0234C12.1516 11.0234 11.8159 10.6877 11.8159 10.2734C11.8159 9.85922 12.1516 9.52344 12.5659 9.52344C14.0846 9.52344 15.3159 8.29222 15.3159 6.77344C15.3159 5.25465 14.0846 4.02344 12.5659 4.02344C12.1516 4.02344 11.8159 3.68765 11.8159 3.27344ZM5.56586 13.0234C3.21865 13.0234 1.31586 14.9262 1.31586 17.2734C1.31586 18.6541 2.43515 19.7734 3.81586 19.7734H10.8159C12.1966 19.7734 13.3159 18.6542 13.3159 17.2734C13.3159 14.9262 11.4131 13.0234 9.06586 13.0234H5.56586ZM14.3159 13.0234C13.9016 13.0234 13.5659 13.3592 13.5659 13.7734C13.5659 14.1877 13.9016 14.5234 14.3159 14.5234H16.0659C17.5846 14.5234 18.8159 15.7547 18.8159 17.2734C18.8159 17.8257 18.3681 18.2734 17.8159 18.2734H14.3159C13.9016 18.2734 13.5659 18.6092 13.5659 19.0234C13.5659 19.4377 13.9016 19.7734 14.3159 19.7734H17.8159C19.1966 19.7734 20.3159 18.6542 20.3159 17.2734C20.3159 14.9262 18.4131 13.0234 16.0659 13.0234H14.3159Z"
              fill="#22282F"
            />
          </svg>
          <Text fontSize="sm" fontWeight="medium">
            {votesCount} Voter
          </Text>
        </Box>
        <Box className="flex items-center space-x-1">
          <svg
            width="22"
            height="22"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.44086 10.1484C3.44086 6.62762 6.29504 3.77344 9.81586 3.77344C13.3367 3.77344 16.1909 6.62762 16.1909 10.1484C16.1909 13.6693 13.3367 16.5234 9.81586 16.5234C6.29504 16.5234 3.44086 13.6693 3.44086 10.1484ZM9.81586 2.27344C5.46661 2.27344 1.94086 5.7992 1.94086 10.1484C1.94086 14.4977 5.46661 18.0234 9.81586 18.0234C14.1651 18.0234 17.6909 14.4977 17.6909 10.1484C17.6909 5.7992 14.1651 2.27344 9.81586 2.27344ZM13.5129 8.30377C13.8057 8.01087 13.8057 7.536 13.5129 7.24311C13.22 6.95021 12.7451 6.95021 12.4522 7.24311L9.02419 10.6711L7.97119 9.61811C7.67829 9.32521 7.20342 9.32521 6.91053 9.61811C6.61763 9.911 6.61763 10.3859 6.91053 10.6788L8.49386 12.2621C8.78675 12.555 9.26163 12.555 9.55452 12.2621L13.5129 8.30377Z"
              fill="#22282F"
            />
          </svg>
          <Text fontSize="sm" fontWeight="medium">
            {optionsCount} Options
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default VoteCard;
