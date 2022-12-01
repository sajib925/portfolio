import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from './../../styles/Theme';

const StyledProjectsSection = styled.section`
  padding: 50px 0;

  ${media.up("md")} {
    padding: 60px 0;
  }
  ${media.up("lg")} {
    padding: 85px 0;
  }

  .project__section__content {
    display: flex;
    flex-wrap: wrap;

    ${media.up("lg")} {
      flex-wrap: nowrap;
      column-gap: 30px;
    }
  }

  .left {
    margin-bottom: 18px;
    max-width: 100%;
    width: 100%;

    ${media.up("lg")} {
      max-width: 570px;
      width: 100%;
    }

    &__text {
      max-width: 100%;
      width: 100%;
      ${media.up("lg")} {
        max-width: 470px;
        width: 100%;
      }
    }

    &__title {
      margin-bottom: 12px;
      ${media.up("md")} {
        margin-bottom: 15px;
      }
      ${media.up("lg")} {
        margin-bottom: 20px;
      }
    }
    &__description {
      margin-bottom: 28px;
      ${media.up("md")} {
        margin-bottom: 40px;
      }
      ${media.up("lg")} {
        margin-bottom: 70px;
      }
    }

    &__bg__color1 {
      background-color: ${THEME.colors.bgPrimary};
    }
  }

  .right {
    max-width: 100%;
    width: 100%;

    ${media.up("lg")} {
      max-width: 570px;
      width: 100%;
    }

    &__bg__color2 {
      background-color: ${THEME.colors.bgSecondary};
      margin-bottom: 18px;

      ${media.up("md")} {
        margin-bottom: 25;
      }
      ${media.up("lg")} {
        margin-bottom: 30px;
      }
    }

    &__bg__color3 {
      background-color: ${THEME.colors.paleOrange};
      margin-bottom: 28px;

      ${media.up("md")} {
        margin-bottom: 35px;
      }

      ${media.up("lg")} {
        margin-bottom: 54px;
      }
    }

    &__btn {
    }
  }
`;

export default StyledProjectsSection;
