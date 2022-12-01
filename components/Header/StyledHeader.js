import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from './../../styles/Theme';

const StyledHeader = styled.header`
  padding-top: 28px;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;

  ${media.up("md")} {
    padding-top: 32px;
  }

  ${media.up("lg")} {
    padding-top: 43px;
  }

  .logo {
    justify-self: flex-start;
    align-self: center;
  }

  .menu {
    justify-self: flex-end;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &__item {
      display: none;

      ${media.up("lg")} {
        display: block;
      }

      &__link {
        font-family: ${THEME.fonts.bodyFont};
        font-style: normal;
        font-weight: ${THEME.weight.weightNormal};
        font-size: 18px;
        line-height: 30px;
        color: ${THEME.colors.textPrimary};
      }
    }

    &__item__mobile {
        
      ${media.up("lg")} {
        display: none;
      }
    }
  }
`;

export default StyledHeader