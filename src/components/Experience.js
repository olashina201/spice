import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <ExperienceContainer>
      <GridComponent>
        <GridContent gridColumn="2/3" gridRow="2">
          <h3>JTSpice, CEO</h3>
          <span>2016 - present</span>
          <p>
            Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a lorem
            non luctus. Aliquam ut neque est. Sed tortor neque, rutrum dapibus
            viverra sit amet, tristique sed justo. Nulla maximus venenatis
            ligula quis cursus. Nullam laoreet luctus urna at mattis.{" "}
          </p>
        </GridContent>
        <GridContent gridColumn="4" gridRow="1/2">
          <h3>Kentucky Fried Chicken, Chief Cook</h3>
          <span>2012 - 2016</span>
          <p>
            Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a lorem
            non luctus. Aliquam ut neque est. Sed tortor neque, rutrum dapibus
            viverra sit amet, tristique sed justo. Nulla maximus venenatis
            ligula quis cursus. Nullam laoreet luctus urna at mattis.{" "}
          </p>
        </GridContent>
        <GridContent>
          <h3>Chillspot, Assistant Chef</h3>
          <span>2005 - 2012</span>
          <p>
            Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a lorem
            non luctus. Aliquam ut neque est. Sed tortor neque, rutrum dapibus
            viverra sit amet, tristique sed justo. Nulla maximus venenatis
            ligula quis cursus. Nullam laoreet luctus urna at mattis.{" "}
          </p>
        </GridContent>
        <GridContent>
          <h3>Dallas Delight, Chief Cook</h3>
          <span>2012 - 2014</span>
          <p>
            Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a lorem
            non luctus. Aliquam ut neque est. Sed tortor neque, rutrum dapibus
            viverra sit amet, tristique sed justo. Nulla maximus venenatis
            ligula quis cursus. Nullam laoreet luctus urna at mattis.{" "}
          </p>
        </GridContent>
        <GridLine>
          <hr />
        </GridLine>
      </GridComponent>
    </ExperienceContainer>
  );
};

export default Experience;

const ExperienceContainer = styled.div`
display: flex;
margin: 0 20px;
  width: 1440px;
  height: 1800px;
  background: #000000;
  color: #fff;
  opacity: 0.94;
`;

const GridComponent = styled.div`
  display: grid;
`;

const GridContent = styled.div`
  width: 25rem;
  display: grid;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  background: ${props => props.color};
`;

const GridLine = styled.div`
  display: grid;
  position: relative;
`;
