import styled from "ui/styled";

interface ButtonProps {
  appearance: "regular" | "outline";
  color: "primary" | "secondary" | "warning" | "error";
}

export default styled.button<ButtonProps>`
  border-radius: 4px;
  height: 36px;
  padding: 0 16px;
  cursor: pointer;
  font-family: "Fjalla One";
  ${(props) =>
    props.appearance === "regular"
      ? `
    color: white;
    background: ${props.theme.colors[props.color]};
    border: none;
  `
      : `
      color: ${props.theme.colors[props.color]};
      background: white;
      border: 1px solid ${props.theme.colors[props.color]};
      `}
`;
