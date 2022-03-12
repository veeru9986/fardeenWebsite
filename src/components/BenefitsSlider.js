import React from "react";
import styled from "styled-components";
import quote from "../images/quote.png";
import Slider from "react-slick";
import labtest from "../images/lab.jpg";
import chemlab from "../images/chemlab.jpg";
import { GatsbyImage } from "gatsby-plugin-image";
import { useForm } from "react-hook-form";
import backgroundP from "../images/taxib.jpg";
import backgroundP1 from "../images/taxib1.jpg";


const Container = styled.div`
  margin-bottom: 2rem;
  display: block;
  height: 550px;

  .slick-slider {
    display: grid;
    height: 550px;
  }
  .slick-slide {
    height: 550px;
  }
  .image-wrapper {
    display: block;
    height: 550px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  /* .slick-slide {
    padding: 2rem;
  } */
`;

function BenefitsSlider({ data }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    infinite: true,
  };
  console.log(data);
  return (
    <Container>
      <Slider {...settings}>
        <div className="image-wrapper">
          <img src={backgroundP} alt="" />
        </div>
        <div className="image-wrapper">
          <img src={backgroundP1} alt="" />
        </div>
        <div className="image-wrapper">
          <img src={backgroundP} alt="" />
        </div>
      </Slider>
    </Container>
  );
}

export default BenefitsSlider;
