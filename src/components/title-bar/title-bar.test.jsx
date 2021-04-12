import {screen, render} from "@testing-library/react";
import TitleBar from "./title-bar";

it("should render the title bar component", () => {
  render(<TitleBar />);
  expect(screen.getByText("Coding Test")).toBeInTheDocument();
  expect(screen.getByText("Jason Saelhof")).toBeInTheDocument();
  expect(screen.getByText("jsaelhof@gmail.com")).toBeInTheDocument();
  expect(screen.getByAltText("Bench.co")).toBeInTheDocument();
});
