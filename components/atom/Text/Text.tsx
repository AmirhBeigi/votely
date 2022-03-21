import clsx from "clsx";

type TextFontSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

type TextFontWeight =
  | "thin"
  | "extraLight"
  | "light"
  | "normal"
  | "medium"
  | "semiBold"
  | "bold"
  | "extraBold"
  | "black";

type TextNode = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TextProps extends NativeDomProps<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: TextNode;
  className?: string;
  fontSize?: TextFontSize;
  fontWeight?: TextFontWeight;
}

const textStyles = {
  size: {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl",
  },
  weight: {
    thin: "font-thin",
    extraLight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semiBold: "font-semibold",
    bold: "font-bold",
    extraBold: "font-extrabold",
    black: "font-black",
  },
};

export const Text: React.FC<TextProps> = (props) => {
  const { fontSize = "base", fontWeight = "normal", as = "span", className, ...rest } = props;

  const RootNode = as;

  return (
    <RootNode
      className={clsx(className, textStyles.size[fontSize], textStyles.weight[fontWeight])}
      {...rest}
    />
  );
};

export default Text;
