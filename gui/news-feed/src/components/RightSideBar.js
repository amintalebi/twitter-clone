import React, { Component } from "react";
import RightNavBar from "./RightNavBar";

class RightSideBar extends Component {
    render() {
        return (
            <aside className="RightSideBar ">
                <RightNavBar />
            </aside>
        );
    };
}
export default RightSideBar;
