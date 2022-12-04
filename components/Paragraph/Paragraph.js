import React from "react";
import styled from "styled-components";
import THEME from "./../../styles/Theme";
import media from "./../../styles/Responsive";

const StyledParagraph = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-family: ${THEME.fonts.bodyFont};
  font-style: normal;
  font-weight: ${THEME.weight.weightNormal};
  color: ${THEME.colors.textSecondary};

  ${media.up("md")} {
    font-size: 16px;
    line-height: 26px;
  }
  ${media.up("lg")} {
    font-size: 18px;
    line-height: 30px;
  }
`;

const Paragraph = ({children,className}) => {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
}

export default Paragraph;
