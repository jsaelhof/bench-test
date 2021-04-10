import {AppBar, makeStyles, Toolbar} from "@material-ui/core";

const useStyles = makeStyles(({typography}) => ({
  appBar: {
    marginBottom: 32,
    background: "#efede7",
    color: "#2f3034",
  },

  toolbar: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  logo: {
    height: 50,
    padding: 16,
    opacity: 0.7,
    justifySelf: "center",
  },

  title: {
    ...typography.h6,
  },

  contact: {
    ...typography.subtitle2,
    textAlign: "right",

    "& :first-child": {
      fontSize: "1.2em",
    },
  },
}));

const TitleBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>Coding Test</div>
        <img src="/bench.svg" className={classes.logo} alt="Bench.co" />
        <div className={classes.contact}>
          <div>Jason Saelhof</div>
          <div>jsaelhof@gmail.com</div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
