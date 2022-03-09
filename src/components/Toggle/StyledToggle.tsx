import styled from "styled-components";

export const Handle = styled.div`
  background-color: #cfcace;
  border-radius: 50%;
  cursor: pointer;
  height: 36px;
  left: 1px;
  position: absolute;
  top: 1px;
  transition: left 200ms ease-in;
  width: 40px;
  z-index: 1;
`;

export const Input = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: calc(100% - 41px);
    background-color: #ec4899 !important;
  }

  &:focus + ${Handle} {
    // box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    // box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &::before + ${Handle} {
    content: "|||";
    text-align: center;
    position: absolute;
    font-size: 18px;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 10px;
  }
`;

const StyledToggle = styled.div<{ checked: boolean }>`
  align-items: center;
  background-color: #001b2d;
  // background-color: ${({ theme, checked }) => theme.colors[checked ? "successalt" : "input"]};
  border: 1px solid #ec4899;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  position: relative;
  transition: background-color 200ms;
  width: 80px;
`;

export default StyledToggle;
