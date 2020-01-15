import React, {Component} from "react";
import {Link, Switch, BrowserRouter, withRouter} from 'react-router-dom';
import M from 'materialize-css';
import './styles/Tabs.css';


class Tabs extends Component {
    componentDidMount() {
        const elem = document.querySelector('.tabs');
        M.Tabs.init(elem, {duration: 400});
    }

    render() {
        return (
            <BrowserRouter>
                <div className="Tabs">
                    <div>
                        <ul className="tabs row z-depth-1 center-align hide-on-med-and-down pink lighten-2">
                            <li className="tab col s3">
                                <Link className="active white-text" to='/home/following' target="_self">
                                    following
                                </Link>
                            </li>
                            <li className="tab col s3">
                                <Link className="active white-text" to='/home/newest' target="_self">
                                    newest
                                </Link>
                            </li>
                            <li className="tab col s3">
                                <Link className="active white-text" to='/home/hottest' target="_self">
                                    hottest
                                </Link>
                            </li>
                            <li className="tab col s3">
                                <Link className="active white-text" to='/home/participated' target="_self">
                                    participated
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="tabs row z-depth-1 center-align hide-on-large-only pink lighten-2">
                            <li className="tab col s3 waves-effect waves-light">
                                <Link className="active" to='/home/following' target="_self">
                                    <i className="material-icons center white-text">directions_run</i>
                                </Link>
                            </li>
                            <li className="tab col s3 waves-effect waves-light">
                                <Link className="active" to='/home/newest' target="_self">
                                    <i className="material-icons center white-text">fiber_new</i>
                                </Link>
                            </li>
                            <li className="tab col s3 waves-effect waves-light">
                                <Link className="active" to='/home/hottest' target="_self">
                                    <i className="material-icons center white-text">whatshot</i>
                                </Link>
                            </li>
                            <li className="tab col s3 waves-effect waves-light">
                                <Link className="active" to='/home/participated' target="_self">
                                    <i className="material-icons center white-text">pan_tool</i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default withRouter(Tabs);
