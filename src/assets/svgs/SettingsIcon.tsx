import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const SvgComponent: React.FC<Props> = ({
  color = '#9EA0A1',
  width = 26,
  height = 26,
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M3.477 2.318a1.16 1.16 0 11-2.318 0 1.16 1.16 0 012.318 0zm10.432 0a1.16 1.16 0 11-2.318 0 1.16 1.16 0 012.318 0zm10.432 0a1.16 1.16 0 11-2.318 0 1.16 1.16 0 012.318 0zM3.477 12.75a1.16 1.16 0 11-2.318 0 1.16 1.16 0 012.318 0zm10.432 0a1.16 1.16 0 11-2.318 0 1.16 1.16 0 012.318 0zm10.432 0a1.16 1.16 0 11-2.318 0 1.16 1.16 0 012.318 0zM3.477 23.182a1.16 1.16 0 11-2.318 0 1.16 1.16 0 012.318 0zm10.432 0a1.16 1.16 0 11-2.318 0 1.16 1.16 0 012.318 0zm10.432 0a1.159 1.159 0 11-2.318 0 1.159 1.159 0 012.318 0z'
        stroke={color}
        strokeWidth={2.31818}
        strokeLinejoin='round'
      />
    </Svg>
  );
};

export default SvgComponent;

