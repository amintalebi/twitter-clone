import React, { Component } from 'react';
import { connect } from "react-redux";
import { deletePost } from "../store/actioncreators/postActions";
import {Card, CardActionArea, CardActions, CardHeader, CardMedia, Avatar, Typography, CardContent, IconButton} from "@material-ui/core";
import  { withStyles, useTheme } from "@material-ui/core";
import { MenuRounded } from "@material-ui/icons";

const styles = theme => ({
    avatar: {

    },
    media: {

    }
});

class Posts extends Component {

    render() {
        const posts = this.props.posts;
        const postList = posts.map((post) => {
            return posts.length > 0 ? (
                <Card>
                    <CardActionArea>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={this.props.classes.avatar}>
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MenuRounded />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            className={this.props.classes.media}
                            image="/static/images/cards/paella.jpg"
                            title="Paella dish"
                        />
                        <CardContent>
                            {"content"}
                        </CardContent>
                        <CardActions>

                        </CardActions>
                    </CardActionArea>
                </Card>
            ) : (
                <p>no post yet</p>
            )
        });
        return (
            <div className="Posts">
                { null }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.post.posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id)),
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Posts));
