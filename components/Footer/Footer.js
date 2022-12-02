import React from 'react'
import StyledFooter from './StyledFooter'
import Container from './../Container/Container';
import  Title  from './../Title/Title';
import Paragraph from './../Paragraph/Paragraph';
import Button from './../Button/Button';

function Footer() {
  return (
    <StyledFooter id="footer">
      <Container>
        {/* footer top start here  */}

        <div className="footer__top">
          <div className="footer__top__left">
            <Title tagName="h2" className="footer__top__title">
              Interested to working with me?
            </Title>
          </div>
          <div className="footer__top__right">
            <Paragraph className="footer__top__description">
              Through each phase of my engagement, I utilize focused teams that
              combine experience design, modern engineering, and iterative
              program.
            </Paragraph>
            <Button
              path="/"
              className="footer__top__right__btn"
              text="Let’s Talk"
            />
          </div>
        </div>

        {/* footer top end here  */}

        {/* footer bottom start here  */}

        <div className="footer__bottom">
          <Title tagName="h3" className="footer__bottom__title">
            Say hi!
          </Title>
          <div className="footer__bottom__buttons">
            <Button
              path="/"
              text="Email Me"
              variant="outline"
              className="footer__bottom__buttons__btn"
            />

            <Button
              path="https://www.facebook.com/profile.php?id=100008890392675"
              text="Facebook"
              variant="outline"
              className="footer__bottom__buttons__btn"
            />

            <Button
              path="/"
              text="Instagram"
              variant="outline"
              className="footer__bottom__buttons__btn"
            />

            <Button
              path="/"
              text="Twitter"
              variant="outline"
              className="footer__bottom__buttons__btn"
            />

            <Button
              path="/"
              text="Email Me"
              variant="outline"
              className="footer__bottom__buttons__btn"
            />

            <Button
              path="/"
              text="Linkedin"
              variant="outline"
              className="footer__bottom__buttons__btn"
            />

            <Button
              path="/"
              text="Dribbble"
              variant="outline"
              className="footer__bottom__buttons__btn"
            />

            <Button
              path="/"
              text="Behance"
              variant="outline"
              className="footer__bottom__buttons__btn"
            />
          </div>
        </div>

        {/* footer bottom end here  */}

        {/* copyright start here */}

        <div className="copyright">
          <Paragraph className="copyright__text">
            Copyright © 2022 UIHUT all rights reserved.
          </Paragraph>
        </div>

        {/* copyright end here */}
      </Container>
    </StyledFooter>
  );
}

export default Footer