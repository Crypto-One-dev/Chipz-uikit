import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  ${({ theme }) => theme.mediaQueries.xs} {
    padding: 0px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 15px;
  }

  ${space}
`;

CardBody.defaultProps = {
  p: "30px",
};

export default CardBody;
