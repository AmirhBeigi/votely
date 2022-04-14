interface Props extends NativeDomProps<SVGSVGElement> {
  color: string;
}

export const CheckIcon = ({ color, ...props }: Props) => {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.8197 6.27262L5.0117 9.46462L12.9917 1.48462"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
