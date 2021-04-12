import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Error from "./error";

// Save the original window.location object
const realLocation = window.location;

// Replace the window.location object with a mock for the duration of the tests.
beforeEach(() => {
  delete window.location;
  window.location = {assign: jest.fn()};
});

afterEach(() => {
  window.location = realLocation;
});

it("should render the message passed as a prop", () => {
  render(<Error message="Test Message" />);
  expect(screen.getByText("Test Message")).toBeInTheDocument();
});

it("change the window location when the button is pressed", () => {
  render(<Error message="Test Message" />);
  userEvent.click(screen.getByText("Return to Bench.co"));
  expect(window.location.assign).toBeCalledWith("https://www.bench.co");
});
