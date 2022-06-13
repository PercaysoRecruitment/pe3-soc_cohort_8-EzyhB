import React from "react";
import { Container } from "../styles/Container";
import { Typography } from "../styles/Typography";

import css from "./NewsReport.module.css";

interface Props {
  title: string;
  description: string;
  content: string;
  image: string;
  url: string;
}

export default function NewsReport({
  title,
  description,
  content,
  image,
  url,
}: Props) {
  return (
    <Container className={css.cardBody}>
      <Typography variant="h5">{title}</Typography>
      <img src={image} alt={title} />

      <Typography>{description}</Typography>
      <a href={url} target="_blank" rel="noreferrer">
        <Typography>Read more...</Typography>
      </a>
    </Container>
  );
}
