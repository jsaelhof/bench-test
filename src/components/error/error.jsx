import {Button, makeStyles} from "@material-ui/core";
import {bench} from "../../constants/bench";

const useStyles = makeStyles(({typography}) => ({
  error: {
    display: "flex",
    margin: "120px auto 0 auto",
    maxWidth: 1000,
    color: "#333",
  },

  errorImage: {
    borderRadius: 16,
    width: 400,
    flexShrink: 1,
    marginLeft: 48,
    transform: "perspective(300px) rotateY(-5deg)",
  },

  errorContent: {
    display: "flex",
    flexDirection: "column",
  },

  errorTitle: {
    ...typography.h5,
    fontWeight: 500,
  },

  errorMessage: {
    ...typography.body1,
    marginTop: 16,
    flex: 1,
  },

  errorDetail: {
    ...typography.caption,
    color: "#666",
  },

  homeButton: {
    background: "#088b8b",
    color: "#FFF",
    marginTop: 24,

    "&:hover": {
      background: "#16abab",
    },
  },
}));

const Error = ({message}) => {
  const classes = useStyles();

  return (
    <div className={classes.error}>
      <div className={classes.errorContent}>
        <div className={classes.errorTitle}>
          Uh oh, we've caught a problem...
        </div>
        <div className={classes.errorMessage}>
          <div>
            At Bench, we're checking every detail. We've let our team know that
            something has gone wrong so that we can get you back up and running
            as soon as possible. In the meantime, you can reload the page to try
            again or head back home.
          </div>
          <Button
            onClick={() => {
              window.location.href = bench.HOME;
            }}
            variant="contained"
            className={classes.homeButton}
          >
            Return to Bench.co
          </Button>
        </div>

        <div className={classes.errorDetail}>{message}</div>
      </div>
      <img className={classes.errorImage} src="/error.jpg" alt="error" />
    </div>
  );
};

export default Error;
