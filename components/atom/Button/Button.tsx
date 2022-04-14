import clsx from 'clsx';
import { LoaderIcon } from '../../icons';

interface ButtonProps extends NativeDomProps<HTMLButtonElement> {
  variant?: 'text' | 'contained' | 'outlined';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = props => {
  const { variant = 'contained', isLoading, className, children, ...buttonProps } = props;
  return (
    <button
      className={clsx(
        [className],
        'h-14 min-h-[3.5rem] w-full flex items-center justify-center text-center rounded-md',
        {
          '!bg-transparent border border-solid border-black text-black': variant === 'outlined',
          'bg-black border border-solid border-black text-white': variant === 'contained',
          'text-black': variant === 'text'
        }
      )}
      disabled={isLoading}
      {...buttonProps}
    >
      {isLoading ? <LoaderIcon color={variant === 'contained' ? '#fff' : '#000'} /> : children}
    </button>
  );
};

export default Button;
