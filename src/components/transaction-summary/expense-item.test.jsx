import {screen, render} from "@testing-library/react";
import ExpenseItem from "./expense-item";

it("should render the item with correct values", () => {
  render(<ExpenseItem ledger="Company A" subtotal={500} color="#333333" />);

  expect(screen.getByText("$500.00")).toBeInTheDocument();
  expect(screen.getByText("Company A")).toBeInTheDocument();
});
