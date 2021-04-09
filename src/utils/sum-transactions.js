export const sumTransactions = (transactions = []) =>
  transactions.reduce((total, {Amount}) => {
    total += Amount;
    return total;
  }, 0);
