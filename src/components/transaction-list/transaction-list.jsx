import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import {format, isEqual} from "date-fns";
import {makeStyles} from "@material-ui/core/styles";
import accounting from "accounting";
import clsx from "clsx";
import ListTableCell from "./list-table-cell";
import {sumTransactions} from "../../utils/sum-transactions";

const useStyles = makeStyles(() => ({
  dateColumn: {
    color: "#666",
    verticalAlign: "top",
  },

  ledger: {
    fontSize: 12,
    color: "#666",
  },

  deposit: {
    color: "green",
    fontWeight: "bold",
  },
}));

const TransactionList = ({transactions}) => {
  const classes = useStyles();

  const balance = sumTransactions(transactions);

  return (
    <TableContainer component={Paper} elevation={2}>
      <Table size="small" stickyHeader>
        <TableHead>
          <TableRow>
            <ListTableCell>Date</ListTableCell>
            <ListTableCell>Company</ListTableCell>
            <ListTableCell align="right">
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
              <ListTableCell>
                <div>{Company}</div>
                <div className={classes.ledger}>{Ledger}</div>
              </ListTableCell>
              <ListTableCell
                align="right"
                className={clsx(Amount > 0 && classes.deposit)}
              >
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
