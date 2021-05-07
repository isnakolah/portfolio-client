import React from "react";
import { ListItem, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";

const SocialIcon = ({ name, to, icon }) => {
  return (
    <ListItem key={name} disableGutters>
      <a href={to} target="_blank" rel="noopener noreferrer">
        <IconButton aria-label={name} size="small">
          {icon}
        </IconButton>
      </a>
    </ListItem>
  );
};

SocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string,
  icon: PropTypes.node,
};

export default SocialIcon;
