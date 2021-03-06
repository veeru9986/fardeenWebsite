import styled from "styled-components";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr 15%;
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  margin-top: 2rem;
  place-items: center;
  overflow: hidden;

  @media (max-width: 991px) {
    grid-template-columns: 5% 1fr 5%;
  }
`;

export const LinkStyled = styled(Link)`
  min-width: 170px;
  padding: 10px 22px;
  border: 2px solid;
  color: ${(props) => (props.primary ? "#fff" : `#000`)};
  border-color: ${(props) =>
    props.primary ? "transparent" : "var(--medGreen)"};
  background-color: ${(props) => (props.primary ? "var(--lightRed)" : `#fff`)};
  outline: none;
  font-size: 14px;
  font-weight: var(--mediumWeight);
  border-radius: 66px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.primary ? "#fff" : "var(--medGreen)")};
    border-color: ${(props) => (props.primary ? "var(--lightRed)" : "none")};
    color: ${(props) => (props.primary ? "#000" : "#fff")};
  }
`;

export const ButtonStyled = styled.button`
  min-width: 170px;
  padding: 10px 22px;
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
    background-color: ${(props) => (props.primary ? "#fff" : "var(--medGreen)")};
    border-color: ${(props) => (props.primary ? "var(--medGreen)" : "none")};
    color: ${(props) => (props.primary ? "#000" : "#fff")};
  }
`;
