import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import { Switch } from "react-router-dom";
import Blog from "./components/Blog";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path='/' component={Blog} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
