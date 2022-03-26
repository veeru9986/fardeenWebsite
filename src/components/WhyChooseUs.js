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
    margin-bottom: 1rem;
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
            <h3>Supreet D</h3>
            <p>
              I’m not huge on ride share or using anything that involves giving
              my bank info to a company. When using GSA travels for the first
              time I was very surprised at how competitive the prices were. The
              drivers are cool and do there best to make sure I was comfortable.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="icon" />
          <div className="">
            <h3>Anusha k</h3>
            <p>
              They are very convenient and easy to book.No jhanjhat whatsoever
              and thier drivers are very polite
            </p>
          </div>
        </div>
        <div className="section">
          <div className="icon" />
          <div className="">
            <h3>Sharath M</h3>
            <p>
              I am overall very pleased with GSA travels. I have felt safe all
              the time while travelling with them. Very professional and
              friendly drivers.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="icon" />
          <div className="">
            <h3>Girish G</h3>
            <p>
              Needed a ride to the airport, set up my ride online, got my
              confirmation info. The driver was on time and a super-easy person
              to converse with. He made our trip to the airport easy,
              comfortable and very enjoyable
            </p>
          </div>
        </div>
        <div className="section">
          <div className="icon" />
          <div className="">
            <h3>Veeresh K</h3>
            <p>
              We have used GSA travels before with excellent results. Less
              costly than taxis and much easier to use. We also recently used
              UBER and ola but the service at GSA RENTALS was much better than
              taxis or car services. Clean cars that show up on time and know
              where they are going (even when we didn't).
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default WhyChooseUs;
