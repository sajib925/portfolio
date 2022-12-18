import Image from 'next/image';
import React from 'react'
import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';
import StyledCard from './StyledCard'
import  Link  from 'next/link';

const Card = ({subTitle, title, img, path="#", className}) => {
  return (
    <StyledCard className={className}>
        <Link className='card__link' href={path}></Link>
          <Title tagName="h3" className="title">
            {title}
          </Title>
          <Paragraph className="description">
            {subTitle}
          </Paragraph>
        <div className="thumbnail">
          <Image src={img} alt="app design" className="thumbnail__img" />
        </div>
      
    </StyledCard>
  );
}

export default Card