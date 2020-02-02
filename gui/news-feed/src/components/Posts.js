import React, { Component } from 'react';
import { Box } from "@material-ui/core";
import  { withStyles } from "@material-ui/core";
import Post from "./Post";
import {connect} from "react-redux";

const styles = theme => ({

});

class Posts extends Component {

    render() {
        const { classes, posts } = this.props;
        const postList = posts.map((post) => {
            return posts.length > 0 ? (
                <Post post={post} />
            ) : (
                <p>no post yet</p>
            )
        });
        return (
            <Box>
                { postList }
            </Box>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.post.posts,
    };
};

export default withStyles(styles)(connect(mapStateToProps, null)(Posts));
