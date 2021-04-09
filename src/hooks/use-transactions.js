import {bench} from "../constants/bench";
import {mergeTransactions} from "../utils/merge-transactions";
import {useEffect, useState} from "react";
import axios from "axios";

export const useTransactions = () => {
  const [fetching, setFetching] = useState(false);
  const [err, setErr] = useState();
  const [lastPageFetched, setLastPageFetched] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [totalTransactions, setTotalTransactions] = useState();

  const allTransactionsLoaded = totalTransactions === transactions.length;

  // Build a functional flow based on the existing transaction state.
  // This is used to process new transactions, merge with the existing ones, and order the merged set.
  const merge = mergeTransactions(transactions);

  useEffect(() => {
    const fetchTransactions = async (page) => {
      try {
        setFetching(true);
        const {data} = await axios.get(bench.URL.replace("%page%", page));
        setLastPageFetched(page);
        setTotalTransactions(data.totalCount);
        setTransactions(merge(data.transactions));
      } catch (ex) {
        setErr(ex);
      } finally {
        setFetching(false);
      }
    };

    if (!fetching && !err && !allTransactionsLoaded) {
      fetchTransactions(lastPageFetched + 1);
    }
  }, [
    allTransactionsLoaded,
    fetching,
    merge,
    lastPageFetched,
    totalTransactions,
    transactions,
  ]);

  return {
    err,
    transactions,
    ready: allTransactionsLoaded,
  };
};
