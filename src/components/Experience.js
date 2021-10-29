import React from "react";
import styled from "styled-components";
import HeroImage from "../images/expeimage.png";
import line from "../images/line.png";

const Experience = () => {
  return (
    <ExperienceContainer style={{ backgroundImage: `url(${HeroImage})` }}>
      <GridComponent>
        <GridContent gridColumn="3" gridRow="1">
          <InnerItem>
            <h3>JTSpice, CEO</h3>
            <span>2016 - present</span>
            <p>
              Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a
              lorem non luctus. Aliquam ut neque est. Sed tortor neque, rutrum
              dapibus viverra sit amet, tristique sed justo. Nulla maximus
              venenatis ligula quis cursus. Nullam laoreet luctus urna at
              mattis.{" "}
            </p>
          </InnerItem>
        </GridContent>
        <GridContent gridColumn="1" gridRow="2">
          <InnerItem>
            <h3>Kentucky Fried Chicken, Chief Cook</h3>
            <span>2012 - 2016</span>
            <p>
              Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a
              lorem non luctus. Aliquam ut neque est. Sed tortor neque, rutrum
              dapibus viverra sit amet, tristique sed justo. Nulla maximus
              venenatis ligula quis cursus. Nullam laoreet luctus urna at
              mattis.{" "}
            </p>
          </InnerItem>
        </GridContent>
        <GridContent gridColumn="3" gridRow="3">
          <InnerItem>
            <h3>Chillspot, Assistant Chef</h3>
            <span>2005 - 2012</span>
            <p>
              Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a
              lorem non luctus. Aliquam ut neque est. Sed tortor neque, rutrum
              dapibus viverra sit amet, tristique sed justo. Nulla maximus
              venenatis ligula quis cursus. Nullam laoreet luctus urna at
              mattis.{" "}
            </p>
          </InnerItem>
        </GridContent>
        <GridContent gridColumn="1" gridRow="4">
          <InnerItem>
            <h3>Dallas Delight, Chief Cook</h3>
            <span>2012 - 2014</span>
            <p>
              Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a
              lorem non luctus. Aliquam ut neque est. Sed tortor neque, rutrum
              dapibus viverra sit amet, tristique sed justo. Nulla maximus
              venenatis ligula quis cursus. Nullam laoreet luctus urna at
              mattis.{" "}
            </p>
          </InnerItem>
        </GridContent>
        <img src={line} alt="line" />
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
  display: grid;
`;

const GridContent = styled.div`
  width: 40rem;
  height: 15rem;
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 35% 10% 35%;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
`;

const InnerItem = styled.div`
  display: flex;
  flex-direction: column;
`;
