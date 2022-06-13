import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/Theme";
import userEvent from "@testing-library/user-event";
import MainDisplay from "..";

describe("Testing MAinDisplay with initial state", () => {
  it("should render the Taiwan threatens WTO title", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <MainDisplay />
      </ThemeProvider>
    );
    const textElement = screen.getByText(/Taiwan threatens WTO action after /i);
    expect(textElement).toBeInTheDocument();
  });

  it("should render the initial state image", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <MainDisplay />
      </ThemeProvider>
    );

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });

  it("should show the news description & it should have the correct font size", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <MainDisplay />
      </ThemeProvider>
    );

    const paragraphElement = screen.getByText(
      /Taiwan's government threatened to take Beijing/i
    );
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveStyle({
      "font-size": "1rem",
      "font-weight": "400",
    });
  });
});

describe("testing compatibility with input field", () => {
  it("should allow users see the input Field", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <MainDisplay />
      </ThemeProvider>
    );

    const inputElement = screen.getByPlaceholderText("Search for news...");
    expect(inputElement).toBeInTheDocument();
  });

  it("should allow users to type in the input Field", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <MainDisplay />
      </ThemeProvider>
    );

    const inputElement = screen.getByPlaceholderText("Search for news...");
    userEvent.type(inputElement, "google".repeat(10));

    expect(await screen.findByPlaceholderText(/Search for news/i)).toHaveValue(
      "google".repeat(10)
    );
  });
});
