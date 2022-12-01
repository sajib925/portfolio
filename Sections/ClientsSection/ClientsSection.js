import React from 'react'
import StyledClientsSection from './StyledClientsSection';
import Container from './../../components/Container/Container';
import Row from './../../components/Row/Row';
import  Title  from './../../components/Title/Title';
import Paragraph from './../../components/Paragraph/Paragraph';
import CLIENTS__DATA from './../../Data/ClientsData';
import Image from 'next/image';

const ClientsSection = () => {
  return (
    <StyledClientsSection>
      <Container>
        <Row>
          <div className="left">
            <Title tagName="h2" className="left__title">
              My honorable clients across the globe
            </Title>
            <Paragraph className="left__description">
              Through each phase of my engagement, I utilize focused teams that
              combine experience design, modern engineering, and iterative
              program.
            </Paragraph>
          </div>
          <div className="right">
            {
             CLIENTS__DATA.map(({id, img}) => {
                return(
                    <Image key={id} src={img} alt="img" className='right__img'/>
                )
             })
            }
          </div>
        </Row>
      </Container>
    </StyledClientsSection>
  );
}

export default ClientsSection