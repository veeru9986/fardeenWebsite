import React from "react";
import styled from "styled-components";
import { Wrapper } from "./StyledComponents/Wrapper";
import Logo from "../assets/logo.svg";
import { footerNavigationItems } from "../constants/footer-item";
import { Link } from "gatsby";

const FooterWrapper = styled(Wrapper)`
  background-color: #000000;
  padding: 2rem 0;
  display: flex;
  @media (max-width: 650px) {
    padding: 2rem 0;
  }
`;
const Container = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    width: 100%;

  h4{
    color: #ffffff;
  }
  span{
    color: var(--medGreen);
  }

  @media (min-width: 1700px) {
    width: 80%;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <h4>
          © 2022 <span>GSA TRAVELS </span>, All Rights Reserved
        </h4>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
