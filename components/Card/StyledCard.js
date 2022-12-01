import styled from "styled-components";
import media from "./../../styles/Responsive";

const StyledCard = styled.div`
  padding: 38px;
 
  border-radius: 24px;
  position: relative;

  

  .card__link {
    position: absolute;
    top: 0;
    left: 0;
  }

  .title {
    ${media.up("md")} {
      margin-bottom: 8px;
    }
  }

  .description {
    margin-bottom: 20px;

    ${media.up("md")} {
      margin-bottom: 25px;
    }

    ${media.up("md")} {
      margin-bottom: 38px;
    }
  }

  .thumbnail{
    &__img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default StyledCard;
