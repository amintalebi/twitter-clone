import React, { Component } from "react";
import { withRouter, Switch } from "react-router";
import Posts from "./Posts";
import MainTabs from "./MainTabs";
import { Route } from "react-router-dom";
import {
    Box,
    Card,
    IconButton,
    Typography,
    CardMedia,
    CardHeader,
    Avatar,
    CardActions,
    Fab,
    styled
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import {KeyboardBackspaceRounded, MenuRounded} from "@material-ui/icons";
import {deletePost} from "../store/actioncreators/postActions";
import {connect} from "react-redux";
import rootReducer from "../store/reducers/rootReducer";
import ProfileTabs from "./ProfileTabs";

const styles = theme => ({
    root: {

    },
    backBar: {
        position: "sticky",
        top: 0,
        width: "100%",
        backgroundColor: "white",
        height: 48,
        zIndex: 2,
        borderStyle: "solid",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: theme.palette.tertiary.main,
        boxSizing: "border-box",
        padding: "0 10px",
        direction: "ltr",
        "&>": {
            direction: "rtl",
        }
    },
    closeIconButton: {
        padding: theme.spacing(1),
        marginRight: theme.spacing(1),
        color: theme.palette.primary.main,
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        },
    },
    nameTypo: {
        fontWeight: "bold",
    },
    numberOfPostsTypo: {
        color: theme.palette.tertiary.contrastText,
        fontSize: 13,
    },
    profileCardRoot: {
        borderStyle: "solid",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: theme.palette.tertiary.main,
        borderRadius: 0,
    },
    backgroundImage: {
        height: 220,
    },
    avatar: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(0),

    },
    avatarInner: {
        position: "relative",
        bottom: theme.spacing(10),
        width: theme.spacing(14),
        height: theme.spacing(14),
        borderStyle: "solid",
        borderWidth: theme.spacing(0.6),
        borderColor: "white",
        '@media only screen and (min-width: 388px) and (max-width: 600px)': {
            width: "calc((100vw - 68px) / 9 + 40px)",
            height: "calc((100vw - 68px) / 9 + 40px)",
            bottom: "70px",
        },
        '@media only screen and (max-width: 388px)': {
            width: "calc((100vw - 68px) / 9 + 40px)",
            height: "calc((100vw - 68px) / 9 + 40px)",
            bottom: "100px",
        },
    },
    title: {
        position: "relative",
        left: theme.spacing(17),
        top: theme.spacing(6),
        '@media only screen and (max-width: 600px)': {
            left: "calc(110px - 60px + 10vw)",
        },
    },
    titleNameTypo: {
        fontWeight: "bold",
    },
    titleIDTypo: {
        color: theme.palette.text.disabled,
        direction: "ltr",
        display: "flex",
        justifyContent: "flex-end",
        flexWrap: "no-wrap",
        alignItems: "space-between"
    },
    subheader: {
        // position: "relative",
        // right: theme.spacing(14),
        // top: theme.spacing(3),
        direction: "ltr",
        color: theme.palette.primary.contrastText,
    },
    items: { //todo more style for focus
        position: "relative",
        top: 4,
        boxShadow: "none",
        backgroundColor: "transparent",
        outline: "none",
        fontSize: 19,
        height: 50,
        borderRadius: 100,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
        },
        "&:focus": {
            boxShadow: "none",
        },
        boxSizing: "border-box",
        border: "1px solid",
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.dark,
        '@media only screen and (max-width: 350px)': {
            left: "calc(245px - 70vw)",
        },
    },
    extendedText: {
        margin: 0,
        marginLeft: theme.spacing(0),
        padding: 0,
        marginRight: theme.spacing(0),
        fontSizing: 15,
    },
    following: {
        display: "flex",
        "&:hover": {
            textDecoration: "underline",
        }
    },
    followingNumber: {
        color: theme.palette.text.disabled,
        marginLeft: theme.spacing(.5),
        marginRight: theme.spacing(1),
    },
});

class ProfilePage extends Component {


    render() {
        const { classes } = this.props;
        const  { mine, followed } = { min: true, followed: false };
        const onEditProfileButtonClick = (e) => {

        };
        const onFollowButtonClick = (e) => {

        };
        return (
            <Box className={classes.root}>
                <Box  display="flex" justifyContent="flex-start" alignItems="center"  className={classes.backBar}>
                    <IconButton className={classes.closeIconButton} onClick={this.searchCloseIconClickHandler}>
                        <KeyboardBackspaceRounded fontSize="medium" />
                    </IconButton>
                    <Box>
                        <Typography classes={{root: classes.nameTypo}}>
                            { "علی" }
                        </Typography>
                        <Typography classes={{root: classes.numberOfPostsTypo}} dir="rtl">
                            { 10 + " پست" }
                        </Typography>
                    </Box>
                </Box>
                <Card variant="outlined" classes={{root: classes.profileCardRoot}}>
                    <CardMedia
                        component="img"
                        image={"https://picsum.photos/600/300"}
                        classes={{root: classes.backgroundImage}}
                    />
                    <CardHeader
                        classes={{avatar: classes.avatar, title: classes.title, subheader: classes.subheader}}
                        avatar={
                            <Avatar
                                classes={{root: classes.avatarInner}}
                                aria-label="recipe"
                                alt={ "" }
                                src={ "https://picsum.photos/300/300" }
                            />
                        }
                        action={
                            <Box
                                 onClick={
                                     mine ? (
                                         onEditProfileButtonClick
                                     ) : (
                                         onFollowButtonClick
                                     )
                                 }
                            >
                                <Fab size="medium" variant="extended" color="primary" classes={{root: classes.items}}>
                                    <Typography classes={{root: classes.extendedText}}>
                                        {
                                            mine ? (
                                                "تغییر پروفایل"
                                            ) : (
                                                followed ? "حذف از دنبال شده‌ها" : "دنبال کردن"
                                            )
                                        }
                                    </Typography>
                                </Fab>
                            </Box>
                        }
                        title={
                            <Box>
                                <Typography classes={{root: classes.titleNameTypo}}>
                                    { "علی" }
                                </Typography>
                                <Typography classes={{root: classes.titleIDTypo}}>
                                    { " @" + "ali_j1" }
                                </Typography>
                            </Box>

                        }
                        subheader={
                            "چه خبر؟ خبری نیست! نمیدونم شایدم باشه"
                        }
                    />
                    <CardActions>
                        <Typography classes={{root: classes.following}}>
                            <p className={classes.followingNumber}>
                                { 193 }
                            </p>
                            <p>دنبال کننده</p>
                        </Typography>
                        <Typography classes={{root: classes.following}}>
                            <p className={classes.followingNumber}>
                                { 3333 }
                            </p>
                            <p>دنبال شونده</p>
                        </Typography>
                    </CardActions>
                </Card>
                <ProfileTabs/>
                <Posts />
            </Box>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.post.posts,
        account: state.account.myAccount,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPostPagePosts: (id) => dispatch(deletePost(id)),
    };
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage)));
