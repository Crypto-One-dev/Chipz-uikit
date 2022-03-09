import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Flex/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
}

const StyledModal = styled.div`
  background: ${({ theme }) => theme.modal.background};
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  backdrop-filter: blur(6px);
  // border: 1px solid ${({ theme }) => theme.colors.borderColor};
  // border-radius: 32px;
  border-radius: 0.75em;
  padding-top: 0.4em;
  padding-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  
  ${({ theme }) => theme.mediaQueries.xs} {
    width: 90%;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 35%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #2a2a2a;
  align-items: center;
  padding: 6px 0px 0px 12px;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "30px",
}) => (
  <StyledModal>
    {<ModalHeader>
      <ModalTitle>
        {onBack && (
          <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="primary" />
          </IconButton>
        )}
        <Heading>{title}</Heading>
      </ModalTitle>
      {!hideCloseButton && (
        <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog" mr="-16px">
          <CloseIcon color="primary" />
        </IconButton>
      )}
    </ModalHeader>}
    <Flex flexDirection="column" style={{justifyContent: 'center', alignItems: 'center'}} p={bodyPadding}>
      {children}
    </Flex>
  </StyledModal>
);

export default Modal;
