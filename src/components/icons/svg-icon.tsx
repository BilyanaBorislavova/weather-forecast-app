import * as React from 'react';
import { ReactSVG } from 'react-svg';

interface SvgIconProps {
    src: any,
    className?: string,
    otherProps?: {}
}
const SvgIcon:React.FC<SvgIconProps> = ({ src, className, otherProps }) => (
    <ReactSVG
      src={src}
      className={className}
      {...otherProps}
    />
);

export default SvgIcon;
