import React from "react";
import { Container } from "../styles/Container";
import { GridContainer } from "../styles/GridContainer";
import { GridItem } from "../styles/GridItem";

export default function MainDisplay() {
  return (
    <Container>
      <GridContainer>
        <GridItem md="six">hello</GridItem>
        <GridItem md="six">hille</GridItem>
      </GridContainer>
    </Container>
  );
}
