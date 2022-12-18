import React from 'react'
import StyledHeader from './StyledHeader';
import Container from './../Container/Container';
import Link from 'next/link';
import  Image  from 'next/image';
import logo from "../../images/header/Eion Morgan.svg"
import arrowIcon from "../../images/header/Arrows.svg";
import desktopIcon from "../../images/header/Group 17705.svg";
import mobileIcon from "../../images/header/Menu.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div className="header__content">
          <div className="logo">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="menu">
            <li className="menu__item">
              <Link href="/" className="menu__item__link">
                <Image
                  src={arrowIcon}
                  alt="arrow icon"
                  className="menu__item__link__icon"
                />
                <span className="menu__item__link__text">START A PROJECT</span>
              </Link>
            </li>
            <li className="menu__item">
              <Link href="/" className="menu__item__link">
                <Image
                  src={desktopIcon}
                  alt="desktop icon"
                  className="menu__item__link__icon"
                />
                <span className="menu__item__link__text">MENU</span>
              </Link>
            </li>
            <li className="menu__mobile__item">
              <Link href="/" className="menu__mobile__item__link">
                <Image src={mobileIcon} alt="mobile icon" />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </StyledHeader>
  );
}

export default Header