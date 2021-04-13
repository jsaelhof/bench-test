import {makeStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import accounting from "accounting";

const useStyles = makeStyles(() => ({
  expense: {
    display: "flex",
    alignItems: "center",
    marginBottom: 16,
    marginLeft: 24,
  },

  mark: {
    width: 10,
    height: 20,
    borderRadius: 3.5,
    marginLeft: 8,
    marginRight: 16,
    marginTop: 2,
    boxShadow: "2px 2px 2px rgba(0,0,0,0.15)",
  },

  ledger: {
    fontSize: 12,
    color: "#333",
  },

  amount: {
    fontSize: 18,
    marginTop: 4,
  },
}));

const ExpenseItem = ({ledger, subtotal, color}) => {
  const classes = useStyles();
  return (
    <div className={classes.expense}>
      <div className={classes.mark} style={{background: color}} />
      <div>
        <div className={classes.ledger}>{ledger}</div>
        <div className={classes.amount}>{accounting.formatMoney(subtotal)}</div>
      </div>
    </div>
  );
};

ExpenseItem.propTypes = {
  ledger: PropTypes.string.isRequired,
  subtotal: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ExpenseItem;
