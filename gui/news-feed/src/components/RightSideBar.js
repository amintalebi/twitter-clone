import React, { Component } from "react";
import RightSearchBar from "./RightSearchBar";

class RightSideBar extends Component {
    render() {
        return (
            <aside className="RightSideBar ">
                <RightSearchBar />
            </aside>
        );
    };
}
export default RightSideBar;
