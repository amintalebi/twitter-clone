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
import {
    DeleteForeverRounded,
    EditRounded, ExpandMoreRounded,
    LinkRounded,
    MenuRounded,
    ModeCommentOutlined, MoreHorizRounded,
    MoreVertRounded,
    ThumbDownRounded,
    ThumbUpRounded
} from "@material-ui/icons";
import {smallSwal} from "./Swals";
import {withRouter} from "react-router";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import CreatePostModal from "./CreatePostModal";

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
    },
    cardActions: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    boxButtonWithNumberWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "&:hover": {
            color: theme.palette.primary.main,
        },
        "&:hover > .MuiIconButton-root": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        }
    },
    iconButton: {
        "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        }
    },
    speedDialWrapper: {
        height: 56,
        overflow: "visible",
    },
    speedDialIcon: {
        backgroundColor: "transparent",
        boxShadow: "none",
        "&:hover": {
            boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
            backgroundColor: theme.palette.primary.light,
        }
    },
});

class Post extends Component {
    state = {
        upVotes: 10,
        downVotes: 23,
        comments: 13,
        upVoted: false,
        downVoted: false,
        moreOptionsForOwner: false,
        editModalOpen: false,
        commentModalOpen: false,
    };
    setCommentModalOpen = (value) => (e) => {
        this.setState({
            commentModalOpen: value,
        })
    };
    setEditModalOpen = (value) => (e) => {
        this.setState({
            editModalOpen: value,
        })
    };
    setMoreOptionsForOwner = (value) => (e) => {
        this.setState({
            moreOptionsForOwner: value,
        })
    };
    upVote = (e) => {
        if (!this.state.upVoted && !this.state.downVoted) {
            this.setState({
                upVotes: this.state.upVotes + 1,
                upVoted: true,
            })
        } else if (!this.state.upVoted) {
            this.setState({
                upVotes: this.state.upVotes + 1,
                downVotes: this.state.downVotes - 1,
                upVoted: true,
                downVoted: false,
            })
        }
    };

    downVote = (e) => {
        if (!this.state.upVoted && !this.state.downVoted) {
            this.setState({
                upVotes: this.state.upVotes + 1,
                downVoted: true,
            })
        } else if (!this.state.downVoted) {
            this.setState({
                upVotes: this.state.upVotes - 1,
                downVotes: this.state.downVotes + 1,
                upVoted: false,
                downVoted: true,
            })
        }
    };

    copyLink = (e) => {
        let copyText = document.createElement("input");
        let root = document.getElementById("root");
        root.appendChild(copyText);
        copyText.value = "http://localhost:3000/post/" + this.props.post.id;
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        copyText.remove();
        smallSwal("success", "لینک کپی شد")
    };

    render() {
        const { classes, post } = this.props;

        const actions = [
            { icon: <EditRounded onClick={this.setEditModalOpen(true)}/>, name: 'تغییر' },
            { icon: <DeleteForeverRounded />, name: 'حذف' },
        ];

        const mine = false;

        return (
            <Card variant="outlined" classes={{root: classes.root}}>
                <CardHeader
                    classes={{avatar: classes.avatar, title: classes.title, subheader: classes.subheader}}
                    avatar={
                        <Avatar
                            onClick={() => this.props.history.push("/profile/3")}
                            aria-label="recipe"
                            alt={ post.owner.name.charAt(0) }
                            src={ post.owner.icon }
                        />
                    }
                    action={
                        <Box className={classes.speedDialWrapper}>
                            <SpeedDial
                                classes={{fab: classes.speedDialIcon}}
                                ariaLabel="SpeedDial openIcon example"
                                hidden={mine}
                                icon={<MoreVertRounded />}
                                onClose={this.setMoreOptionsForOwner(false)}
                                onOpen={this.setMoreOptionsForOwner(true)}
                                open={this.state.moreOptionsForOwner}
                                direction="down"
                            >
                                {actions.map(action => (
                                    <SpeedDialAction
                                        key={action.name}
                                        icon={action.icon}
                                        tooltipTitle={action.name}
                                        onClick={this.setMoreOptionsForOwner(false)}
                                    />
                                ))}
                            </SpeedDial>
                        </Box>
                    }
                    title={
                        <Typography
                            onClick={() => this.props.history.push("/profile/3")}
                        >
                            { post.owner.name }
                        </Typography>
                    }
                    subheader={
                        <Typography
                            onClick={() => this.props.history.push("/profile/3")}
                        >
                            {post.publishedDate + " @" + post.owner.id}
                        </Typography>
                    }
                />
                <CardContent
                    onClick={() => this.props.history.push("/post/4")}
                >
                    { post.content }
                </CardContent>
                <CardMedia
                    onClick={() => this.props.history.push("/post/4")}
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
                <CardActions className={classes.cardActions}>
                    <Box className={classes.boxButtonWithNumberWrapper} onClick={this.upVote}>
                        <Typography>{this.state.upVotes}</Typography>
                        <IconButton>
                            <ThumbUpRounded fontSize="small"/>
                        </IconButton>
                    </Box>
                    <Box className={classes.boxButtonWithNumberWrapper} onClick={this.downVote}>
                        <Typography>{this.state.downVotes}</Typography>
                        <IconButton>
                            <ThumbDownRounded fontSize="small"/>
                        </IconButton>
                    </Box>
                    <Box className={classes.boxButtonWithNumberWrapper} onClick={this.setCommentModalOpen(true)}>
                        <Typography>{33}</Typography>
                        <IconButton>
                            <ModeCommentOutlined fontSize="small"/>
                        </IconButton>
                    </Box>
                    <IconButton className={classes.iconButton} onClick={this.copyLink}>
                        <LinkRounded fontSize="small"/>
                    </IconButton>
                </CardActions>
                <CreatePostModal open={this.state.commentModalOpen} onClose={this.setCommentModalOpen(false)} />
                <CreatePostModal default={post} open={this.state.editModalOpen} onClose={this.setEditModalOpen(false)} />
            </Card>
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        deleteMyPost: (id) => dispatch(deletePost(id)),
    };
};

export default withStyles(styles)(connect(null, mapDispatchToProps)(withRouter(Post)));
