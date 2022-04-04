import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import { ButtonStyled } from "./StyledComponents/Wrapper";
import ReactWhatsapp from "react-whatsapp";

const data = [
  {
    name: "Sedan",
    seats: "",
    tollFee: 0,
    basicFare: "Prices depend on distance",
    img: "https://imgd.aeplcdn.com/600x337/n/cw/ec/41197/hyundai-verna-right-front-three-quarter7.jpeg?q=75",
  },
  {
    name: "Innova",
    seats: "",
    tollFee: 0,
    basicFare: "Prices depend on distance",
    img: "https://gomechanic.in/blog/wp-content/uploads/2020/05/cabImage_20180925_1d874956469.jpg",
  },
  {
    name: "Innova Crysta",
    seats: "",
    tollFee: 0,
    basicFare: "Prices depend on distance",
    img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/20623/innova-crysta-exterior-right-front-three-quarter.jpeg?q=75&wm=1",
  },
];

const Wrapper = styled.div`
  width: 100%;

  span {
    font-size: var(--p2);
    color: #888888;
  }
  h2 {
    font-size: var(--h4);
    text-transform: uppercase;
  }
  .car-types,
  .car-table-body {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    grid-column-gap: 1.5rem;
    align-items: center;
    padding-bottom: 1rem;
    margin: 1rem 0;
    @media (max-width: 1200px) {
      grid-template-columns: 100px 1fr 100px 50px;
    }
    @media (max-width: 767px) {
      grid-template-columns: minmax(100px, auto) 1fr minmax(100px, auto) auto;
    }
  }
  .types {
    @media (max-width: 767px) {
      display: none;
    }
  }
  .btn-book-now {
  }
  .vechile-type {
    display: flex;

    .image {
      width: 100px;
      height: 70px;
      display: block;
      img {
        width: 100%;
      }
    }
    .col {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
    }
  }
  .luggage-type {
  }
  .toll-fee {
  }
  .basic-fare {
  }

  @media (max-width: 680px) {
    .tb-body {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-bottom: 1px solid #000;
    }
    .btn-book-now {
      order: 1;
    }
    .vechile-type {
      align-items: center;
    }
    .luggage-type {
      margin: 0.5rem 0;
    }
    .toll-fee,
    .basic-fare {
      margin-bottom: 0.5rem;
    }
  }
`;

const Button1 = styled(ReactWhatsapp)`
  min-width: auto !important;
  padding: 10px 10px;
  border: 2px solid;
  color: ${(props) => (props.primary ? "#fff" : `#000`)};
  border-color: ${(props) =>
    props.primary ? "transparent" : "var(--medGreen)"};
  background-color: ${(props) => (props.primary ? "var(--medGreen)" : `#fff`)};
  outline: none;
  font-size: 14px;
  font-weight: var(--mediumWeight);
  border-radius: 66px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.primary ? "#fff" : "var(--medGreen)"};
    border-color: ${(props) => (props.primary ? "var(--medGreen)" : "none")};
    color: ${(props) => (props.primary ? "#000" : "#fff")};
  }
`;

function BookTaxi() {
  return (
    <Wrapper>
      <Heading title="book taxi online" desc="save time & money" />

      <div className="car-types types">
        <span>Select</span>
        <span>Vechile</span>
        {/* <span>Luggage</span> */}
        <span>TollFee</span>
        <span>Basic Fare</span>
      </div>
      <div>
        {data.map((d, id) => {
          return (
            <div className="car-table-body tb-body" key={id}>
              <div className="btn-book-now">
                <Button1 number="+919886899691" message="Book Now">
                  Book Now
                </Button1>
              </div>
              <div className="vechile-type">
                <div className="image">
                  <img src={d.img} alt="" />
                </div>
                <div className="col">
                  <h2>{d.name}</h2>
                  <h4>{d.seats}</h4>
                </div>
              </div>
              {/* <div className="luggage-type">
                <span>2{d.luggage}</span>
              </div> */}
              <div className="toll-fee">
                <span>₹ {d.tollFee}</span>
              </div>
              <div className="basic-fare">
                <h2>₹ {d.basicFare}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default BookTaxi;
