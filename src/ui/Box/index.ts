import styled from "ui/styled";
import { space, SpaceProps } from "styled-system";

type BoxProps = SpaceProps;

export default styled.div<BoxProps>`
  ${space};
  box-sizing: border-box;
`;
