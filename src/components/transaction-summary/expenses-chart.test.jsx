import {screen, render} from "@testing-library/react";
import ExpensesChart from "./expenses-chart";

it("should render the item with correct values", () => {
  render(
    <ExpensesChart
      summarizedTransactions={[
        {ledger: "Company A", subtotal: 500, color: "#333333"},
        {ledger: "Company B", subtotal: 100, color: "#222222"},
      ]}
    />,
  );

  expect(screen.getByText("$600.00")).toBeInTheDocument();
});
