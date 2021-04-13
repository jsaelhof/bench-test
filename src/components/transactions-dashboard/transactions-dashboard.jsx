import React from "react";
import {makeStyles} from "@material-ui/core";
import TransactionList from "../transaction-list/transaction-list";
import TransactionSummary from "../transaction-summary/transaction-summary";

const useStyles = makeStyles(() => ({
  container: {display: "flex"},
}));

const TransactionsDashboard = ({transactions}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TransactionList transactions={transactions} />
      <TransactionSummary transactions={transactions} />
    </div>
  );
};

export default React.memo(TransactionsDashboard);
