import {AppBar, makeStyles, Toolbar} from "@material-ui/core";

const useStyles = makeStyles(({typography}) => ({
  appBar: {
    marginBottom: 32,
  },

  logo: {
    width: 150,
    marginRight: 16,
  },

  title: {
    ...typography.h6,
    flexGrow: 1,
  },

  contact: {
    ...typography.subtitle2,
    textAlign: "right",

    "& :first-child": {
      fontWeight: "bold",
      fontSize: "1.2em",
    },
  },
}));

const TitleBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <img src="/bench.png" className={classes.logo} alt="Bench.co" />
        <div className={classes.title}>Coding Test</div>
        <div className={classes.contact}>
          <div>Jason Saelhof</div>
          <div>jsaelhof@gmail.com</div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
