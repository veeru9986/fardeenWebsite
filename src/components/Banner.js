import React from "react";
import styled from "styled-components";
import backgroundP from "../images/taxib.jpg";
import { ButtonStyled } from "./StyledComponents/Wrapper";

const Wrapper = styled.div`
  width: 100%;
  height: 550px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    background: #000000;
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  .banner-img {
    background-position: center;
    opacity: 0.45;
    display: block;
    height: 550px;
    width: 100%;
    position: absolute;

    img {
      width: 100%;
      height: 550px;
    }

    h2 {
      color: #fff;
    }
  }
  .contact-us {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    h1 {
      color: #fff;
      text-transform: uppercase;
    }
    span {
      font-size: 5rem;
      color: var(--medGreen);
    }
    .btn-contact {
      margin-top: 1rem;
    }
  }
`;

function Banner() {
  return (
    <Wrapper>
      <div className="banner-img">
        <img src={backgroundP} alt="" />
      </div>
      <div className="contact-us">
        <h1>Call us 24/7</h1>
        <span>080-080-080-08</span>
        <div className="btn-contact">
          <ButtonStyled primary>CONTACT</ButtonStyled>
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;
