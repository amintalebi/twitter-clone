import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import { Switch } from "react-router-dom";
import Main from './components/Main';
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App row">
                    <div className="col s2 l2"><LeftSideBar /></div>
                    <div className="col s10 l8">
                            <Switch>
                                <Route path='/home' component={ Main } />
                            </Switch>
                    </div>
                    <div className="col l2 hide-on-med-and-down"><RightSideBar /></div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
