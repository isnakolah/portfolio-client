import { Link, NavLink } from "react-router-dom";
import {
  Grid,
  Card,
  List,
  ListItem,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import DvrIcon from "@material-ui/icons/Dvr";

import profilePhoto from "../assets/images/profile-photo.jpg";
import { mainAreaBackground, navLinkBackground } from "../utils/colors";

const useStyles = makeStyles(() => ({
  root: {
    background: mainAreaBackground,
    textAlign: "center",
    borderRadius: "2rem 0 0 2rem",
    fontSize: "0.85rem",
  },
  card: {
    backgroundColor: "transparent",
    boxShadow: "none",
    cursor: "pointer",
    textDecoration: "none",
    "& img": {
      width: "4rem",
      height: "4rem",
      borderRadius: "50%",
      margin: "0 auto 0 auto",
    },
  },
  nav: {
    "& a": {
      margin: "1rem 0 1rem 0",
      borderRadius: "2rem",
      color: "rgb(18 120 134)",
      "&:hover": {
        background: navLinkBackground,
      },
      "& span": {
        padding: "0rem 1rem",
      },
    },
  },
  active: {
    color: "rgb(43 73 97) !important",
    background: navLinkBackground,
  },
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      alignItems="center"
      justify="space-evenly"
    >
      <Grid item>
        <Card className={classes.card} component={Link} to="/">
          <CardMedia image={profilePhoto} alt="profile photo" component="img" />
          <CardContent>
            <Typography variant="h6">Daniel Nakolah</Typography>
            <Typography>FullStack Software Engineer</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid>
        <List component="nav" className={classes.nav}>
          <ListItem
            component={NavLink}
            to="/portfolio"
            activeClassName={classes.active}
          >
            <DvrIcon />
            <Typography component="span">Portfolio</Typography>
          </ListItem>
          <ListItem
            component={NavLink}
            to="/my-offer"
            activeClassName={classes.active}
          >
            <BusinessCenterIcon />
            <Typography component="span">My Offer</Typography>
          </ListItem>
          <ListItem
            component={NavLink}
            to="/contact-me"
            activeClassName={classes.active}
          >
            <AlternateEmailIcon />
            <Typography component="span">Contact Me</Typography>
          </ListItem>
          <ListItem
            component={NavLink}
            to="/cv"
            activeClassName={classes.active}
          >
            <LibraryBooksIcon />
            <Typography component="span">My CV</Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default SideBar;
