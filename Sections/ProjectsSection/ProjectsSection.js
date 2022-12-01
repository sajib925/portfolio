import React from "react";
import StyledProjectsSection from "./StyledProjectsSections";
import Container from "./../../components/Container/Container";
import Row from "./../../components/Row/Row";
import img1 from "../../images/projects/mobile-app.png";
import img2 from "../../images/projects/website.png";
import img3 from "../../images/projects/web-app.png";
import Card from "../../components/Card/Card";
import Title from "./../../components/Title/Title";
import Paragraph from "./../../components/Paragraph/Paragraph";
import Button from "../../components/Button/Button";

const ProjectsSection = () => {
  return (
    <StyledProjectsSection>
      <Container>
        <div className="project__section__content">
          <div className="left">
            <div className="left__text">
              <Title tagName="h2" className="left__title">
                My latest project that lives on the net.
              </Title>
              <Paragraph className="left__description">
                Let’s have look on my latest project that lives on the internet
                in recent times. I am providing the best design services for
                you.
              </Paragraph>
            </div>
            <Card
              className="left__bg__color1"
              path="/"
              title="Podcast Mobile App Design"
              subTitle="Podcast, Mobile App"
              img={img1}
            />
          </div>
          <div className="right">
            <Card
              className="right__bg__color2"
              path="/"
              title="Ad Tools Website Design"
              subTitle="Ad Tool, Web Design"
              img={img2}
            />
            <Card
              className="right__bg__color3"
              path="/"
              title="Doctor Web App Design"
              subTitle="Doctor, Web App"
              img={img3}
            />
            <div className="right__btn">
              <Button text="All Project" />
            </div>
          </div>
        </div>
      </Container>
    </StyledProjectsSection>
  );
};

export default ProjectsSection;
