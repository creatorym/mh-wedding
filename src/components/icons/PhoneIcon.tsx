import { SVGProps } from 'react';

const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.337 24h-6.5A4.836 4.836 0 0 1 0 19.163V4.837A4.836 4.836 0 0 1 4.837 0h6.5a4.836 4.836 0 0 1 4.837 4.837v14.326A4.836 4.836 0 0 1 11.337 24ZM5.05 21.913h6.074a2.964 2.964 0 0 0 2.963-2.963V5.05a2.964 2.964 0 0 0-2.963-2.963H5.05A2.964 2.964 0 0 0 2.087 5.05v13.9a2.964 2.964 0 0 0 2.963 2.963Z"
      fill={props.color}
    />
    <path
      d="M10.684 20.87H5.49a2.36 2.36 0 0 1-2.36-2.36V5.49a2.36 2.36 0 0 1 2.36-2.36h5.195a2.36 2.36 0 0 1 2.36 2.36v13.02a2.36 2.36 0 0 1-2.36 2.36h-.002Zm-4.55-2.087h3.904c.506 0 .917-.41.917-.917V6.134a.917.917 0 0 0-.917-.917H6.134a.917.917 0 0 0-.917.917v11.732c0 .506.41.917.917.917Z"
      fill={props.color}
    />
  </svg>
);

export default PhoneIcon;
