import { FC } from 'react';
import IcomoonReact from 'icomoon-react';
import iconSet from 'public/selection.json';

interface Iicon {
  color?: string;
  size?: string | number;
  name: string;
  className?: string;
}

const Icon: FC<Iicon> = ({ color, size = 20, name, className = '' }) => {
  return (
    <IcomoonReact
      className={`icon ${className}`}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={name}
    />
  );
};

export default Icon;
