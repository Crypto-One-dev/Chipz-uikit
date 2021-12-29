import styled from "styled-components";
import Button from "./Button";
import { ButtonProps } from "./types";

const HoverButton = styled(Button)<ButtonProps>`
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(.4,0,1,1);
  transition-property: background-color,background,border-color,color,fill,stroke,opacity,box-shadow,transform;
  border: 0px;
  box-shadow: none;
  background: #ec4899;
  &:hover {
      background: black;
  }
  &:focus {
      border: 0px;
      outline: 0px;
  }
`;

export default HoverButton;
