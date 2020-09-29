import styled from "ui/styled";
import { typography, TypographyProps } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

export default styled("p", { shouldForwardProp })<TypographyProps>`
  margin: 0;
  font-family: Fjalla One;
  ${typography};
`;
