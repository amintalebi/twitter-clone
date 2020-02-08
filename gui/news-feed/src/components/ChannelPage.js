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
    styled, CardContent, Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import {
    KeyboardBackspaceRounded,
    MenuRounded,
    NotificationsNoneRounded,
    NotificationsRounded
} from "@material-ui/icons";
import {deletePost} from "../store/actioncreators/postActions";
import {connect} from "react-redux";
import rootReducer from "../store/reducers/rootReducer";
import ProfileTabs from "./ProfileTabs";
import ToggleIcon from "material-ui-toggle-icon";
import CreatePost from "./CreatePost";
import ChannelMoreOptionsModal from "./ChannelMoreOptionsModal";
import AccountsModal from "./AccountsModal";
import Accounts from "./Accounts";
import ChannelTabs from "./ChannelTabs";

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
    avatarWrapper: {
        // marginLeft: theme.spacing(2),
        // marginRight: theme.spacing(0),

    },
    avatar: {
        position: "relative",
        bottom: "calc(60px + 5px + 16px)",
        width: "120px",
        height: "120px",
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: "white",
        '@media only screen and (max-width: 600px)': {
            width: "calc(15vw + 30px)",
            height: "calc(15vw + 30px)",
            borderWidth: "calc(100vw / 120)",
            bottom: "calc((7.5vw + 15px) + (100vw / 120) + 16px)",
        },
    },
    headerAction: {
        '@media only screen and (max-width: 350px)': {
            position: "relative",
            top: 70,
            left: "45%",
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
    actionButtonOn: {
        borderRadius: 100,
        backgroundColor: theme.palette.primary.main,
        color: "white",
        "&:hover": {
            backgroundColor: theme.palette.error.dark,
        },
        boxSizing: "border-box",
        height: 35,
    },
    actionButtonOff: {
        borderRadius: 100,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme.palette.primary.main,
        boxSizing: "border-box",
        height: 35,
    },
    alertButtonOn: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        boxSizing: "border-box",
        height: 35,
        width: 35,
        padding: 1,
        marginLeft: theme.spacing(1),
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        }
    },
    alertButtonOff: {
        color: theme.palette.primary.main,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme.palette.primary.main,
        boxSizing: "border-box",
        height: 35,
        width: 35,
        padding: 1,
        marginLeft: theme.spacing(1),
    },
    following: {
        display: "flex",
        "&:hover": {
            textDecoration: "underline",
        }
    },
    followingNumber: {
        color: theme.palette.text.disabled,
        marginLeft: theme.spacing(.25),
        marginRight: theme.spacing(.5),
    },
});

class ProfilePage extends Component {
    state = {
        mine: true,
        admin: true,
        followed: true,
        notification: false,
        editModalOpen: false,
        accountsModal: false,
        rules: [],
    };
    handleCloseAccountsModal = (e) => {
        this.setState({
            accounts: false,
        })
    };
    handleOpenFollowingModal = (e) => {
        this.setState({
            accounts: false,
        })
    };
    handleOpenAdminsModal = (e) => {
        this.setState({
            accounts: false,
        })
    };
    handleCloseEditProfileModal = (e) => {
        this.setState({
            editModalOpen: false,
        })
    };
    handleEditProfileButtonClick = (e) => {
        this.setState({
            editModalOpen: true,
        })
    };
    handleFollowButtonClick = (e) => {
        this.setState({
            followed: !this.state.followed,
        })
    };
    handleNotificationButtonClick = (e) =>  {
        this.setState({
            notification: !this.state.notification,
        })
    };

    back = () => {
        this.props.history.goBack()
    };

    render() {
        const { classes } = this.props;
        const  { admin, mine, followed, notification, editModalOpen, rules } = this.state;

        return (
            <Box className={classes.root}>
                <Box  display="flex" justifyContent="flex-start" alignItems="center"  className={classes.backBar}>
                    <IconButton className={classes.closeIconButton} onClick={this.back}>
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
                        classes={{root: classes.cardHeaderRoot, avatar: classes.avatarWrapper, action: classes.headerAction}}
                        avatar={
                            <Avatar
                                classes={{root: classes.avatar}}
                                aria-label="recipe"
                                alt={ "" }
                                src={ "https://picsum.photos/300/300" }
                            />
                        }
                        action={
                            <Box>
                                {
                                    (!mine && followed) ? (
                                        <IconButton
                                            onClick={this.handleNotificationButtonClick}
                                            className={ notification ? classes.alertButtonOn : classes.alertButtonOff }
                                        >
                                            <ToggleIcon
                                                on={notification}
                                                onIcon={<NotificationsRounded />}
                                                offIcon={<NotificationsNoneRounded />}
                                            />
                                        </IconButton>
                                    ) : null
                                }
                                <Button
                                    color="primary"
                                    classes={{root: followed && !mine && !admin ? classes.actionButtonOn : classes.actionButtonOff}}
                                    onClick={
                                        mine ? (
                                            this.handleEditProfileButtonClick
                                        ) : (
                                            !admin ? this.handleFollowButtonClick : null
                                        )
                                    }
                                >
                                    {
                                        mine ? (
                                            "تنظیمات"
                                        ) : (
                                            followed ? "دنبال نکردن" : "دنبال کردن"
                                        )
                                    }
                                </Button>
                            </Box>
                        }
                    />
                    <CardContent>
                        <Box>
                            <Typography classes={{root: classes.titleNameTypo}}>
                                { "سر به داران" }
                            </Typography>
                            <Typography classes={{root: classes.titleIDTypo}}>
                                { " @" + "sarbed" }
                            </Typography>
                            <Typography classes={{root: classes.titleNameTypo}}>
                                { "سازنده: " + "علی"}
                            </Typography>
                            <Typography classes={{root: classes.titleIDTypo}}>
                                { " @" + "ali_j1" }
                            </Typography>
                            <Typography>
                                قوانین:
                                {
                                    rules.map((rule, index) =>
                                        <Typography>
                                            {index + ": " + rule}
                                        </Typography>
                                    )
                                }
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Typography classes={{root: classes.following}} onClick={this.handleOpenFollowingModal}>
                            <p className={classes.followingNumber}>
                                { 193 }
                            </p>
                            <p>دنبال ‌کنندگان</p>
                        </Typography>
                        <Typography classes={{root: classes.following}} onClick={this.handleOpenAdminsModal}>
                            <p className={classes.followingNumber}>
                                { 333 }
                            </p>
                            <p>مدیران کانال</p>
                        </Typography>
                    </CardActions>
                </Card>
                <ChannelTabs mine={true} admin={true} channelID={"213"} />
                <ChannelMoreOptionsModal open={editModalOpen} onClose={this.handleCloseEditProfileModal} />
                <AccountsModal  open={this.state.accountsModal} onClose={this.handleCloseAccountsModal()}/>
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
