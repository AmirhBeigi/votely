import { AnimatePresence, motion } from 'framer-motion';

interface Props extends NativeDomProps<SVGSVGElement> {
  color: string;
}

export const LoaderIcon: React.FC<Props> = ({ color, ...props }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{ loop: Infinity, duration: 1, ease: 'linear' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.25 3C11.25 2.58579 11.5858 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 10.4448 2.61468 8.97258 3.26388 7.66623C3.44822 7.29529 3.89836 7.14403 4.26929 7.32836C4.64023 7.5127 4.79149 7.96284 4.60716 8.33377C4.05873 9.43734 3.75 10.6815 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3Z"
            fill={color}
          />
        </svg>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoaderIcon;
