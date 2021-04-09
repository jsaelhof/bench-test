import flow from "lodash/fp/flow";
import orderBy from "lodash/fp/orderBy";
import map from "lodash/fp/map";
import concat from "lodash/fp/concat";
import parse from "date-fns/parse";

export const mergeTransactions = (existingTransactions = []) =>
  flow(
    map((transaction) => ({
      ...transaction,
      Date: parse(transaction.Date, "yyyy-MM-dd", new Date()),
      Amount: parseFloat(transaction.Amount),
    })),
    concat(existingTransactions),
    orderBy("Date", "desc"),
  );
