import React from "react";
import styled from "styled-components";

const HeadingS = styled.div`
  .heading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0 4rem 0;

    .divider {
      background-color: var(--medGreen);
      width: 10%;
      height: 4px;
      margin: 1rem 0;
    }
    span {
      color: var(--medGreen);
      font-size: var(--p2);
      text-transform: uppercase;
    }
    h1 {
      text-transform: uppercase;
    }
  }
`;

function Heading({ title, desc }) {
  return (
    <HeadingS>
      <div className="heading">
        <div className="divider" />
        <h1>{title}</h1>
        <span>{desc}</span>
      </div>
    </HeadingS>
  );
}

export default Heading;
