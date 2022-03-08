import React from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps, variants, sizes } from "./types";
import Ripples from 'react-touch-ripple'

const Button: React.FC<ButtonProps> = ({ startIcon, endIcon, children, external, isLoading, disabled, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;

  return (
    <Ripples>
      <StyledButton {...internalProps} {...props} isLoading={isLoading} disabled={isDisabled}>
        {React.isValidElement(startIcon) &&
          React.cloneElement(startIcon, {
            mr: "0.5rem",
          })}
        {children}
        {React.isValidElement(endIcon) &&
          React.cloneElement(endIcon, {
            ml: "0.5rem",
          })}
      </StyledButton>
    </Ripples>
  );
};

Button.defaultProps = {
  variant: variants.PRIMARY,
  size: sizes.MD,
  external: false,
  isLoading: false,
  disabled: false,
};

export default Button;
