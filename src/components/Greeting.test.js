import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello World as a text ", () => {
  //Arrange
  render(<Greeting />);
  // Act
  // Nothing for now...
  // Assert
  const helloWorldElement = screen.getByText("Hello World!");

  expect(helloWorldElement).toBeInTheDocument();
});
