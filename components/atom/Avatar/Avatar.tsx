import Image from "next/image";

interface AvatarProps extends NativeDomProps<HTMLImageElement> {
  src: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return <Image src={src} alt="avatar" width={40} height={40} className="rounded-full" />;
};

export default Avatar;
