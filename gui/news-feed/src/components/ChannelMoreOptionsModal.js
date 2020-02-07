import React, { Component } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
    withStyles,
    TextField,
} from "@material-ui/core";
import {AddAPhotoRounded, CloseRounded, VisibilityOffRounded, VisibilityRounded} from "@material-ui/icons";
import {deletePost} from "../store/actioncreators/postActions";
import {connect} from "react-redux";
import ChangePasswordModal from "./ChangePasswordModal";
import EditProfileModal from "./EditProfileModal";
import ChannelRulesModal from "./ChannelRulesModal";

const styles = theme => ({
    paper: {
        borderRadius: 13,
        width: 300,
    },
    title: {
        borderStyle: "solid",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: theme.palette.tertiary.main,
        boxSizing: "border-box",
    },
    closeButton: {
        padding: theme.spacing(1),
        marginLeft: theme.spacing(1),
        color: theme.palette.primary.main,
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        },
    },
    saveButton: {
        borderRadius: 100,
        color: "white",
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    formWrapper: {
        overflowY: "auto",
    },
    form: {
        margin: "0 auto",
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    button: {
        margin: theme.spacing(1, 0),
        width: "80%",
        borderRadius: 100,
        height: 40,
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        },
    }
});

class MoreOptionsModal extends Component {
    state = {
        changePasswordModalOpen: false,
        editProfileModalOpen: false,
        changeThemeModalOpen: false,
    };
    handleOpen = (prop) => (e) => {
        console.log(this.state)
        this.setState({
            [prop]: true,
        })
    };
    handleClose = (prop) => (e) => {
        this.setState({
            [prop]: false,
        })
    };
    handleClickShowField = (prop) => (e) => {
        this.setState({
            [prop]: !this.state[prop],
        });
    };
    handleMouseDownField = (e) => {
        e.preventDefault();
    };

    render() {
        const { classes, open, onClose, account } = this.props;
        const { changePasswordModalOpen, editProfileModalOpen, changeThemeModalOpen } = this.state;
        return (
            <Dialog open={open} onClose={onClose} classes={{paper: classes.paper}}>
                <DialogTitle children={Box} classes={{root: classes.title}} className={classes.title}>
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <IconButton className={classes.closeButton} onClick={onClose}>
                                <CloseRounded fontSize="small" />
                            </IconButton>
                            <Typography> بیشتر </Typography>
                        </Box>
                    </Box>
                </DialogTitle>
                <DialogContent className={classes.formWrapper}>
                    <Box className={classes.form}>

                        <Button
                            color="primary"
                            variant="outlined"
                            className={classes.button}
                            onClick={this.handleOpen("changePasswordModalOpen")}
                        >
                            تغییر قواننین
                        </Button>
                        <ChannelRulesModal
                            open={changePasswordModalOpen}
                            onClose={this.handleClose("changePasswordModalOpen")}
                        />

                        <Button
                            color="primary"
                            variant="outlined"
                            className={classes.button}
                            onClick={this.handleOpen("editProfileModalOpen")}
                        >
                            تغییر پروفایل
                        </Button>
                        <EditProfileModal
                            open={editProfileModalOpen}
                            onClose={this.handleClose("editProfileModalOpen")}
                        />

                    </Box>
                </DialogContent>
            </Dialog>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        account: state.account.myAccount,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPostPagePosts: (id) => dispatch(deletePost(id)),
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MoreOptionsModal));
