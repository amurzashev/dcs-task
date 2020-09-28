import styled from "ui/styled";

export default styled.input`
  height: 36px;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: ${(props) => props.theme.borders[0]}px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border: 0;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
