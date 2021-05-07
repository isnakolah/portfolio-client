import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    color: "#d4d0d2c4",
    height: "100%",
    justifyContent: "center",
    "& h1": {
      fontSize: "2.8rem",
      fontWeight: "500",
    },
    "& h3": {
      fontSize: "2rem",
      fontWeight: "300",
    },
    "& .MuiGrid-grid-xs-8": {
      flexBasis: "200px",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (to) => {
    history.push(to);
  };

  return (
    <Grid
      item
      container
      spacing={2}
      direction="column"
      alignContent="space-around"
      className={classes.root}
    >
      <Grid item xs={8}>
        <Typography variant="h1">Hi, I&apos;m Daniel</Typography>
        <Typography variant="h3">
          a freelance software engineer specialized in both{" "}
          <strong>frontend and backend</strong>
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleClick("/porfolio")}
        >
          Portfolio
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleClick("/my-offer")}
        >
          My Offer
        </Button>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
