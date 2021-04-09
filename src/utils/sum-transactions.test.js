import {parse} from "date-fns";
import {sumTransactions} from "./sum-transactions";

it("should correctly sum a series of transactions", () => {
  const sum = sumTransactions([
    {
      Date: parse("2020-08-02", "yyyy-MM-dd", new Date()),
      Amount: -101.01,
      Ledger: "abc",
      Company: "Company A",
    },
    {
      Date: parse("2020-08-04", "yyyy-MM-dd", new Date()),
      Amount: 10000,
      Ledger: "",
      Company: "Company B",
    },
    {
      Date: parse("2020-08-06", "yyyy-MM-dd", new Date()),
      Amount: -52.34,
      Ledger: "xyz",
      Company: "Company C",
    },
    {
      Date: parse("2020-08-07", "yyyy-MM-dd", new Date()),
      Amount: -12.0,
      Ledger: "def",
      Company: "Company D",
    },
  ]);

  expect(sum).toBe(9834.65);
});

it("should return zero when given no transactions", () => {
  const sum = sumTransactions();
  expect(sum).toBe(0);
});

it("should return zero when given an empty transaction list", () => {
  const sum = sumTransactions([]);
  expect(sum).toBe(0);
});
