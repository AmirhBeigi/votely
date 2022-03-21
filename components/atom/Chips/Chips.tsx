export const Chips: React.FC<NativeDomProps<HTMLDivElement>> = (props) => {
  return (
    <div
      className="h-8 w-fit px-5 bg-black bg-opacity-5 border border-solid border-black rounded-full flex justify-center items-center font-semibold text-sm"
      {...props}
    />
  );
};

export default Chips;
