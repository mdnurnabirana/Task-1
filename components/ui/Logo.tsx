import Image from "next/image";

type LogoProps = {
  height?: number;
  width?: number;
};

const Logo = ({ height = 32, width = 128}: LogoProps) => {
  return (
    <Image
      src="/Logo.png"
      height={height}
      width={width}
      alt="Logo"
      priority
    />
  );
};

export default Logo;
