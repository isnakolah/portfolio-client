import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    color: "#d9d7da",
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

const StyledButton = styled(Button)({
  color: "#d9d7da",
  boxShadow: "1px 1px 2px rgb(0 0 0 / 47%)",
  border: "1px solid #d9d7da",
  borderRadius: "0px",
  animationTimingFunction: "ease-in-out",
  "&:hover": {
    color: "white",
    borderColor: "white",
  },
});

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
          a software engineer specialized in both <strong>frontend and backend</strong>
        </Typography>
      </Grid>
      <Grid item>
        <StyledButton
          variant="outlined"
          color="secondary"
          onClick={() => handleClick("/porfolio")}
          size="large"
        >
          Portfolio
        </StyledButton>
      </Grid>
      <Grid item>
        <StyledButton
          variant="outlined"
          color="secondary"
          onClick={() => handleClick("/my-offer")}
          size="large"
        >
          My Offer
        </StyledButton>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
