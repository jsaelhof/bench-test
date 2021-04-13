import {parse} from "date-fns";
import {summarizeTransactions} from "./summarize-transactions";

it("should correctly summarize a series of transactions by ledger", () => {
  const summary = summarizeTransactions([
    {
      Date: parse("2020-08-02", "yyyy-MM-dd", new Date()),
      Amount: -101.01,
      Ledger: "abc",
      Company: "Company A",
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
    {
      Date: parse("2020-08-03", "yyyy-MM-dd", new Date()),
      Amount: -300.23,
      Ledger: "abc",
      Company: "Company A",
    },
    {
      Date: parse("2020-08-08", "yyyy-MM-dd", new Date()),
      Amount: -182.0,
      Ledger: "xyz",
      Company: "Company C",
    },
    {
      Date: parse("2020-08-09", "yyyy-MM-dd", new Date()),
      Amount: -14.75,
      Ledger: "def",
      Company: "Company D",
    },
  ]);

  expect(summary.length).toBe(3);
  expect(summary).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ledger: "abc", subtotal: 401.24}),
      expect.objectContaining({ledger: "xyz", subtotal: 234.34}),
      expect.objectContaining({ledger: "def", subtotal: 26.75}),
    ]),
  );
});

it("should filter out transactions that are greater than or equal to 0", () => {
  const summary = summarizeTransactions([
    {
      Date: parse("2020-08-02", "yyyy-MM-dd", new Date()),
      Amount: -101.01,
      Ledger: "abc",
      Company: "Company A",
    },
    {
      Date: parse("2020-08-06", "yyyy-MM-dd", new Date()),
      Amount: 52.34,
      Ledger: "",
      Company: "Company C",
    },
  ]);

  expect(summary.length).toBe(1);
  expect(summary).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ledger: "abc", subtotal: 101.01}),
    ]),
  );
});

it("should order the summarized groups from largest to smallest", () => {
  const summary = summarizeTransactions([
    {
      Date: parse("2020-08-02", "yyyy-MM-dd", new Date()),
      Amount: -101.01,
      Ledger: "abc",
      Company: "Company A",
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
    {
      Date: parse("2020-08-03", "yyyy-MM-dd", new Date()),
      Amount: -300.23,
      Ledger: "abc",
      Company: "Company A",
    },
    {
      Date: parse("2020-08-08", "yyyy-MM-dd", new Date()),
      Amount: -182.0,
      Ledger: "xyz",
      Company: "Company C",
    },
    {
      Date: parse("2020-08-09", "yyyy-MM-dd", new Date()),
      Amount: -14.75,
      Ledger: "def",
      Company: "Company D",
    },
  ]);

  expect(summary[0].subtotal).toEqual(401.24);
  expect(summary[1].subtotal).toEqual(234.34);
  expect(summary[2].subtotal).toEqual(26.75);
});
