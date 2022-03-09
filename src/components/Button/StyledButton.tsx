import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { ButtonProps, ButtonThemeVariant, variants } from "./types";

type ThemedProps = {
  theme: DefaultTheme;
} & ButtonProps;

const getDisabledStyles = ({ isLoading, theme }: ThemedProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `;
};

const removePointerEvents = ({ disabled, as }: ThemedProps) => {
  if (disabled && as && as !== "button") {
    return `
      pointer-events: none;
    `;
  }

  return "";
};

const getButtonVariantProp =
  (prop: keyof ButtonThemeVariant) =>
  ({ theme, variant = variants.PRIMARY }: ThemedProps) => {
    return theme.button[variant][prop];
  };

// height: ${({ size }) => (size === "sm" ? "32px" : "48px")};
// letter-spacing: 0.03em;
// 
const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  background: ${getButtonVariantProp("background")};
  border: ${getButtonVariantProp("border")};
  border-radius: 7px;
  box-shadow: ${getButtonVariantProp("boxShadow")};
  color: ${getButtonVariantProp("color")};
  cursor: pointer;
  display: inline-flex;
  font-size: 15px;
  font-weight: 600;
  /* max-content instead of auto for Safari fix */
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  min-width: 64px;
  line-height: 1.75;
  justify-content: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  outline: 0;
  padding: ${({ size }) => (size === "sm" ? "3px 30px" : "3px 30px")};
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};

  &:hover {
    background-color: rgb(190, 17, 105);
  }

  ${getDisabledStyles}
  ${removePointerEvents}
  ${space}
`;
/*
&:active {
  box-shadow: ${getButtonVariantProp("boxShadowActive")};
}

&:focus {
  border: 1px solid black;
  outline: 5px auto -webkit-focus-ring-color;
}

box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondary};
border-color: ${getButtonVariantProp("borderColorHover")};
background-color: ${getButtonVariantProp("backgroundActive")};

&:hover:not(:disabled):not(.button--disabled):not(:active) {
  background-color: ${getButtonVariantProp("backgroundHover")};
  border-color: ${getButtonVariantProp("borderColorHover")};
}
*/

StyledButton.defaultProps = {
  fullWidth: false,
  type: "button",
};

export default StyledButton;
