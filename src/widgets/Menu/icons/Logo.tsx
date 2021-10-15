import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 300 100" {...props}>
      <image width="300" height="100" href={isDark ? '/chipz/chipz-logo-dark.png' : '/chipz/chipz-logo-white.png'}/>
    </Svg>
  )
};

export default Logo;
