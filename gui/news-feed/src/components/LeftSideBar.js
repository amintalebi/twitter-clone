import React, { Component } from "react";
import { Link } from 'react-router-dom';
import LeftNavBar from "./LeftNavBar";

class LeftSideBar extends Component {
    render() {
        return (
            <aside className="LeftSideBar">
                <LeftNavBar />
            </aside>
        );
    };
}
export default LeftSideBar;
