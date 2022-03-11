import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;

  .choose-us-wrapper {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    .section {
      width: 350px;
      padding: 1rem;
    }
  }
  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #c4c4c4;
  }
`;

function WhyChooseUs() {
  return (
    <Wrapper>
      <Heading title="why choose us" desc="best services in the city" />
      <div className="choose-us-wrapper">
        <div className="section">
          <div className="icon" />
          <div className="">
            <h3>secured booking</h3>
            <p>
              Details and pricing of all secured bookings will be confirmed by
              telephone, text or email. Bookings must be made in advance.{" "}
            </p>
          </div>
        </div>
        <div className="section">
          <div className="icon" />
          <div className="">
            <h3>secured booking</h3>
            <p>
              Details and pricing of all secured bookings will be confirmed by
              telephone, text or email. Bookings must be made in advance.{" "}
            </p>
          </div>
        </div>
        <div className="section">
          <div className="icon" />
          <div className="">
            <h3>secured booking</h3>
            <p>
              Details and pricing of all secured bookings will be confirmed by
              telephone, text or email. Bookings must be made in advance.{" "}
            </p>
          </div>
        </div>
        <div className="section">
          <div className="icon" />
          <div className="">
            <h3>secured booking</h3>
            <p>
              Details and pricing of all secured bookings will be confirmed by
              telephone, text or email. Bookings must be made in advance.{" "}
            </p>
          </div>
        </div>
        <div className="section">
          <div className="icon" />
          <div className="">
            <h3>secured booking</h3>
            <p>
              Details and pricing of all secured bookings will be confirmed by
              telephone, text or email. Bookings must be made in advance.{" "}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default WhyChooseUs;
