import axios from "axios";
import {useTransactions} from "./use-transactions";
import {renderHook} from "@testing-library/react-hooks";

jest.mock("axios");

it("should run the hook until all fetches have completed and returns transactions", async () => {
  const mockResponses = {
    "https://resttest.bench.co/transactions/1.json": {
      data: {
        totalCount: 3,
        page: 3,
        transactions: [
          {
            Date: "2013-12-22",
            Ledger: "Phone & Internet Expense",
            Amount: "-110.71",
            Company: "SHAW CABLESYSTEMS CALGARY AB",
          },
        ],
      },
    },
    "https://resttest.bench.co/transactions/2.json": {
      data: {
        totalCount: 3,
        page: 3,
        transactions: [
          {
            Date: "2013-12-20",
            Ledger: "Business Meals & Entertainment Expense",
            Amount: "-120",
            Company: "COMMODORE LANES & BILL VANCOUVER BC",
          },
        ],
      },
    },
    "https://resttest.bench.co/transactions/3.json": {
      data: {
        totalCount: 3,
        page: 3,
        transactions: [
          {
            Date: "2013-12-17",
            Ledger: "Office Expense",
            Amount: "-16.35",
            Company: "DYNAMEX EXPRESS xxxxxxxx6414 ON",
          },
        ],
      },
    },
  };

  axios.get.mockImplementation((url) => {
    const response = mockResponses[url];
    return response ? Promise.resolve(response) : Promise.reject();
  });

  const {result, waitForNextUpdate} = renderHook(() => useTransactions());
  expect(result.current.ready).toBe(false);

  await waitForNextUpdate();

  expect(result.current.ready).toBe(true);
  expect(result.current.err).toBeUndefined();
  expect(result.current.transactions.length).toBe(3);
});

it("should run the hook and fetch correctly when there is only one page of results", async () => {
  const mockResponses = {
    "https://resttest.bench.co/transactions/1.json": {
      data: {
        totalCount: 1,
        page: 1,
        transactions: [
          {
            Date: "2013-12-22",
            Ledger: "Phone & Internet Expense",
            Amount: "-110.71",
            Company: "SHAW CABLESYSTEMS CALGARY AB",
          },
        ],
      },
    },
  };

  axios.get.mockImplementation((url) => {
    const response = mockResponses[url];
    return response ? Promise.resolve(response) : Promise.reject();
  });

  const {result, waitForNextUpdate} = renderHook(() => useTransactions());
  expect(result.current.ready).toBe(false);

  await waitForNextUpdate();

  expect(result.current.ready).toBe(true);
  expect(result.current.err).toBeUndefined();
  expect(result.current.transactions.length).toBe(1);
});

it("should run the hook and fetch correctly when there are no transaction", async () => {
  const mockResponses = {
    "https://resttest.bench.co/transactions/1.json": {
      data: {
        totalCount: 0,
        page: 1,
        transactions: [],
      },
    },
  };

  axios.get.mockImplementation((url) => {
    const response = mockResponses[url];
    return response ? Promise.resolve(response) : Promise.reject();
  });

  const {result, waitForNextUpdate} = renderHook(() => useTransactions());
  expect(result.current.ready).toBe(false);

  await waitForNextUpdate();

  expect(result.current.ready).toBe(true);
  expect(result.current.err).toBeUndefined();
  expect(result.current.transactions.length).toBe(0);
});

it("should run the hook and receive an error when the request fails", async () => {
  axios.get.mockImplementation(() => {
    return Promise.reject(new Error("failed"));
  });

  const {result, waitForNextUpdate} = renderHook(() => useTransactions());
  await waitForNextUpdate();

  expect(result.current.err).toBeDefined();
  expect(result.current.err.message).toBe("failed");
});
