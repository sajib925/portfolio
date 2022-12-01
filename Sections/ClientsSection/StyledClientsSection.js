import styled from "styled-components";
import media from "./../../styles/Responsive";

const StyledClientsSection = styled.section`
  padding: 50px 0 100px;

  ${media.up("sm")} {
    padding: 60px 0 120px;
  }

  ${media.up("md")} {
    padding: 70px 0 140px;
  }

  ${media.up("lg")} {
    padding: 85px 0 170px;
  }

  .left {
    max-width: 100%;
    width: 100%;
    margin-bottom: 28px;

    ${media.up("lg")} {
      max-width: 400px;
      width: 100%;
      margin-bottom: 0;
    }

    ${media.up("xl")} {
      max-width: 470px;
      width: 100%;
      margin-bottom: 0;
    }

    &__title {
      margin-bottom: 12px;

      ${media.up("lg")} {
        margin-bottom: 20px;
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    max-width: 100%;
    width: 100%;

    ${media.up("lg")} {
      margin-left: auto;
      max-width: 570px;
      width: 100%;
    }

    &__img {
      width: 170px;
      height: 170px;
    }
  }
`;

export default StyledClientsSection;
