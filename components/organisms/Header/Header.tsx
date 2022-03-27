import { useRouter } from "next/router";
import Box from "../../atom/Box";
import Text from "../../atom/Text";

export const Heeader: React.FC = () => {
  const router = useRouter();
  return (
    <Box className="bg-white px-8 flex items-center h-16 min-h-[4rem]">
      <Text as="h1" fontWeight="extraBold" fontSize="xl" onClick={() => router.push("/")}>
        VOTELY
      </Text>
    </Box>
  );
};

export default Heeader;
