import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

function WhyChooseUs() {
  return (
    <Wrapper>
      <Heading title="why choose us" desc="best services in the city" />
    </Wrapper>
  );
}

export default WhyChooseUs;
