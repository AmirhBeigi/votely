import Avatar from '@/components/atom/Avatar';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/croodles-neutral';

interface AvatarForUserProps extends NativeDomProps<HTMLImageElement> {
  username: string;
  width?: number;
  height?: number;
}

export const AvatarForUser: React.FC<AvatarForUserProps> = ({
  username,
  width = 38,
  height = 38
}) => {
  let Svg = createAvatar(style, {
    seed: username,
    dataUri: true
  });

  return (
    <Avatar
      src={Svg}
      width={width}
      height={height}
      className="!border !border-solid !border-black"
    />
  );
};

export default AvatarForUser;
