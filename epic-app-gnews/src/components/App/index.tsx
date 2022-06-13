import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/Theme/GlobalStyle.css";
import { useState } from "react";

import MainDisplay from "../MainDisplay";
import { Container } from "../styles/Container";
import { lightTheme, darkTheme } from "../styles/Theme";
import Navbar from "../Navbar";

function App() {
  const [isLight, setIsLight] = useState(false);
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar isLight={isLight} setIsLight={setIsLight} />
      <Container>
        <MainDisplay />
      </Container>
    </ThemeProvider>
  );
}

export default App;
