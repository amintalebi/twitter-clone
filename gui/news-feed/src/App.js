import React, {Component, Profiler} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import { Switch } from "react-router-dom";
import Main from './components/Main';
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Profile from "./components/Profile";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App row">
                    <div className="col l1"></div>
                    <div className="col s2 l2"><LeftSideBar /></div>
                    <div className="col s10 l6">
                            <Switch>
                                <Route path='/hossein' component={ Profile }/>
                                <Route path='/' component={ Main } />
                            </Switch>
                    </div>
                    <div className="col l2 hide-on-med-and-down"><RightSideBar /></div>
                    <div className="col l1"></div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
