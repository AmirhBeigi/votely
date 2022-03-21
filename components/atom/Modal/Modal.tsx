import { CSSTransition } from "react-transition-group";

interface ModalProps extends NativeDomProps<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { children, isOpen, onClose } = props;

  return (
    <CSSTransition
      in={isOpen}
      timeout={100}
      classNames={{
        enterDone: "opacity-100",
      }}
      unmountOnExit
    >
      <div
        className="fixed top-0 right-0 left-0 bottom-0 bg-gray-900 bg-opacity-60 flex items-end transition-all opacity-0"
        onClick={onClose}
      >
        <div aria-hidden>
          <div
            className="bg-white w-full h-screen p-5 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div>{children}</div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
