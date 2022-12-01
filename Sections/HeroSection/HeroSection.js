import React from "react";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";

const HeroSection = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="">
            <Button className="button" variant="outline" text="Email me" />
            <Button className="button" text="Email me" />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
