import {screen, render} from "@testing-library/react";
import TransactionList from "./transaction-list";

it("should render the transactions with correct dates and currency formatted values", () => {
  render(
    <TransactionList
      transactions={[
        {
          Date: new Date("2020-08-02T00:00:00"),
          Amount: -100.1,
          Company: "Company A",
          Ledger: "Ledger A",
        },
        {
          Date: new Date("2020-08-05T00:00:00"),
          Amount: 900,
          Company: "Company B",
          Ledger: "",
        },
      ]}
    />,
  );
  expect(screen.getByText("$-100.10")).toBeInTheDocument();
  expect(screen.getByText("Aug 2nd")).toBeInTheDocument();
  expect(screen.getByText("Company A")).toBeInTheDocument();
  expect(screen.getByText("Ledger A")).toBeInTheDocument();

  expect(screen.getByText("$900.00")).toBeInTheDocument();
  expect(screen.getByText("Aug 5th")).toBeInTheDocument();
  expect(screen.getByText("Company B")).toBeInTheDocument();
});

it("should render deposits with the deposit class", () => {
  render(
    <TransactionList
      transactions={[
        {
          Date: new Date("2020-08-02T00:00:00"),
          Amount: -100.1,
          Company: "Company A",
          Ledger: "Ledger A",
        },
        {
          Date: new Date("2020-08-05T00:00:00"),
          Amount: 900,
          Company: "Company B",
          Ledger: "",
        },
      ]}
    />,
  );

  expect(screen.getByText("$900.00").className.includes("deposit")).toBe(true);
  expect(screen.getByText("$-100.10").className.includes("deposit")).toBe(
    false,
  );
});

it("should render the correct total balance", () => {
  render(
    <TransactionList
      transactions={[
        {
          Date: new Date("2020-08-02T00:00:00"),
          Amount: -100.1,
          Company: "Company A",
          Ledger: "Ledger A",
        },
        {
          Date: new Date("2020-08-05T00:00:00"),
          Amount: 900,
          Company: "Company B",
          Ledger: "",
        },
      ]}
    />,
  );

  expect(screen.getByText("$799.90")).toBeInTheDocument();
});

it("should render the date only once when multiple transactions occur on the same date", () => {
  render(
    <TransactionList
      transactions={[
        {
          Date: new Date("2020-08-02T00:00:00"),
          Amount: -100.1,
          Company: "Company A",
          Ledger: "Ledger A",
        },
        {
          Date: new Date("2020-08-02T00:00:00"),
          Amount: 900,
          Company: "Company B",
          Ledger: "",
        },
        {
          Date: new Date("2020-08-05T00:00:00"),
          Amount: -20.15,
          Company: "Company C",
          Ledger: "Ledger C",
        },
        {
          Date: new Date("2020-08-05T00:00:00"),
          Amount: 10,
          Company: "Company D",
          Ledger: "",
        },
      ]}
    />,
  );

  expect(screen.getByText("Aug 2nd")).toBeInTheDocument();
  expect(screen.getByText("Aug 5th")).toBeInTheDocument();
});
