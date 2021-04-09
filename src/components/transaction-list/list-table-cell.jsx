import BaseTableCell from "@material-ui/core/TableCell";
import {withStyles} from "@material-ui/core/styles";

const TableCell = withStyles({
  root: {
    borderBottom: "none",
    position: "relative",
  },
})(BaseTableCell);

export default TableCell;
