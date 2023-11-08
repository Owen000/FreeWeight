import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const SvgComponent: React.FC<Props> = ({
  color = "#9EA0A1",
  width = 29,
  height = 29,
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M26.015 27.5H7.752c-1.664 0-2.495 0-3.13-.324a2.97 2.97 0 01-1.298-1.297C3 25.242 3 24.412 3 22.748V3m0 19.303l8.91-8.91 6.68 4.456L27.5 7.455"
        stroke={color}
        strokeWidth={2.22727}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SvgComponent;

