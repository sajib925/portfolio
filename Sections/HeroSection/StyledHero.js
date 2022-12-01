import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from "./../../styles/Theme";

const StyledHeroSection = styled.section`
  position: relative;
  padding: 90px 0 175px;
  background-color: ${THEME.colors.bgPrimary};

  ${media.up("sm")} {
    padding: 100px 0 175px;
  }

  ${media.up("md")} {
    padding: 120px 0 175px;
  }

  ${media.up("lg")} {
    padding: 170px 0 80px;
  }

  .left {
    max-width: 100%;
    width: 100%;
    margin-bottom: 70px;

    ${media.up("lg")} {
      max-width: 470px;
      width: 100%;
      margin-bottom: 0;
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
      color: ${THEME.colors.textPrimary};

      ${media.up("md")} {
        margin-bottom: 32px;
      }

      ${media.up("lg")} {
        margin-bottom: 40px;
      }
    }

    &__btn {
      margin-bottom: 70px;
    }
  }
  .right {
    max-width: 100%;
    width: 100%;

    ${media.up("lg")} {
      max-width: 570px;
      width: 100%;
      margin-left: auto;
      position: relative;
    }

    &__img {
      width: 100%;
      object-fit: cover;
      margin-bottom: 40px;

      ${media.up("sm")} {
        max-width: 470px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }

      ${media.up("lg")} {
        margin-bottom: 0;
        width: 100%;
      }
    }
    &__icon {
      ${media.up("lg")} {
        position: absolute;
        top: 11%;
        right: -9%;
      }
    }
  }

  .bottom__bg {
    max-width: 1440px;
    width: 100%;
    /* object-fit: cover; */
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export default StyledHeroSection;
