import React from "react";
import styled from "styled-components";
import aboutVideo from "../images/video.mp4";
import { Wrapper } from "../components/StyledComponents/Wrapper";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/1/auto/4;
  width: 100%;
  @media (min-width: 1700px) {
    width: 80%;
  }
  .video-style {
    width: 100%;
    height: 550px;

    @media (max-width: 479px) {
      height: auto !important;
    }
  }
`;
const Container1 = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;
  @media (min-width: 1700px) {
    width: 80%;
  }
  span {
    font-size: var(--h2);
  }
`;

function About({ location }) {
  return (
    <Wrapper>
      <Container>
        <video controls={false} className="video-style" autoPlay loop muted>
          <source src={aboutVideo} type="video/mp4" />
        </video>
      </Container>
      <Container1>
        <p>
          We at <span>GSA Travels</span> in adherence to local and federal law
          provide fully sanitized and clean vehicles with well mannered and
          trained chauffeur. 100% availability of taxi 24/7, On time and before
          time service. You can rely on us without fear of missing your flight.
          We currently provide service in Bangalore but we are aiming to expand
          our business throughout India in the coming years. We have been
          successfully running our business from past 8 years with 1000's of
          happy customers.
        </p>
      </Container1>
    </Wrapper>
  );
}

export default About;
