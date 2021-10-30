import React from "react";
import styled from "styled-components";
import HeroImage from "../images/expeimage.png";
import line from "../images/line.png";
import { experiences } from "../data";

const Experience = () => {
  return (
    <ExperienceContainer style={{ backgroundImage: `url(${HeroImage})` }}>
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
        <GridContent gridColumn="2/4" gridRow="2">
          <img src={line} alt="line" />
        </GridContent>
      </GridComponent>
    </ExperienceContainer>
  );
};

export default Experience;

const ExperienceContainer = styled.div`
  background: #000000;
  color: #fff;
  background-size: cover;
  position: relative;
  display: grid;
  align-items: center;
  opacity: 0.94;
`;

const GridComponent = styled.div`
  width: 80%;
  display: grid;
`;

const GridContent = styled.div`
  width: 40rem;
  height: 15rem;
  display: grid;
  margin: 5px;
  grid-template-rows: 20rem;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
`;

const InnerItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
`;
