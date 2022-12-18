import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from "./../../styles/Theme";

const StyledDigitalProductsSection = styled.section`
display: none;
  padding: 50px 0;

  ${media.up("md")} {
    padding: 60px 0;
  }
  ${media.up("lg")} {
    padding: 85px 0;
  }

  .left {
    margin-bottom: 28px;
    ${media.up("lg")} {
      max-width: 450px;
      width: 100%;
      margin-bottom: 0;
    }
    ${media.up("xl")} {
      max-width: 470px;
    }

    &__title {
      margin-bottom: 12px;
      ${media.up("lg")} {
        margin-bottom: 14px;
      }
      ${media.up("lg")} {
        margin-bottom: 18px;
      }
    }
  }

  .right {
    ${media.up("sm")} {
      display: flex;
      column-gap: 15px;
    }
    ${media.up("lg")} {
      max-width: 545px;
      width: 100%;
      margin-left: auto;
    }
    ${media.up("xl")} {
      max-width: 570px;
      width: 100%;
      column-gap: 30px;
    }

    &__col {
      margin-bottom: 18px;
      &:last-child {
        margin-bottom: 0;
      }
      ${media.up("lg")} {
        max-width: 170px;
        width: 100%;
        margin-bottom: 0;
      }
    }

    &__number {
      margin-bottom: 12px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      ${media.up("md")} {
        margin-bottom: 14px;
      }
      ${media.up("lg")} {
        margin-bottom: 18px;
      }
      span {
        font-family: ${THEME.fonts.bodyFont};
        font-style: normal;
        font-weight: ${THEME.weight.weightNormal};
        font-size: 18px;
        line-height: 30px;
        color: ${THEME.colors.textPrimary};
      }
    }
    &__title {
      margin-bottom: 4px;
      ${media.up("sm")} {
        margin-bottom: 10px;
      }
      ${media.up("md")} {
        margin-bottom: 15px;
      }
      ${media.up("lg")} {
        margin-bottom: 28px;
      }
    }
    &__description {
        font-size: 16px;
    }
  }
  .color1 {
    background-color: ${THEME.colors.bgPrimary};
  }
  .color2 {
    background-color: ${THEME.colors.bgSecondary};
  }
  .color3 {
    background-color: ${THEME.colors.paleOrange};
  }
`;

export default StyledDigitalProductsSection;
