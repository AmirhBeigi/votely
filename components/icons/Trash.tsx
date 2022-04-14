interface TrashIconProps extends NativeDomProps<SVGSVGElement> {
  color: string;
}

export const TrashIcon = ({ color, ...props }: TrashIconProps) => {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.75 7.59753C22.5875 7.18503 18.4 6.97253 14.225 6.97253C11.75 6.97253 9.275 7.09753 6.8 7.34753L4.25 7.59753"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.125 6.33506L11.4 4.69756C11.6 3.51006 11.75 2.62256 13.8625 2.62256H17.1375C19.25 2.62256 19.4125 3.56006 19.6 4.71006L19.875 6.33506"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.0625 11.5476L23.25 24.1351C23.1125 26.0976 23 27.6226 19.5125 27.6226H11.4875C8 27.6226 7.8875 26.0976 7.75 24.1351L6.9375 11.5476"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4125 20.7476H17.575"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.375 15.7476H18.625"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashIcon;
