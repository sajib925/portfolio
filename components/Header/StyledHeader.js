import styled from "styled-components";
import media from "../../styles/Responsive";
import THEME from './../../styles/Theme';

const StyledHeader = styled.header`
  padding: 28px 0;
  background: #a67cfe;
  ${media.up("lg")} {
    padding: 43px 0;
  }

  .header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu {
    display: flex;
    align-items: center;
    column-gap: 42px;
    &__item {
      display: none;
      ${media.up("sm")} {
        display: block;
      }
      &__link {
        display: flex;
        align-items: center;
        column-gap: 8px;
        font-family: ${THEME.fonts.bodyFont};
        font-style: normal;
        font-weight: ${THEME.weight.weightNormal};
        font-size: 18px;
        line-height: 30px;
        color: ${THEME.colors.textPrimary};
      }
    }
    &__mobile__item {
      ${media.up("sm")} {
        display: none;
      }
    }
  }
`;

export default StyledHeader;
