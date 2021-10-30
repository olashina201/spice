import React from "react";
import styled from "styled-components";
import { services } from "../data";

const Services = () => {
  return (
    <ServiceComponent>
      <ServiceCap>Services I Offer</ServiceCap>
      <ServiceMenu>
        <MenuCap>
          <h1>{services.contentOne.title}</h1>
          <p>{services.contentOne.content}</p>
        </MenuCap>
        <MenuCap>
          <h1>{services.contentOne.title}</h1>
          <p>{services.contentOne.content}</p>
        </MenuCap>
        <MenuCap>
          <h1>{services.contentOne.title}</h1>
          <p>{services.contentOne.content}</p>
        </MenuCap>
        <MenuCap>
          <h1>{services.contentOne.title}</h1>
          <p>{services.contentOne.content}</p>
        </MenuCap>
        <MenuCap>
          <h1>{services.contentOne.title}</h1>
          <p>{services.contentOne.content}</p>
        </MenuCap>
        <MenuCap>
          <h1>{services.contentOne.title}</h1>
          <p>{services.contentOne.content}</p>
        </MenuCap>
      </ServiceMenu>
      <ServiceButton>Work with me</ServiceButton>
    </ServiceComponent>
  );
};

export default Services;
const ServiceComponent = styled.div`
  width: 100%;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  @media (max-width: 1080px) {
    height: 100%;
  }
`;
const ServiceCap = styled.div`
font-family: "Playfair Display";
  text-align: center;
  color: #ffca47;
  font-weight: bold;
  font-size: 36px;
  padding-top: 30px;
`;
const ServiceMenu = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
`;
const MenuCap = styled.div`
  display: flex;
  width: 25rem;
  height: 15rem;
  background: #100f0f;
  padding: 1.5rem;
  margin: 0.75rem;
  box-shadow: 0px 12px 60px rgba(0, 0, 0, 0.45);
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
  h1 {
    font-family: "Rubik";
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0.75rem;
  }
  p {
    font-family: "Rubik";
    font-size: 21px;
    font-weight: 300;
    margin: 0 auto;
    text-align: center;
  }
`;
const ServiceButton = styled.div`
  font-family: "Rubik";
  font-weight: normal;
  font-size: 20px;
  width: 13rem;
  margin: auto;
  text-align: center;
  padding: 10px;
  line-height: 24px;
  color: #ffca47;
  border: 2px solid #ffca47;
`;
