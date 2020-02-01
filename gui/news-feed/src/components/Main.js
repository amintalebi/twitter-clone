import React, { Component } from "react";
import { withRouter, Switch } from "react-router";
import Posts from "./Posts";
import MainTabs from "./MainTabs";
import { Route } from "react-router-dom";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
});

class Main extends Component {
    render() {
        return (
          <div>
              <MainTabs/>
              <Route path='/home/following' component={Posts} />
              <Route path='/home/newest' component={Posts} />
              <Route path='/home/hottest' component={Posts} />
              <Route path='/home/participated' component={Posts} />
          </div>
        );
    }
}

export default withStyles(styles)(withRouter(Main));
