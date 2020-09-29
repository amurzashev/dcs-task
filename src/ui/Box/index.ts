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
} from "styled-system";

type BoxProps = SpaceProps & LayoutProps & GridProps & PositionProps;

export default styled.div<BoxProps>`
  ${space};
  ${layout};
  ${grid};
  ${position};
  box-sizing: border-box;
`;
