import styled from "ui/styled";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  grid,
  GridProps,
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
} from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

type BoxProps = SpaceProps &
  LayoutProps &
  GridProps &
  PositionProps &
  FlexboxProps;

export default styled("div", { shouldForwardProp })<BoxProps>`
  ${space};
  ${layout};
  ${grid};
  ${position};
  ${flexbox};
  box-sizing: border-box;
`;
