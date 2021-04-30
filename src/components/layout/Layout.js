import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { makeStyles } from "@material-ui/core/styles";

import MainArea from "./MainArea";
import SideNav from "./SideNav";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SideNav />
      <main className={classes.content}>
        <MainArea />
      </main>
    </div>
  );
};

export default Layout;
