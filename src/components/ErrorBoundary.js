import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Grid, Typography, Box } from "@material-ui/core";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
          component="section"
        >
          <Typography variant="h5">
            OOPS!! Something went awfully wrong. You may need to refresh the
            page.
          </Typography>
          <Button
            component={Box}
            variant="outlined"
            onClick={() => {
              window.location.reload();
            }}
            mt="2rem"
          >
            Reload
          </Button>
        </Grid>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
};
