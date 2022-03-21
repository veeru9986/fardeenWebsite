import React from "react";
import styled from "styled-components";
import quote from "../images/quote.png";
import Slider from "react-slick";
import labtest from "../images/lab.jpg";
import chemlab from "../images/chemlab.jpg";
import { GatsbyImage } from "gatsby-plugin-image";
import { useForm } from "react-hook-form";
import airport1 from "../images/airport1.jpg";
import airport2 from "../images/airport2.jpg";

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
          <img src={airport1} alt="" />
        </div>
        <div className="image-wrapper">
          <img src={airport2} alt="" />
        </div>
      </Slider>
    </Container>
  );
}

export default BenefitsSlider;
