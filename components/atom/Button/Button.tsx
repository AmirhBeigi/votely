import clsx from "clsx";

interface ButtonProps extends NativeDomProps<HTMLButtonElement> {
  variant?: "text" | "contained" | "outlined";
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = "contained", className, ...buttonProps } = props;
  return (
    <button
      className={clsx([className], "h-14 w-full text-center rounded-md", {
        "!bg-transparent border border-solid border-black text-black": variant === "outlined",
        "bg-black border border-solid border-black text-white": variant === "contained",
        "text-black": variant === "text",
      })}
      {...buttonProps}
    />
  );
};

export default Button;
