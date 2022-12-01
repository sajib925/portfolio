import styled from "styled-components";
import THEME from "./../../styles/Theme";
import media from "./../../styles/Responsive";

const StyledFooter = styled.footer`
  padding-top: 55px;
  background-color: ${THEME.colors.paleOrange};

  ${media.up("sm")} {
    padding-top: 60px;
  }

  ${media.up("md")} {
    padding-top: 70px;
  }

  ${media.up("lg")} {
    padding-top: 100px;
  }

  /* footer top style start here  */

  .footer__top {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 38px;

    ${media.up("lg")} {
      justify-content: space-between;
    }

    &__left {
      max-width: 100%;
      width: 100%;
      margin-bottom: 12px;

      ${media.up("lg")} {
        max-width: 470px;
        width: 100%;
        margin-bottom: 0;
      }
    }

    &__right {
      max-width: 100%;
      width: 100%;

      ${media.up("lg")} {
        max-width: 470px;
        width: 100%;
      }
    }

    &__description {
      color: ${THEME.colors.textPrimary};
      margin-bottom: 28px;

      ${media.up("lg")} {
        margin-bottom: 40px;
      }
    }
  }

  /* footer top style end here  */

  /* footer bottom style start here  */

  .footer__bottom {
    padding-bottom: 38px;
    border-bottom: 1px solid ${THEME.colors.textPrimary};

    &__title {
      margin-bottom: 18px;

      ${media.up("md")} {
        margin-bottom: 25px;
      }

      ${media.up("lg")} {
        margin-bottom: 38px;
      }
    }

    &__buttons {
      display: flex;
      flex-wrap: wrap;
      row-gap: 25px;
      column-gap: 28px;
    }
  }

  /* footer bottom style end here  */

  /* copyright style start here  */

  .copyright {
    padding: 28px;

    ${media.up("lg")} {
      padding: 38px 0;
    }

    &__text {
      font-size: 14px;
      line-height: 24px;
      text-align: center;

      ${media.up("md")} {
        font-size: 16px;
        line-height: 28px;
        color: ${THEME.colors.blueishCyan};
      }
    }
  }

  /* copyright style start here  */
`;

export default StyledFooter;
