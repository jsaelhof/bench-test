import {makeStyles} from "@material-ui/core";
import accounting from "accounting";
import {RadialChart} from "react-vis";
import {colors} from "../../constants/colors";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  chart: {
    position: "relative",
    marginBottom: 32,
  },

  totalExpenses: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  totalExpensesLabel: {
    color: "#666",
  },

  totalExpensesAmount: {
    fontSize: 20,
    marginTop: 4,
  },
}));

const ExpensesChart = ({summarizedTransactions}) => {
  const classes = useStyles();

  const totalExpenses = summarizedTransactions.reduce((total, {subtotal}) => {
    total += subtotal;
    return total;
  }, 0);

  return (
    <div className={classes.chart}>
      <RadialChart
        data={summarizedTransactions.map(({subtotal}, index) => ({
          angle: 360 * (subtotal / totalExpenses),
          radius: 125,
          innerRadius: 125 * 0.75,
          color: colors[index],
        }))}
        width={250}
        height={250}
        colorType="literal"
      />
      <div className={classes.totalExpenses}>
        <div className={classes.totalExpensesLabel}>Expenses</div>
        <div className={classes.totalExpensesAmount}>
          {accounting.formatMoney(totalExpenses)}
        </div>
      </div>
    </div>
  );
};

ExpensesChart.propTypes = {
  summarizedTransactions: PropTypes.arrayOf(
    PropTypes.shape({
      ledger: PropTypes.string,
      subtotal: PropTypes.number,
      color: PropTypes.string,
    }),
  ).isRequired,
};

export default ExpensesChart;
