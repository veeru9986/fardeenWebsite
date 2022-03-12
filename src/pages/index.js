import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import BenefitsSlider from "../components/BenefitsSlider";
import BookTaxi from "../components/BookTaxi";
// import Seo from "../components/Seo/Seo";
import { Wrapper } from "../components/StyledComponents/Wrapper";
import WhyChooseUs from "../components/WhyChooseUs";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/1/auto/4;
  width: 100%;
  @media (min-width: 1700px) {
    width: 80%;
  }
`;
const Container1 = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;
  @media (min-width: 1700px) {
    width: 80%;
  }
`;

function Index({ location }) {
  return (
    <Wrapper>
      <Container>
        <BenefitsSlider />
      </Container>
      <Container1>
        <BookTaxi />
        <WhyChooseUs />
      </Container1>
    </Wrapper>
  );
}

export default Index;
