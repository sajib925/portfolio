import React from "react";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import  Title  from './../../components/Title/Title';
import Paragraph from './../../components/Paragraph/Paragraph';
import ArrowSvg from "../../components/SVG/ArrowSvg";
import img1 from "../../images/hero-img/Mask group.png"
import img2 from "../../images/hero-img/Video.png";
import Image from "next/image";
import StyledHeroSection from './StyledHero';
import Link from "next/link";
import imgBg from "../../images/hero-img/BG.png"

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <Container>
        <Row>
          <div className="left">
            <Title tagName="h1" className="left__title">
              I create digital product design experiences
            </Title>
            <Paragraph className="left__description">
              With best-in-class design and engineering, my work maximizes value
              by putting your customers at the center of everything I do.
            </Paragraph>
            <div className="left__btn">
              <Button text="Let’s Talk" />
            </div>
            <div className="left__icon">
              <ArrowSvg />
            </div>
          </div>
          <div className="right">
            <Image className="right__img" src={img1} alt="man img" />
            <Link href="#footer" className="right__icon">
              <Image src={img2} alt="video icon" />
            </Link>
          </div>
        </Row>
      </Container>
      <Image className="bottom__bg" src={imgBg} alt="bg" />
    </StyledHeroSection>
  );
};

export default HeroSection;
