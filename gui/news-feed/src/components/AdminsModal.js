import React, { Component } from "react";
import {
    Box,
    Button,
    CardActions,
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
import Accounts from "./Accounts";
import Admins from "./Admins";
import SeachModal from "./SeachModal";

const styles = theme => ({
    paper: {
        borderRadius: 13,
        width: 600,
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
        "&> *": {
            width: "100%",
        }
    },
    actionButtonOff: {
        borderRadius: 100,
        backgroundColor: theme.palette.primary.main,
        color: "white",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
        boxSizing: "border-box",
        height: 35,
    },
});

class AdminsModal extends Component {
    state = {
        type: this.props.type, // "followers" "followings -> follow ban" "channelMembers -> delete and ban" "channelAdmins -> add delete access"
        addAdminModal: false,
    };

    handleChange = (prop) => (e) => {
        this.setState({
            [prop]: e.target.value,
        });
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
        const { password, passwordRepeat, showPassword, showPasswordRepeat } = this.state;
        return (
            <Dialog open={open} onClose={onClose} classes={{paper: classes.paper}}>
                <DialogTitle children={Box} classes={{root: classes.title}} className={classes.title}>
                    <Box
                        display="flex"
                        justifyContent="space-between"
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
                            <Typography> ادمین ها </Typography>
                            <Button
                                color="primary"
                                classes={{root: classes.actionButtonOff}}
                                onClick={this.handleClickShowField("addAdminModal")}
                            >
                                اضافه کردن ادمین
                            </Button>
                        </Box>
                    </Box>
                </DialogTitle>
                <DialogContent className={classes.formWrapper}>
                    <Box className={classes.form} id="scrollableWrapperForAccounts">
                        <Admins scrollableTargetID="scrollableWrapperForAccounts"/>
                    </Box>
                </DialogContent>
                <SeachModal open={this.state.addAdminModal} onClose={this.handleClickShowField("addAdminModal")}/>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AdminsModal));
