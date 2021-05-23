import sunnyIcon from '../../assets/icons/sunny.svg';
import stormyIcon from '../../assets/icons/stormy.svg';
import rainyIcon from '../../assets/icons/rainy.svg';
import cloudyIcon from '../../assets/icons/cloudy.svg';

import React from 'react';
import SvgIcon from './svg-icon';

interface IconProps {
    className?: string
}

const SunnyIcon: React.FC<IconProps> =({ className }) => <SvgIcon className={className} src={sunnyIcon} />;
const StormyIcon: React.FC<IconProps> =({ className }) => <SvgIcon className={className} src={stormyIcon} />;
const RainyIcon: React.FC<IconProps> =({ className }) => <SvgIcon className={className} src={rainyIcon} />;
const CloudyIcon: React.FC<IconProps> =({ className }) => <SvgIcon className={className} src={cloudyIcon} />;

export {
    SunnyIcon,
    StormyIcon,
    RainyIcon,
    CloudyIcon,
};
