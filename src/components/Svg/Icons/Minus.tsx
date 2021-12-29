import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 12 2" {...props}>
      <path d="M10.56 1.7 L0.96 1.7 C0.52 1.7 0.16 1.2 0.16 0.7 C0.16 0.35 0.52 0 0.96 0 L10.56 0 C11 0 11.36 0.35 11.36 0.7 C11.36 1.2 11 1.7 10.56 1.7 Z" />      
      {/* <path d="M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" /> */}
    </Svg>
  );
};

export default Icon;
