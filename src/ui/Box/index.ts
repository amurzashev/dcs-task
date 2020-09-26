import styled from "ui/styled";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  grid,
  GridProps,
} from "styled-system";

type BoxProps = SpaceProps & LayoutProps & GridProps;

export default styled.div<BoxProps>`
  ${space};
  ${layout};
  ${grid};
  box-sizing: border-box;
`;
