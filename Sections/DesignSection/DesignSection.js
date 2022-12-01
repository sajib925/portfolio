import React from 'react'
import Container from '../../components/Container/Container';
import StyledDesignSection from './StyledDesignSection';
import Title from './../../components/Title/Title';
import Paragraph from '../../components/Paragraph/Paragraph';
import { AWARDS, CSSDA, FWA } from '../../Data/Awards';

const DesignSection = () => {
  return (
    <StyledDesignSection>
      <Container>
        <div className="top">
          <Title tagName="h2" className="top__title">
            My amazing design rewards list
          </Title>
          <Paragraph className="top__description">
            Design services I am providing. With best-in-class design and
            engineering, my work maximizes value by putting your customers at
            the center of everything I do.
          </Paragraph>
        </div>
        <div className="bottom">
          <div className="bottom__col">
            <Title tagName="h3" className="bottom__title">
              AWWWARDS (5)
            </Title>
            <div className="bottom__date">
              {
                AWARDS.map(({id, text}) => {
                  return (
                    <Paragraph className="bottom__description" key={id}>
                      {text}
                    </Paragraph>
                  );
                })
              }
            </div>
          </div>
          <div className="bottom__col">

            <Title tagName="h3" className="bottom__title">
              FWA (3)
            </Title>

            <div className="bottom__date">
              {
                FWA.map(({id, text}) => {
                  return (
                    <Paragraph className="bottom__description" key={id}>
                      {text}
                    </Paragraph>
                  );
                })
              }
            </div>
          </div>
          <div className="bottom__col">
            <Title tagName="h3" className="bottom__title">
              CSSDA (4)
            </Title>
            <div className="bottom__date">
             {
              CSSDA.map(({id, text}) => {
                return (
                  <Paragraph className="bottom__description" key={id}>
                    {text}
                  </Paragraph>
                );
              })
             }
            </div>
          </div>
        </div>
      </Container>
    </StyledDesignSection>
  );
}

export default DesignSection