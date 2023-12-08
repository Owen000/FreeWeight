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
        d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
        fill={color}
      />
    </Svg>
  );
};

export default SvgComponent;

