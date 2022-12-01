import React from "react";
import styled from "styled-components";
import media from "../../styles/Responsive";

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  ${media.up("lg")} {
    flex-wrap: nowrap;
  }
`;

const Row = ({children}) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
