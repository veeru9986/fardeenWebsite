import React from "react";
import styled from "styled-components";
import { Wrapper } from "./StyledComponents/Wrapper";
import Logo from "../assets/logo.svg";
import { footerNavigationItems } from "../constants/footer-item";
import { Link } from "gatsby";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterWrapper = styled(Wrapper)`
  background-color: #000000;
  padding: 2rem 0;
  display: flex;
  @media (max-width: 650px) {
    padding: 2rem 0;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  h4,
  h5 {
    color: #ffffff;
  }
  span {
    color: var(--medGreen);
  }

  @media (min-width: 1700px) {
    width: 80%;
  }
  .contact-us {
    display: flex;
    justify-content: center;
    align-items: center;

    .social-icons {
      display: flex;
      margin-left: 1rem;
      .instagram {
        margin-right: 0.7rem;
      }
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <h4>
          © 2022 <span>GSA TRAVELS </span>, All Rights Reserved
        </h4>
        <div className="contact-us">
          <h5>
            Contact us: <span>+918123899691</span> {` `} <span>info.gsatravels@gmail.com</span>
          </h5>
          <div className="social-icons">
            <div className="instagram">
              <a href="https://instagram.com/travelwithgsa?utm_medium=copy_link">
                <InstagramIcon />
              </a>
            </div>
            <div className="facebook">
              <a href="https://www.facebook.com/profile.php?id=100078728391155">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
