import React from "react";
import StyledHeader from "./StyledHeader";
import Container from "./../Container/Container";
import Row from "./../Row/Row";
import LogoSvg from "./../SVG/LogoSvg";
import RightArrowSvg from './../SVG/RightArrowSvg';
import DesktopMenu from './../SVG/DesktopMenu';
import MobileMenu from './../SVG/MobileMenu';

function Header () {
  return (
    <StyledHeader>
      <Container>
        <Row>
          <div className="logo">
            <a href="/">
              <LogoSvg />
            </a>
          </div>
          <ul className="menu">
            <li className="menu__item">
              <a href="/" className="menu__item__link">
                <RightArrowSvg />
                START A PROJECT
              </a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__item__link">
                <DesktopMenu />
                MENU
              </a>
            </li>
            <li className="menu__item__mobile">
              <a href="/" className="menu__item__mobile__link">
                <MobileMenu />
              </a>
            </li>
          </ul>
        </Row>
      </Container>
    </StyledHeader>
  );
}

export default Header;
