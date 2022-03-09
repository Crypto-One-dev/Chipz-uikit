import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: ${({ isPushed, theme }) => (isPushed ? theme.colors.textwhite : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: ${({ secondary }) => (secondary ? "10px 8px 10px 24px" : "10px 8px 10px 24px")};
  margin-bottom: 4px;
  font-family: Roboto, sans-serif !important;
  font-size: 0.875rem;
  line-height: 1.75;
  color: ${({isActive, theme }) => (isActive ? "#ffffff" : "rgb(85, 85, 85)")};
  background-color: ${({ isActive }) => (isActive ? 'rgba(206, 33, 121, 0.1)' : null)};
  box-shadow: ${({ isActive, theme }) => (isActive ? `inset 4px 0px 0px ${theme.colors.primary}` : "none")};
  
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }

  &:hover {
    background-color: ${({ isActive }) => (isActive ? 'rgba(33, 150, 243, 0.04)' : null)};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 200% 100%;
    font-weight: bold;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

export { MenuEntry, LinkLabel };
