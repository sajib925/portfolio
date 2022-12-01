import React from "react";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Row = ({children}) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
