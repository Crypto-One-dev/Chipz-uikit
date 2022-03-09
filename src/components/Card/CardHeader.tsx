import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardHeaderProps = SpaceProps;

const CardHeader = styled.div<CardHeaderProps>`
  margin: 0px;
  line-height: 1.334em;
  font-family: Roboto, sans-serif !important;
  color: rgb(206, 33, 121);
  font-size: 23px;
  font-weight: 600;

  ${space}
`;

CardHeader.defaultProps = {
  p: "0px",
};

export default CardHeader;
