import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import { Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Inside from "./components/Inside";
import ForgotPassword from "./components/ForgotPassword";

const styles = theme => ({
    root: {

    },
});

class App extends Component {


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/sign-in' component={ SignIn } />
                    <Route path='/sign-up' component={ SignUp } />
                    <Route path='/forgot-password' component={ ForgotPassword } />
                    <Route path='/' component={ Inside } />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default withStyles(styles)(App);
