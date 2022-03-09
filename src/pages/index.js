import React from "react";
import styled from "styled-components";
// import Seo from "../components/Seo/Seo";
import { Wrapper } from "../components/StyledComponents/Wrapper";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #77c063;

  @media (min-width: 1700px) {
    width: 80%;
  }
`;

function Index({ location }) {
  return (
    <Wrapper>
      <Container>
        <h2>Coming Soon...</h2>
      </Container>
    </Wrapper>
  );
}

export default Index;
