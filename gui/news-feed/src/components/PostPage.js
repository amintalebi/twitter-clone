import React, { Component } from 'react';
import { Box } from "@material-ui/core";
import  { withStyles } from "@material-ui/core";
import Post from "./Post";
import {connect} from "react-redux";
import {deleteMyPost} from "../store/actioncreators/postActions";

const styles = theme => ({

});

class PostPage extends Component {

    render() {
        const { classes, posts, post } = this.props;
        const postList = posts.map((post) => {
            return posts.length > 0 ? (
                <Post post={post} />
            ) : (
                <p>no post yet</p>
            )
        });
        return (
            <Box>
                <Post />
                { postList }
            </Box>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.post.post,
        posts: state.post.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPostPagePosts: (id) => dispatch(deleteMyPost(id)),
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PostPage));
