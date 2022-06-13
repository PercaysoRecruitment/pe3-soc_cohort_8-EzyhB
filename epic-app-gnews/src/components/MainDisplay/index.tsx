import React, { useEffect, useState } from "react";
import NewsReport from "../NewsReport";
import { Container } from "../styles/Container";
import { GridContainer } from "../styles/GridContainer";
import { GridItem } from "../styles/GridItem";
import { InputField } from "../styles/InputField";
import { Typography } from "../styles/Typography";
import Title from "../Title";
import css from "./MainDisplay.module.css";

const initialState = [
  {
    content:
      "TAIPEI, June 11 (Reuters) - Taiwan's government threatened to take Beijing to the World Trade Organization on Saturday after China suspended the import of grouper fish from the island saying it had detected banned chemicals, the latest agricultural s... [1613 chars]",
    description:
      "TAIPEI, June 11 (Reuters) - Taiwan's government threatened to take Beijing to the World Trade Organization on Saturday after China suspended the import of grouper fish from the island saying it had detected banned chemicals, the latest agricultural spat between the two.Last year China suspended imports of pineapples, sugar apples and wax apples from Taiwan, citing concerns",
    image:
      "https://www.agriculture.com/sites/all/themes/custom/sfg/favicon.ico",
    publishedAt: "2022-06-11T06:53:32Z",
    source: {
      name: "Successful Farming",
      url: "https://www.agriculture.com",
    },
    title: "Taiwan threatens WTO action after China stops grouper fish imports",
    url: "https://www.agriculture.com/markets/newswire/taiwan-threatens-wto-action-after-china-stops-grouper-fish-imports",
  },
];

interface Source {
  name: string;
  url: string;
}

interface News {
  content: string;
  description: string;
  image: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
}

type newsState = News[];

export default function MainDisplay() {
  const [news, setNews] = useState<newsState>(initialState);
  const [searchingFor, setSearchingFor] = useState("apples");

  useEffect(() => {
    const getNewsFromGNewsApi = async () => {
      // const data = await fetch(
      //   `https://gnews.io/api/v4/search?q=${searchingFor}&lang=en&token=${process.env.G_NEWS_API_TOKEN}`
      // );
      const data = await fetch(
        `https://gnews.io/api/v4/search?q=${searchingFor}&lang=en&token=6f03e766d6fb6087a3ebce14a0172ce6`
      );

      const jsonData = await data.json();

      console.log("inside the usEffect", jsonData.articles);

      setNews(jsonData.articles);
    };

    getNewsFromGNewsApi();
  }, [searchingFor]);

  return (
    <Container>
      <Title Title="The Amazing News App" />
      <Container className={css.inputContainer}>
        <InputField
          setSearchFor={setSearchingFor}
          placeholder="Search for news..."
        />
      </Container>

      <GridContainer>
        {news.map((el, index) => (
          <GridItem md="four">
            <NewsReport
              title={el.title}
              description={el.description}
              content={el.content}
              image={el.image}
            />
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
}
