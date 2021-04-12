import App from "./app";
import {screen, render} from "@testing-library/react";
import {useTransactions} from "../../hooks/use-transactions";

jest.mock("../../hooks/use-transactions");

it("should render transactions when successful", () => {
  useTransactions.mockReturnValue({
    ready: true,
    transactions: [],
  });

  render(<App />);

  expect(screen.getByText("DATE")).toBeInTheDocument();
  expect(screen.getByText("COMPANY")).toBeInTheDocument();
});

it("should render an error when unsuccessful", () => {
  useTransactions.mockReturnValue({
    err: new Error("Test Message"),
    ready: false,
  });

  render(<App />);

  expect(screen.getByText("Test Message")).toBeInTheDocument();
  expect(screen.getByAltText("error")).toBeInTheDocument();
});

it("should render the loading component when transactions are not ready", () => {
  useTransactions.mockReturnValue({
    transactions: [],
    ready: false,
  });

  render(<App />);

  expect(screen.getByText("Preparing Transactions")).toBeInTheDocument();
  expect(screen.getByAltText("Loading")).toBeInTheDocument();
});
