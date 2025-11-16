import { FC } from 'react';
import { IconProps } from './type';

const IconMenu: FC<IconProps> = ({
  width = 24,
  height = 19,
  className,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 19"
      fill="none"
      className={className}
      {...props}
    >
      <rect width="24" height="3" rx="1.5" fill="white" fillOpacity="0.8" />
      <rect
        y="8"
        width="24"
        height="3"
        rx="1.5"
        fill="white"
        fillOpacity="0.8"
      />
      <rect
        y="16"
        width="16"
        height="3"
        rx="1.5"
        fill="white"
        fillOpacity="0.8"
      />
    </svg>
  );
};

export default IconMenu;
