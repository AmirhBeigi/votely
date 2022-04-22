import Text from './atom/Text';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LoaderIcon } from './icons';
import Box from './atom/Box';

const splashAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  visible: {
    opacity: 1
  }
};

export const Splash: React.FC = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 1000);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {isShowSplash && (
        <motion.div
          variants={splashAnimation}
          initial="visible"
          exit="hidden"
          className="flex flex-col justify-center items-center bg-black fixed top-0 left-0 right-0 bottom-0 z-50"
        >
          <Text className="text-white" fontSize="lg" fontWeight="bold">
            VOTELY
          </Text>

          <Box className="absolute bottom-10">
            <LoaderIcon color="#fff" />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;
