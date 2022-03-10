import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import { ButtonStyled } from "./StyledComponents/Wrapper";

const data = [
  {
    name: "hatchback",
    seats: "4 seats",
    luggage: "2 suitcases max",
    tollFee: 0,
    basicFare: 899,
  },
  {
    name: "sedan prime",
    seats: "4 seats",
    luggage: "2 suitcases max",
    tollFee: 0,
    basicFare: 899,
  },
  {
    name: "swift dzire",
    seats: "4 seats",
    luggage: "2 suitcases max",
    tollFee: 0,
    basicFare: 899,
  },
  {
    name: "mahindra verito",
    seats: "4 seats",
    luggage: "2 suitcases max",
    tollFee: 0,
    basicFare: 899,
  },
  {
    name: "mahindra verito A/C",
    seats: "4 seats",
    luggage: "2 suitcases max",
    tollFee: 0,
    basicFare: 899,
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
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
    grid-column-gap: 1.5rem;
    align-items: center;
    padding-bottom: 1rem;
    margin: 1rem 0;
    @media (max-width: 767px) {
      grid-template-columns: minmax(100px, auto) 1fr minmax(100px, auto) auto;
    }
    @media (max-width: 600px) {
      grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto) auto;
    }
  }
  .btn-book-now {
  }
  .vechile-type {
    display: flex;

    .image {
      width: 100px;
      height: 70px;
      background-color: #c4c4c4;
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

`;

const Button1 = styled(ButtonStyled)`
  min-width: auto !important;
  padding: 10px 10px;
`;

function BookTaxi() {
  return (
    <Wrapper>
      <Heading title="book taxi online" desc="save time & money" />
  
      <div className="car-types types">
        <span>Select</span>
        <span>Vechile</span>
        <span>Luggage</span>
        <span>TollFee</span>
        <span>Basic Fare</span>
      </div>
      <div>
        {data.map((d, id) => {
          return (
            <div className="car-table-body tb-body" key={id}>
              <div className="btn-book-now">
                <Button1>Book Now</Button1>
              </div>
              <div className="vechile-type">
                <div className="image" />
                <div className="col">
                  <h2>{d.name}</h2>
                  <h4>{d.seats}</h4>
                </div>
              </div>
              <div className="luggage-type">
                <span>2{d.luggage}</span>
              </div>
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