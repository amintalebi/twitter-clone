import React, { Component } from "react";
import './styles/RightSearchBar.css';

class RightSearchBar extends Component {
    render() {
        return (
            <aside className="RightSearchBar ">
                <div className="input-field">
                    <input  id="search" type="text" className="validate" />
                    <label className="active" htmlFor="search">Search</label>
                </div>
            </aside>
        );
    };
}
export default RightSearchBar;
