import Image from "next/image";
import React from "react";

import avatarImg from "../../../public/assets/images/d4ab00b00e2c1292dc8d8cfaa7144e3d.png"
interface AvatarProps {
  src?: string;
  alt: string;
  size?: number;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size ,className }) => {
  return (
    <div
    className={`cursor-pointer rounded-full overflow-hidden ${className}`}
    >
      <Image
        src={src || avatarImg}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default Avatar;
