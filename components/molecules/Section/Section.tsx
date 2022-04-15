import clsx from 'clsx';
import Box from '../../atom/Box';
import Button from '../../atom/Button';
import Text from '../../atom/Text';

interface SectionProps extends NativeDomProps<HTMLDivElement> {
  title: string;
  showAllAction?: () => void;
}

export const Section: React.FC<SectionProps> = props => {
  const { title, showAllAction, children, className, ...rest } = props;
  return (
    <Box className={clsx(className, 'flex flex-col space-y-3')} {...rest}>
      <Box className="flex justify-between items-center">
        <Text fontWeight="semiBold" fontSize="lg">
          {title}
        </Text>
        {!!showAllAction && (
          <Button
            variant="text"
            onClick={showAllAction}
            className="underline w-fit !h-fit !min-h-fit text-sm"
          >
            Show All
          </Button>
        )}
      </Box>
      {children}
    </Box>
  );
};

export default Section;
