import clsx from "clsx";

interface TextFieldProps extends NativeDomProps<HTMLInputElement> {
  beforElement?: React.ReactNode;
  afterElement?: React.ReactNode;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const { beforElement, afterElement, ...inputProps } = props;
  return (
    <div className="relative w-full">
      {beforElement && (
        <div className="h-14 w-14 absolute top-0 left-0 flex justify-center items-center">
          {beforElement}
        </div>
      )}
      <input
        className={clsx(
          "h-14 border border-solid border-[#E1ECEF] rounded-md w-full px-4 outline-gray-300 placeholder:text-gray-300",
          {
            "pl-14": beforElement,
            "pr-14": afterElement,
          }
        )}
        {...inputProps}
      />
      {afterElement && (
        <div className="h-14 w-14 absolute top-0 right-0 flex justify-center items-center">
          {afterElement}
        </div>
      )}
    </div>
  );
};

export default TextField;
