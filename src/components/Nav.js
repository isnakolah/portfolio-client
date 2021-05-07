import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink, useHistory } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  List,
  Drawer,
  Hidden,
  ListItem,
  ListItemText,
  CardMedia,
  Typography,
  CardContent,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

import profileImage from "../assets/images/profile-photo.jpg";

import { socialDetails, primaryLinks, secondaryLinks } from "../utils/constants";
import SocialIcon from "./SocialIcon";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "uppercase",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#910d0d78",
    color: "#d9d7da80",
  },
  card: {
    marginTop: 40,
    cursor: "pointer",
    boxShadow: "none",
    color: "white",
    backgroundColor: "#ce5c5c00",
    "& h4": {
      fontSize: 20,
      letterSpacing: "0.1em",
    },
    "& h5": {
      fontSize: 16,
      fontWeight: "300",
    },
  },
  cardMedia: {
    width: 152,
    height: 152,
    borderRadius: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    opacity: "1",
  },
  cardContent: {
    textAlign: "center",
  },
  sideNav: {
    paddingLeft: "1rem",
    "& li": {
      paddingBottom: 0,
      paddingTop: 0,
    },
    "& a": {
      textDecoration: "none",
      color: "inherit",
      "& .MuiTypography-body1": {
        fontSize: 13,
        "&:hover": {
          color: "white",
        },
      },
    },
  },
  footer: {
    marginLeft: "1rem",
    "& p": {
      fontSize: "11px",
    },
  },
}));

const NavDrawer = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleProfileClick = () => {
    history.push("/");
  };

  const navLinks = (items) => {
    return (
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <NavLink to={item.to}>
              <ListItemText primary={item.text} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    );
  };

  const getSocialMediaIcon = (socialMediaDetail) => {
    return (
      <Grid item xs={2}>
        <SocialIcon {...socialMediaDetail} />
      </Grid>
    );
  };

  return (
    <Box className={classes.root}>
      <Box className={toolbar} />
      <Grid container direction="column">
        <Grid item>
          <Card className={classes.card} onClick={handleProfileClick}>
            <CardMedia
              component="img"
              image={profileImage}
              title="Profile Image"
              alt="Profile Image"
              className={classes.cardMedia}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h4">
                <strong>Daniel Nakolah</strong>
              </Typography>
              <Typography variant="h5">Full-Stack Software Engineer</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.sideNav}
          spacing={2}
          xs={10}
        >
          {/* Primary links for /portfolio, /my-offer, contact-me */}
          <Grid item>{navLinks(primaryLinks)}</Grid>
          {/* Secondary links for /my-cv, /selected-tech-talks, /blogs */}
          <Grid item>{navLinks(secondaryLinks)}</Grid>
          <Grid item className={classes.footer} container direction="column">
            <Grid item>
              <Typography paragraph>get in touch</Typography>
            </Grid>
            <Grid item container xs={7}>
              {/* SocialMedia Contacts */}
              {socialDetails.map((detail) => getSocialMediaIcon(detail))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const Nav = ({ window }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.paper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <NavDrawer />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <NavDrawer />
        </Drawer>
      </Hidden>
    </nav>
  );
};

Nav.propTypes = {
  window: PropTypes.func,
};

export default Nav;
