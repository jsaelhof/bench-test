import {screen, render} from "@testing-library/react";
import Loading from "./loading";

it("should render the loading component", () => {
  render(<Loading />);
  expect(screen.getByText("Preparing Transactions")).toBeInTheDocument();
  expect(screen.getByAltText("Loading")).toBeInTheDocument();
});
