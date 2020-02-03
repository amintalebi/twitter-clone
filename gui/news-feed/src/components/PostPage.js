import React, { Component } from 'react';
import { Box } from "@material-ui/core";
import  { withStyles } from "@material-ui/core";
import Post from "./Post";
import {connect} from "react-redux";
import {deletePost} from "../store/actioncreators/postActions";

const styles = theme => ({
    boxBetweenPostAndPosts: {
        height: 20,
        width: "100%",
        backgroundColor: theme.palette.tertiary.main,
    }
});

class PostPage extends Component {

    render() {
        const { classes, posts, post } = this.props;
        const postList = posts.map((post) => {
            return posts.length > 0 ? (
                <Post post={post} />
            ) : null
        });
        return (
            <Box>
                <Post post={post} />
                <Box className={classes.boxBetweenPostAndPosts}/>
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
        loadPostPagePosts: (id) => dispatch(deletePost(id)),
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PostPage));
