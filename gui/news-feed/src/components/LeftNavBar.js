import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './styles/LeftNavBar.css';
import CreatePostModal from "./CreatePostModal";

class LeftNavBar extends Component {
    state = {
        showCreatePostModal: false,
    };

    openCreatePostModal = () => {
        this.setState({
            showCreatePostModal: true
        })
    };

    closeCreatePostModal = () => {
        this.setState({
            showCreatePostModal: false
        })
    };

    render() {
        return (
            <div className="LeftNavBar">
                <div className="hide-on-med-and-down">
                    <Link to="#" className="btn-flat center white pink-text text-lighten-2 waves-effect waves-block">
                        <i className="material-icons">streetview</i>
                    </Link>
                    <Link to="#" className="btn white pink-text text-lighten-2 waves-effect waves-block">
                        <i className="material-icons left">home</i>
                        <span className="left">Home</span>
                    </Link>
                    <Link to="#" className="btn white pink-text text-lighten-2 waves-effect waves-block">
                        <i className="material-icons left">search</i>
                        <span className="left">Explore</span>
                    </Link>
                    <Link to="#" className="btn white pink-text text-lighten-2 waves-effect waves-block">
                        <i className="material-icons left">notifications</i>
                        <span className="left">Notifications</span>
                    </Link>
                    <Link to="#" className="btn white pink-text text-lighten-2 waves-effect waves-block">
                        <i className="material-icons left">email</i>
                        <span className="left">Message</span>
                    </Link>
                    <Link to="#" className="btn white pink-text text-lighten-2 waves-effect waves-block">
                        <i className="material-icons left">bookmark</i>
                        <span className="left">Bookmarks</span>
                    </Link>
                    <Link to="#" className="btn white pink-text text-lighten-2 waves-effect waves-block">
                        <i className="material-icons left">format_list_bulleted</i>
                        <span className="left">List</span>
                    </Link>
                    <Link to="#" className="btn white pink-text text-lighten-2 waves-effect waves-block">
                        <i className="material-icons left">account_circle</i>
                        <span className="left">Profile</span>
                    </Link>
                    <Link to="#" className="btn white pink-text text-lighten-2 waves-effect waves-block">
                        <i className="material-icons left">more_horiz</i>
                        <span className="left">More</span>
                    </Link>
                    <Link to="#" className="btn white pink-text text-lighten-2 waves-effect waves-block">
                        <i className="material-icons left">create</i>
                        <span className="left">Tweet</span>
                    </Link>
                </div>
                <div className="hide-on-large-only">
                    <Link to="#" className="btn-floating transparent waves-effect waves-input-wrapper">
                        <i className="material-icons pink-text text-lighten-2">streetview</i>
                    </Link>
                    <Link to="#" className="btn-floating transparent waves-effect">
                        <i className="material-icons pink-text text-lighten-2">home</i>
                    </Link>
                    <Link to="#" className="btn-floating transparent waves-effect">
                        <i className="material-icons pink-text text-lighten-2">search</i>
                    </Link>
                    <Link to="#" className="btn-floating transparent waves-effect">
                        <i className="material-icons pink-text text-lighten-2">notifications</i>
                    </Link>
                    <Link to="#" className="btn-floating transparent waves-effect">
                        <i className="material-icons pink-text text-lighten-2">email</i>
                    </Link>
                    <Link to="#" className="btn-floating transparent waves-effect">
                        <i className="material-icons pink-text text-lighten-2">bookmark</i>
                    </Link>
                    <Link to="#" className="btn-floating transparent waves-effect">
                        <i className="material-icons pink-text text-lighten-2">format_list_bulleted</i>
                    </Link>
                    <Link to="#" className="btn-floating transparent waves-effect">
                        <i className="material-icons pink-text text-lighten-2">account_circle</i>
                    </Link>
                    <Link to="#" className="btn-floating transparent waves-effect">
                        <i className="material-icons pink-text text-lighten-2">more_horiz</i>
                    </Link>
                    <Link to="#" className="btn-floating transparent waves-effect">
                        <i className="material-icons pink-text text-lighten-2">create</i>
                    </Link>
                </div>
            </div>
        );
    };
}
export default LeftNavBar;
