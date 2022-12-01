import styled from "styled-components";
import THEME from "../../styles/Theme";
import media  from './../../styles/Responsive';

export const StyledTitle = styled.div`
  h1,
  .h1 {
    font-family: ${THEME.fonts.headingFont};
    font-style: normal;
    font-weight: ${THEME.weight.weightBold};
    font-size: 36px;
    line-height: 42px;
    color: ${THEME.colors.textPrimary};

    ${media.up("sm")} {
      font-size: 40px;
      line-height: 48px;
    }
    ${media.up("md")} {
      font-size: 50px;
      line-height: 55px;
    }

    ${media.up("lg")} {
      font-size: 60px;
      line-height: 66px;
    }
  }

  h2,
  .h2 {
    font-size: 26px;
    line-height: 30px;
    font-family: ${THEME.fonts.headingFont};
    font-style: normal;
    font-weight: ${THEME.weight.weightBold};
    color: ${THEME.colors.textPrimary};

    ${media.up("sm")} {
      font-size: 28px;
      line-height: 32px;
    }
    ${media.up("md")} {
      font-size: 32px;
      line-height: 35px;
    }

    ${media.up("lg")} {
      font-size: 42px;
      line-height: 46px;
    }
  }
  h3,
  .h3 {
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    font-family: ${THEME.fonts.headingFont};
    font-style: normal;
    font-weight: ${THEME.weight.weightBold};
    color: ${THEME.colors.textPrimary};

    ${media.up("sm")} {
      font-size: 28px;
      line-height: 32px;
    }

    ${media.up("lg")} {
      font-size: 32px;
      line-height: 36px;
    }
  }
  h4,
  .h4 {
    font-family: ${THEME.fonts.headingFont};
    font-style: normal;
    font-weight: ${THEME.weight.weightBold};
    color: ${THEME.colors.textPrimary};
    font-size: 16px;
    line-height: 26px;
    ${media.up("sm")} {
      font-size: 20px;
      line-height: 26px;
    }
    ${media.up("md")} {
      font-size: 26px;
      line-height: 30px;
    }
    ${media.up("lg")} {
      font-size: 32px;
      line-height: 36px;
    }
  }
`;

export default StyledTitle
