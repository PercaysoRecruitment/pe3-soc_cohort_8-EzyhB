import React from "react";
import NewsReport from "../NewsReport";
import { Container } from "../styles/Container";
import { GridContainer } from "../styles/GridContainer";
import { GridItem } from "../styles/GridItem";
import { Typography } from "../styles/Typography";

const title =
  "Taiwan threatens WTO action after China stops grouper fish imports";

const description =
  "TAIPEI, June 11 (Reuters) - Taiwan's government threatened to take Beijing to the World Trade Organization on Saturday after China suspended the import of grouper fish from the island saying it had detected banned chemicals, the latest agricultural spat between the two.Last year China suspended imports of pineapples, sugar apples and wax apples from Taiwan, citing concerns";

const content =
  "TAIPEI, June 11 (Reuters) - Taiwan's government threatened to take Beijing to the World Trade Organization on Saturday after China suspended the import of grouper fish from the island saying it had detected banned chemicals, the latest agricultural s... [1613 chars]";

const image =
  "https://hagadone.media.clients.ellingtoncms.com/img/photos/2022/06/09/Ron_McIntire_Randy_McIntire_Howard_Richter_Lon_Hudson_Ned_Hughes_Tim_Hendricks_Alan_Bradetich_r1200x630.jpg?b7d505e466ff31ef2a911eceee85296b69915698";

export default function MainDisplay() {
  return (
    <Container>
      <GridContainer>
        <GridItem md="six">
          <Typography>Hello</Typography>
        </GridItem>
        <GridItem md="six">
          <NewsReport
            title={title}
            description={description}
            content={content}
            image={image}
          />
        </GridItem>
      </GridContainer>
    </Container>
  );
}
