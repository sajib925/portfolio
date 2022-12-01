import React from 'react'
import StyledDigitalProductsSection from './StyledDigitalProductsSection'
import Container from './../../components/Container/Container';
import Row from './../../components/Row/Row';
import { Title } from './../../components/Title/Title';
import Paragraph from './../../components/Paragraph/Paragraph';

const DigitalProductsSection = () => {
  return (
    <StyledDigitalProductsSection>
      <Container>
        <Row>
          <div className="left">
            <Title tagName="h2" className="left__title">
              How I deliver digital products.
            </Title>
            <Paragraph className="left__description">
              Through each phase of my engagement, I utilize focused teams that
              combine experience design, modern engineering, and iterative
              program.
            </Paragraph>
          </div>
          <div className="right">
            <div className="right__col">
              <div className="right__number color1">
                <span>01</span>
              </div>
              <Title tagName="h3" className="right__title">
                Create
              </Title>
              <Paragraph className="right__description">
                Discovery, strategy, and experience design that enables stronger
                customer connections.
              </Paragraph>
            </div>

            <div className="right__col">
              <div className="right__number color2">
                <span>02</span>
              </div>
              <Title tagName="h3" className="right__title">
                Build
              </Title>
              <Paragraph className="right__description">
                Develop modern technology and launch experiences that converge
                with enterprise standards.
              </Paragraph>
            </div>

            <div className="right__col">
              <div className="right__number color3">
                <span>03</span>
              </div>
              <Title tagName="h3" className="right__title">
                Evolve
              </Title>
              <Paragraph className="right__description">
                Embedded, expert teams working alongside you to continue to
                iterate and maximize customer value.
              </Paragraph>
            </div>
          </div>
        </Row>
      </Container>
    </StyledDigitalProductsSection>
  );
}

export default DigitalProductsSection