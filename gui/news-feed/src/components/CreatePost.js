import React, { Component } from 'react';
import { connect } from "react-redux";
import { deletePost } from "../store/actioncreators/postActions";
import {
    Card,
    CardActionArea,
    CardActions,
    CardHeader,
    CardMedia,
    Avatar,
    Typography,
    CardContent,
    IconButton,
    Box
} from "@material-ui/core";
import  { withStyles } from "@material-ui/core";
import { MenuRounded } from "@material-ui/icons";

const styles = theme => ({
    root: {
        borderStyle: "solid",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: theme.palette.tertiary.main,
        borderRadius: 0,
        "&:hover": {
            backgroundColor: theme.palette.tertiary.light
        }
    },
    avatar: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(0),
    },
    title: {

    },
    subheader: {
        color: theme.palette.text.disabled,
        direction: "ltr",
        display: "flex",
        justifyContent: "flex-end",
        flexWrap: "no-wrap",
        alignItems: "space-between"
    },
    mediaRoot: {

    },
    img: {
        height: 220,
    }
});

class CreatePost extends Component {

    render() {
        const { classes, post } = this.props;
        return (
            <Card variant="outlined" classes={{root: classes.root}}>
                <CardHeader
                    classes={{avatar: classes.avatar, title: classes.title, subheader: classes.subheader}}
                    avatar={
                        <Avatar
                            aria-label="recipe"
                            alt={ post.owner.name.charAt(0) }
                            src={ post.owner.icon }
                        />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MenuRounded />
                        </IconButton>
                    }
                    title={
                        <Typography>
                            { post.owner.name }
                        </Typography>
                    }
                    subheader={
                        post.publishedDate + " @" + post.owner.id
                    }
                />
                <CardMedia
                    component={
                        post.media ? (
                            post.media.type
                        ) : (
                            "div"
                        )
                    }
                    classes={{root: classes.mediaRoot, img: classes.img}}
                    image={
                        post.media ? (
                            post.media.src
                        ) : (
                            "#"
                        )
                    }
                />
                <CardContent>
                    { post.content }
                </CardContent>
                <CardActions>
                    empty
                </CardActions>
            </Card>
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        deleteMyPost: (id) => dispatch(deletePost(id)),
    };
};

export default withStyles(styles)(connect(null, mapDispatchToProps)(CreatePost));
