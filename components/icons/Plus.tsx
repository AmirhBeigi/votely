interface PlusIconProps extends NativeDomProps<SVGSVGElement> {
  color: string;
}

export const PlusIcon = ({ color, ...props }: PlusIconProps) => {
  return (
    <svg
      width="32"
      height="34"
      viewBox="0 0 32 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 17.1725H24"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 25.4225V8.92249"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
