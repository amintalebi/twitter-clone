import React, { Component } from "react";
import { withRouter, Switch } from "react-router";
import Posts from "./Posts";
import { Route } from "react-router-dom";

class Profile extends Component {
    render() {
        return (
            <div className='Profile'>
                <Route path='' component={Posts} />
                <Route path='/home/newest' component={Posts} />
                <Route path='/home/hottest' component={Posts} />
                <Route path='/home/participated' component={Posts} />
            </div>
        );
    }
}

export default withRouter(Profile);
