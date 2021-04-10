import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  loading: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    left: 0,
    color: "#CCC",
    opacity: 0,
    animation: "2s ease-in-out 0.5s infinite alternate $fade",
  },

  logo: {
    height: 100,
    opacity: 0.1,
  },

  "@keyframes fade": {
    "0%, 100%": {
      opacity: 0.25,
    },
    "50%": {
      opacity: 1,
    },
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <img className={classes.logo} src="/bench.svg" alt="Loading" />
      <div>Preparing Transactions</div>
    </div>
  );
};

export default Loading;
