import React from "react";
import { Container } from "../styles/Container";
import { Typography } from "../styles/Typography";
import css from "./Title.module.css";

interface Props {
  Title: string;
}

export default function Title({ Title }: Props) {
  return (
    <Container>
      <Typography variant="h2" className={css.titleText}>
        {Title}
      </Typography>
    </Container>
  );
}
