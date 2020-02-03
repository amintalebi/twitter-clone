import React, { Component } from "react";
import { withRouter, Switch } from "react-router";
import Posts from "./Posts";
import MainTabs from "./MainTabs";
import { Route } from "react-router-dom";
import {Box, withStyles} from "@material-ui/core";
import CreatePost from "./CreatePost";

const styles = theme => ({
    root: {

    }
});

class Main extends Component {
    render() {
        const { classes } = this.props;
        return (
          <Box className={classes.root}>
              <MainTabs/>
              <CreatePost />
              <Route path='/home/following' component={Posts} />
              <Route path='/home/newest' component={Posts} />
              <Route path='/home/hottest' component={Posts} />
              <Route path='/home/participated' component={Posts} />
          </Box>
        );
    }
}

export default withStyles(styles)(withRouter(Main));
