import {screen, render} from "@testing-library/react";
import TransactionSummary from "./transaction-summary";

it("should render the summary with correct totals and labels", () => {
  render(
    <TransactionSummary
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
          Amount: -10,
          Company: "Company C",
          Ledger: "Ledger C",
        },
      ]}
    />,
  );

  expect(screen.getByText("$130.25")).toBeInTheDocument();
  expect(screen.getByText("$30.15")).toBeInTheDocument();
  expect(screen.getByText("$100.10")).toBeInTheDocument();
  expect(screen.getByText("Ledger A")).toBeInTheDocument();
  expect(screen.getByText("Ledger C")).toBeInTheDocument();
});
