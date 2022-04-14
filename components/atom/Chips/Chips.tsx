import clsx from 'clsx';

export const Chips: React.FC<NativeDomProps<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        className,
        'h-8 w-fit px-5 bg-black bg-opacity-5 border border-solid border-black rounded-full flex justify-center items-center font-semibold text-sm cursor-pointer'
      )}
      {...props}
    />
  );
};

export default Chips;
