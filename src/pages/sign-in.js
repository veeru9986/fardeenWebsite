import React from "react";
import styled from "styled-components";
import SignInForm from "../components/SignInForm";
import BenefitsSlider from "../components/BenefitsSlider";
import { Wrapper } from "../components/StyledComponents/Wrapper";
import { graphql } from "gatsby";

const Wrapper1 = styled(Wrapper)`
  margin-top: 0;
`;

const Container = styled.div`
  grid-area: auto/1/auto/3;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2rem;
  @media (max-width: 767px) {
    grid-area: auto/2/auto/3;
  }
  @media (min-width: 1700px) {
    width: 80%;
  }

  .left-section {
    grid-area: 1/1/2/2;
    width: 100%;
    background-color: #fff;
    margin-top: 7rem;
    grid-area: 1/1/2/2;

    @media (min-width: 1300px) {
      margin-top: 0;
    }
    @media (max-width: 767px) {
      grid-area: 1/1/2/3;
    }
  }
  .right-section {
    grid-area: 1/2/2/3;
    padding-top: 8rem;
    @media (max-width: 767px) {
      grid-area: 2/1/3/3;
      padding-top: 1rem;
    }
    h2 {
      font-size: var(--h3);
      width: 80%;
      font-weight: var(--xheavyWeight);
      @media (max-width: 767px) {
        width: 100%;
      }
    }
    .para {
      margin: 0.8rem 0;
      font-size: var(--p2);
      width: 80%;
      font-weight: var(--lightWeight);
      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }
  .sign-in-container {
    margin-top: 1rem;
  }
`;
export const query = graphql`
  {
    strapiSignin {
      data {
        attributes {
          signin {
            description
            id
            title
            images {
              id
              image {
                data {
                  attributes {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: TRACED_SVG)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
function SignIn({ data }) {
  const { title, description, images } = data.strapiSignin.data.attributes.signin;
  console.log(title);
  console.log(images)
  return (
    <Wrapper1>
      <Container>
        <div className="left-section">
          <BenefitsSlider data={images} />
        </div>
        <div className="right-section">
          <div className="heading">
            <h2>{title}</h2>
            <p className="para">{description}</p>
          </div>
          <div className="sign-in-container">
            <SignInForm />
          </div>
        </div>
      </Container>
    </Wrapper1>
  );
}

export default SignIn;
