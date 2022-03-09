import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import ServicesS from "../components/ServicesComponents/Services";
import { Wrapper } from "../components/StyledComponents/Wrapper";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  @media (min-width: 1700px) {
    width: 80%;
  }
`;
export const query = graphql`
  {
    strapiService {
      data {
        attributes {
          main_title
          services_links {
            id
            LinkTo
            test_images {
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
`;
function Services({ data }) {
  const { services_links, main_title } = data.strapiService.data.attributes;
  return (
    <Wrapper>
      <Container>
        <ServicesS data={services_links} title={main_title} />
      </Container>
    </Wrapper>
  );
}

export default Services;
