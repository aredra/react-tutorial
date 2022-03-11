import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid violet;
  color: violet;
  margin: 0 1em;
  padding: 1em;
  font-size: 20px;

  ${(props) =>
    props.primary &&
    css`
      background: violet;
      color: white;
    `}
`;

export default StyledButton;
