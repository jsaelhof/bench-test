import React from "react";
import {format, isEqual} from "date-fns";
import {makeStyles} from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import accounting from "accounting";

import {sumTransactions} from "../../utils/sum-transactions";
import ListTableCell from "./list-table-cell";

const useStyles = makeStyles(() => ({
  tableContainer: {
    marginBottom: 32,
  },

  table: {
    borderCollapse: "separate",
    borderSpacing: "0 4px",
  },

  headerRow: {
    background: "#FCFCFC",
    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
  },

  dateColumn: {
    color: "#666",
    verticalAlign: "top",
  },

  ledger: {
    fontSize: 12,
    color: "#666",
  },

  balance: {
    fontSize: 20,
    color: "#5f573c",
  },
}));

const TransactionList = ({transactions}) => {
  const classes = useStyles();

  const balance = sumTransactions(transactions);

  return (
    <TableContainer
      className={classes.tableContainer}
      component={Paper}
      elevation={2}
    >
      <Table size="small" className={classes.table}>
        <TableHead>
          <TableRow className={classes.headerRow}>
            <ListTableCell>Date</ListTableCell>
            <ListTableCell>Company</ListTableCell>
            <ListTableCell className={classes.balance} align="right">
              {accounting.formatMoney(balance)}
            </ListTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(({Date, Company, Ledger, Amount}, index) => (
            <TableRow key={index}>
              <ListTableCell className={classes.dateColumn}>
                {!isEqual(transactions[index - 1]?.Date, Date) ? (
                  <div className={classes.date}>{format(Date, "MMM do")}</div>
                ) : null}
              </ListTableCell>
              <ListTableCell deposit={Amount > 0} role="ledger">
                <div>{Company}</div>
                <div className={classes.ledger}>{Ledger}</div>
              </ListTableCell>
              <ListTableCell align="right" deposit={Amount > 0} role="amount">
                {accounting.formatMoney(Amount)}
              </ListTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(TransactionList);
