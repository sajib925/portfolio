import styled from "styled-components";
import media from "../../styles/Responsive";

const StyledDesignSection = styled.section`
display: none;
  padding: 50px 0;

  ${media.up("sm")} {
    padding: 60px 0;
  }

  ${media.up("md")} {
    padding: 70px 0;
  }

  ${media.up("lg")} {
    padding: 85px 0;
  }
  /* top style start here */

  .top {
    margin-bottom: 28px;

    ${media.up("sm")} {
      margin-bottom: 40px;
    }

    ${media.up("md")} {
      margin-bottom: 50px;
    }

    ${media.up("lg")} {
      margin-bottom: 70px;
      display: flex;
      justify-content: space-between;
    }

    &__title {
      ${media.up("lg")} {
        max-width: 470px;
        width: 100%;
      }
    }
    
    &__description {
      ${media.up("lg")} {
        max-width: 570px;
        width: 100%;
      }
    }
  }

  /* top style end here */

  /* bottom style start here */

  .bottom {
    ${media.up("lg")} {
      display: flex;
      justify-content: center;
      column-gap: 30px;
    }

    &__col {
      margin-bottom: 28px;
      &:last-child {
        margin-bottom: 0;
      }
      ${media.up("lg")} {
        margin-bottom: 0;
        max-width: 370px;
        width: 100%;
      }
    }

    &__title {
      margin-bottom: 12px;

      ${media.up("md")} {
        margin-bottom: 20px;
      }
      ${media.up("lg")} {
        margin-bottom: 38px;
      }
    }

    &__description {
      margin-bottom: 12px;
      ${media.up("md")} {
        margin-bottom: 14px;
      }
      ${media.up("lg")} {
        margin-bottom: 18px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  /* bottom style end here */
`;

export default StyledDesignSection;
