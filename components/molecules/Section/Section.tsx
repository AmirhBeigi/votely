import Box from "../../atom/Box";
import Button from "../../atom/Button";
import Text from "../../atom/Text";

interface SectionProps {
  title: string;
  showAllAction?: () => void;
}

export const Section: React.FC<SectionProps> = (props) => {
  const { title, showAllAction, children } = props;
  return (
    <Box className="flex flex-col space-y-3">
      <Box className="flex justify-between items-center">
        <Text fontWeight="bold" fontSize="lg">
          {title}
        </Text>
        {!!showAllAction && (
          <Button variant="text" onClick={showAllAction} className="underline w-fit h-fit text-sm">
            Show All
          </Button>
        )}
      </Box>
      {children}
    </Box>
  );
};

export default Section;
