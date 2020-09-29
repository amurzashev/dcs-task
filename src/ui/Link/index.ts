import { Link } from "react-router-dom";
import styled from "ui/styled";
import { space, SpaceProps } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

export default styled(Link, { shouldForwardProp })<SpaceProps>`
  text-decoration: none;
  color: inherit;
  ${space};
`;
