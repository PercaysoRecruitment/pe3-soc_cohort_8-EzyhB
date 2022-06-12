import React from "react";
import { Container } from "../styles/Container";
import { Typography } from "../styles/Typography";

import css from "./NewsReport.module.css";

interface Props {
  title: string;
  description: string;
  content: string;
  image: string;
}

export default function NewsReport({
  title,
  description,
  content,
  image,
}: Props) {
  return (
    <Container className={css.cardBody}>
      <Typography variant="h5">{title}</Typography>
      <img src={image} alt={title} />

      <Typography>{description}</Typography>
    </Container>
  );
}
