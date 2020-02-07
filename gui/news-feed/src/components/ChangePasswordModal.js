import React, { Component } from "react";
import { withRouter, Switch } from "react-router";
import Posts from "./Posts";
import MainTabs from "./MainTabs";
import { Route } from "react-router-dom";
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
import CreatePost from "./CreatePost";
import {AddAPhotoRounded, CloseRounded, VisibilityOffRounded, VisibilityRounded} from "@material-ui/icons";
import {deletePost} from "../store/actioncreators/postActions";
import {connect} from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import InputAdornment from "@material-ui/core/InputAdornment";

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
        alignItems: "flex-end",
    },
    textInput: {
        margin: theme.spacing(1),
        width: "100%",
    },
});

class ChangePasswordModal extends Component {
    state = {
        password: "",
        passwordRepeat: "",
        showPassword: false,
        showPasswordRepeat: false,
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
                            <Typography> تغییر رمز </Typography>
                        </Box>
                        <Button classes={{root: classes.saveButton}}>
                            ذخیره
                        </Button>
                    </Box>
                </DialogTitle>
                <DialogContent className={classes.formWrapper}>
                    <Box className={classes.form}>
                        <FormControl className={classes.textInput} variant="filled" dir="ltr">
                            <InputLabel htmlFor="filled-password">رمز عبور</InputLabel>
                            <FilledInput
                                id="filled-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={this.handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowField("showPassword")}
                                            onMouseDown={this.handleMouseDownField}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityRounded /> : <VisibilityOffRounded />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className={classes.textInput} variant="filled" dir="ltr">
                            <InputLabel htmlFor="filled-password-repeat">تکرار رمز عبور</InputLabel>
                            <FilledInput
                                id="filled-password-repeat"
                                type={showPasswordRepeat ? 'text' : 'password'}
                                value={passwordRepeat}
                                onChange={this.handleChange('passwordRepeat')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowField("showPasswordRepeat")}
                                            onMouseDown={this.handleMouseDownField}
                                            edge="end"
                                        >
                                            {showPasswordRepeat ? <VisibilityRounded /> : <VisibilityOffRounded />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ChangePasswordModal));
