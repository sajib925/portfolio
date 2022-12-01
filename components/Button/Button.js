import React from 'react'
import styled from 'styled-components'
import THEME from './../../styles/Theme';

const StyledPrimaryBtn = styled.button`
  background: ${THEME.colors.textPrimary};
  border-radius: 8px;
  font-family: ${THEME.fonts.bodyFont};
  font-style: normal;
  font-weight: ${THEME.weight.weightMedium};
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: ${THEME.colors.whiteColor};
  outline: none;
  padding: 15px 35px;
  border: none;
`;
const StyledOutlineBtn = styled.a`
  border: 1px solid ${THEME.colors.textPrimary};
  border-radius: 8px;
  font-family: ${THEME.fonts.bodyFont};
  font-style: normal;
  font-weight: ${THEME.weight.weightSemiBold};
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: ${THEME.colors.textPrimary};
  padding: 12px 25px;
  display: inline-block;
`;

function Button({variant,className, text, path}) {
  return (
    <>
      {variant === "outline" ? (
        <StyledOutlineBtn className={className} href={path}>
          {text}
        </StyledOutlineBtn>
      ) : (
        <StyledPrimaryBtn className={className}>{text}</StyledPrimaryBtn>
      )}
    </>
  );
}

export default Button