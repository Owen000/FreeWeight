import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const SvgComponent: React.FC<Props> = ({ color = "#9EA0A1", width = 30, height = 29 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4 10.762c0-.952.468-1.843 1.252-2.384L14.5 2l9.248 6.378A2.897 2.897 0 0125 10.762V23c0 1.6-1.297 2.897-2.897 2.897H6.897A2.897 2.897 0 014 23V10.762z"
        stroke={color}
        strokeWidth={2.17241}
        strokeLinejoin="round"
      />
      <Path
        d="M11.241 17.931c0-.8.649-1.448 1.449-1.448h3.62c.8 0 1.449.648 1.449 1.448v7.966H11.24V17.93z"
        stroke={color}
        strokeWidth={2.17241}
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SvgComponent;

