import React, { Component } from "react";
import { Link } from 'react-router-dom';
import LeftSideBarSearch from "./LeftSideBarSearch";

class LeftSideBar extends Component {
    render() {
        return (
            <aside className="LeftSideBar">
                <LeftSideBarSearch/>
            </aside>
        );
    };
}
export default LeftSideBar;
