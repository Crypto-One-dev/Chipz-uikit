import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  padding: 15px !important;
  ${space}
`;

CardBody.defaultProps = {
  p: "30px",
};

export default CardBody;
