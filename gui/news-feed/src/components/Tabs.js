import React, {Component} from "react";
import { Link, withRouter } from 'react-router-dom';
import M from 'materialize-css';
import './styles/Tabs.css'


class Tabs extends Component{
    componentDidMount() {
        const elem = document.querySelector('.tabs');
        M.Tabs.init(elem, { duration: 400});
    }

    render() {
        // this.props.match;
        console.log(this.props);
        return (
            <div className="Tabs">
                <div>
                    <ul className="tabs row z-depth-1 center-align hide-on-med-and-down pink lighten-2">
                        <li className="tab col s3"><Link className="active white-text" to='/home/following'>following</Link></li>
                        <li className="tab col s3"><Link className="active white-text" to='/home/newest'>newest</Link></li>
                        <li className="tab col s3"><Link className="active white-text" to='/home/hottest'>hottest</Link></li>
                        <li className="tab col s3"><Link className="active white-text" to='/home/participated'>participated</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className="tabs row z-depth-1 center-align hide-on-large-only pink lighten-2">
                        <li className="tab col s3 waves-effect waves-light">
                            <Link className="active" to='/home/following'>
                                <i className="material-icons center white-text">directions_run</i>
                            </Link>
                        </li>
                        <li className="tab col s3 waves-effect waves-light">
                            <Link className="active" to='/home/newest'>
                                <i className="material-icons center white-text">fiber_new</i>
                            </Link>
                        </li>
                        <li className="tab col s3 waves-effect waves-light">
                            <Link className="active" to='/home/hottest'>
                                <i className="material-icons center white-text">whatshot</i>
                            </Link>
                        </li>
                        <li className="tab col s3 waves-effect waves-light">
                            <Link className="active" to='/home/participated'>
                                <i className="material-icons center white-text">pan_tool</i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default withRouter(Tabs);

