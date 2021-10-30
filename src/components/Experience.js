import React from "react";
import styled from "styled-components";
import HeroImage from "../images/expeimage.png";
import line from "../images/line.png";
import { experiences } from "../data";

const Experience = () => {
  return (
    <ExperienceContainer style={{ backgroundImage: `url(${HeroImage})` }}>
        <ExperienceOverlay>
        <ExperienceHeader>Experience</ExperienceHeader>
      <GridComponent>
        <GridContent gridColumn="3" gridRow="1">
          <InnerItem>
            <h3>{experiences.experience[0].role}</h3>
            <span>{experiences.experience[0].date}</span>
            <p>{experiences.experience[0].description}</p>
          </InnerItem>
        </GridContent>
        <GridContent gridColumn="1" gridRow="2">
          <InnerItem>
            <h3>{experiences.experience[1].role}</h3>
            <span>{experiences.experience[1].date}</span>
            <p>{experiences.experience[1].description}</p>
          </InnerItem>
        </GridContent>
        <GridContent gridColumn="3" gridRow="3">
          <InnerItem>
            <h3>{experiences.experience[2].role}</h3>
            <span>{experiences.experience[2].date}</span>
            <p>{experiences.experience[2].description}</p>
          </InnerItem>
        </GridContent>
        <GridContent gridColumn="1" gridRow="4">
          <InnerItem>
            <h3>{experiences.experience[3].role}</h3>
            <span>{experiences.experience[3].date}</span>
            <p>{experiences.experience[3].description}</p>
          </InnerItem>
        </GridContent>
        <GridContent gridColumn="2" gridRow="1 / span 4">
          <img src={line} alt="line" />
        </GridContent>
      </GridComponent>
      </ExperienceOverlay>
    </ExperienceContainer>
  );
};

export default Experience;

const ExperienceContainer = styled.div`
  color: #fff;
  background-size: cover;
  position: relative;
  display: grid;
  align-items: center;
  margin: 0 auto;
//   overflow: hidden;
`;

const ExperienceOverlay = styled.div`
padding: 4em 0;
background: #000000;
opacity: 0.94;
`

const ExperienceHeader = styled.div`
font-family: "Playfair Display";
font-weight: bold;
font-size: 36px;
line-height: 48px;
color: #FFCA47;
text-align: center;
margin-bottom: 50px;
`

const GridComponent = styled.div`
  padding: 0 80px;
  display: grid;
  margin: 0 auto;
  @media (max-width: 568px) {
    padding: 0 20px;
    margin: 0;
  }
  @media (max-width: 320px) {
    padding: 0;
    margin: 0;
  }
`;

const GridContent = styled.div`
  display: grid;
  margin: 5px;
  grid-template-rows: auto auto auto auto;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  margin-bottom: 80px;
  :nth-child(5) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
      :nth-child(5) {
        grid-row: 1 / span 5;
        grid-column: 1;
        padding: 0px;
      }
      :nth-child(1) {
        grid-column: 2;
        grid-row: 1;
        margin-bottom: 80px;
      }
      :nth-child(2) {
        grid-column: 2;
        grid-row: 2;
      }
      :nth-child(3) {
        grid-column: 2;
        grid-row: 3;
      }
      :nth-child(4) {
        grid-column: 2;
        grid-row: 4;
      }
}
`;

const InnerItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 462px;
  @media (min-width: 568px) {
    width: 70%;
  }
  @media (max-width: 320px) {
    width: 280px;
  }
  @media (min-width: 200px) {
    width: 90%;
  }
  h3 {
    font-family: "Playfair Display";
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 5px;
  }
  span {
    font-family: "Rubik";
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 10px;
  }
  p {
    font-family: "Rubik";
    font-size: 21px;
    line-height: 33.52px;
    @media (max-width: 568px) {
        font-size: 18px;   
        line-height: 28.73px;
    }
  }
`;