import React, { Component } from "react";
import { withRouter, Switch } from "react-router";
import Posts from "./Posts";
import Tabs from "./Tabs";
import { Route } from "react-router-dom";

class Main extends Component {
    render() {
        return (
          <div className='Main'>
              <Tabs/>
              <Route path='/home/following' component={Posts} />
              <Route path='/home/newest' component={Posts} />
              <Route path='/home/hottest' component={Posts} />
              <Route path='/home/participated' component={Posts} />
          </div>
        );
    }
}

export default withRouter(Main);
