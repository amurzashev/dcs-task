import styled from "ui/styled";
import { typography, TypographyProps, space, SpaceProps } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

export default styled("p", { shouldForwardProp })<TypographyProps & SpaceProps>`
  margin: 0;
  font-family: Fjalla One;
  ${typography};
  ${space};
`;
