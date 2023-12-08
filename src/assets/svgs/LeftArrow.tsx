import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const SvgComponent: React.FC<Props> = ({
  color = "#9EA0A1",
  width = 30,
  height = 29,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
        fill={color}
      />
    </Svg>
  );
};

export default SvgComponent;

