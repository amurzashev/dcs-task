import { Link } from "react-router-dom";
import styled from "ui/styled";
import { space, SpaceProps } from "styled-system";

export default styled(Link)<SpaceProps>`
  text-decoration: none;
  color: inherit;
  ${space};
`;
