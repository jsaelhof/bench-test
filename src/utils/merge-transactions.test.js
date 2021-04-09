import {format} from "date-fns";
import {mergeTransactions} from "./merge-transactions";

describe("test merging transactions process", () => {
  let state;

  beforeEach(() => {
    state = mergeTransactions()([
      {
        Date: "2020-08-02",
        Amount: "-100.1",
        Ledger: "abc",
        Company: "Company A",
      },
    ]);

    state = mergeTransactions(state)([
      {
        Date: "2020-08-05",
        Amount: "-300.01",
        Ledger: "abc",
        Company: "Company J",
      },
    ]);

    state = mergeTransactions(state)([
      {
        Date: "2020-08-03",
        Amount: "-88.12",
        Ledger: "xyz",
        Company: "Company B",
      },
    ]);
  });

  it("should include specific transaction data", () => {
    expect(state[0].Amount).toBe(-300.01);
    expect(state[0].Company).toBe("Company J");
    expect(format(state[0].Date, "yyyy-MM-dd")).toBe("2020-08-05");
    expect(state[0].Ledger).toBe("abc");
  });

  it("should order transactions from newest to oldest", () => {
    expect(format(state[0].Date, "yyyy-MM-dd")).toBe("2020-08-05");
    expect(format(state[1].Date, "yyyy-MM-dd")).toBe("2020-08-03");
    expect(format(state[2].Date, "yyyy-MM-dd")).toBe("2020-08-02");
  });

  it("should have 3 transactions", () => {
    expect(state.length).toBe(3);
  });
});

describe("test with set of existing transactions", () => {
  const sut = mergeTransactions();
  const transactions = sut([
    {
      Date: "2020-08-02",
      Amount: "-100.1",
      Ledger: "abc",
      Company: "Company A",
    },
    {
      Date: "2020-08-03",
      Amount: "-88.12",
      Ledger: "xyz",
      Company: "Company B",
    },
    {
      Date: "2020-08-04",
      Amount: "200",
      Ledger: "",
      Company: "Company C",
    },
    {
      Date: "2020-08-05",
      Amount: "-300.01",
      Ledger: "abc",
      Company: "Company J",
    },
  ]);

  it.each(transactions)(
    "should transform date strings to Date objects",
    (transaction) => {
      expect(transaction.Date).toBeInstanceOf(Date);
    },
  );

  it.each(transactions)(
    "should transform amount strings to numbers",
    (transaction) => {
      expect(typeof transaction.Amount).toBe("number");
    },
  );
});
