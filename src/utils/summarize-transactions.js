import flow from "lodash/fp/flow";
import filter from "lodash/fp/filter";
import groupBy from "lodash/fp/groupBy";
import map from "lodash/fp/map";
import orderBy from "lodash/fp/orderBy";
import toPairs from "lodash/fp/toPairs";

export const summarizeTransactions = flow(
  filter(({Amount}) => Amount < 0),
  groupBy("Ledger"),
  toPairs,
  map(([ledger, transactions]) => {
    return {
      ledger: ledger.replace(" Expense", ""),
      subtotal: transactions.reduce((subtotal, {Amount}) => {
        subtotal += -Amount;
        return subtotal;
      }, 0),
    };
  }),
  orderBy("subtotal", "desc"),
);
