import React from "react";
import {makeStyles} from "@material-ui/core";
import {colors} from "../../constants/colors";
import ExpenseItem from "./expense-item";
import {summarizeTransactions} from "../../utils/summarize-transactions";
import ExpensesChart from "./expenses-chart";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  container: {
    marginLeft: 48,
  },
}));

const TransactionSummary = ({transactions}) => {
  const classes = useStyles();
  const summary = summarizeTransactions(transactions);

  return (
    <div className={classes.container}>
      <ExpensesChart summarizedTransactions={summary} />
      <div>
        {summary.map(({ledger, subtotal}, index) => (
          <ExpenseItem
            key={ledger}
            ledger={ledger}
            subtotal={subtotal}
            color={colors[index]}
          />
        ))}
      </div>
    </div>
  );
};

TransactionSummary.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      Date: PropTypes.instanceOf(Date).isRequired,
      Amount: PropTypes.number.isRequired,
      Ledger: PropTypes.string.isRequired,
      Company: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionSummary;
