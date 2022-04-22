import { AnimatePresence, motion } from 'framer-motion';
import { CSSTransition } from 'react-transition-group';

interface ModalProps extends NativeDomProps<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

const backDrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const modal = {
  visible: {
    y: '0px',
    opacity: 1,
    transition: {
      delay: 0.3,
      bounce: 0
    }
  },
  hidden: {
    y: '100%',
    opacity: 0
  }
};

export const Modal: React.FC<ModalProps> = props => {
  const { children, isOpen, onClose } = props;

  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <motion.div
          className="fixed top-0 right-0 z-50 left-0 bottom-0 bg-gray-900 bg-opacity-60 flex items-end lg:items-start lg:justify-center lg:pt-36"
          variants={backDrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white w-full lg:w-96 p-5 rounded-tl-2xl rounded-tr-2xl lg:rounded-xl"
            onClick={e => e.stopPropagation()}
            variants={modal}
          >
            <div>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
