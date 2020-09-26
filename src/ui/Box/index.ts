import styled from "ui/styled";
import { space, SpaceProps, layout, LayoutProps } from "styled-system";

type BoxProps = SpaceProps & LayoutProps;

export default styled.div<BoxProps>`
  ${space};
  ${layout};
  box-sizing: border-box;
`;
