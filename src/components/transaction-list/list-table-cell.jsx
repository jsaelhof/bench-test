import BaseTableCell from "@material-ui/core/TableCell";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    borderBottom: "none",
  },

  deposit: {
    background: "#e4fff4",
    color: "#105837",
  },

  role_amount: {
    borderRadius: "0 10px 10px 0",
  },

  role_ledger: {
    borderRadius: "10px 0 0 10px",
  },
}));

const TableCell = ({role, deposit, ...props}) => {
  const classes = useStyles({role, deposit});
  return (
    <BaseTableCell
      classes={{
        root: clsx(
          classes.root,
          deposit && classes.deposit,
          classes[`role_${role}`],
        ),
      }}
      {...props}
    />
  );
};

export default TableCell;
