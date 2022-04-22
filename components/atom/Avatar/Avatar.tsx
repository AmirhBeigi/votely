import Image from 'next/image';

interface AvatarProps extends NativeDomProps<HTMLImageElement> {
  src: string;
  width?: number;
  height?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, width = 40, height = 40 }) => {
  return <Image src={src} alt="avatar" width={width} height={height} className="rounded-full" />;
};

export default Avatar;
