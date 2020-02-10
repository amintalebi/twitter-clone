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
import {AddAPhotoRounded, CloseRounded} from "@material-ui/icons";
import {deletePost} from "../store/actioncreators/postActions";
import {connect} from "react-redux";

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
        overflowY: "scroll",
    },
    form: {
        margin: "0 auto",
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end",
    },
    backgroundImageWrapper: {
        top:0,
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 220,
    },
    backgroundImage: {
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        position: "absolute",
    },
    backgroundImageInput: {
        display: "none",
    },
    avatarImageWrapper: {
        position: "relative",
        bottom: "calc(2vw + 30px)",
        left: "1.5vw",
        width: "calc(3vw + 60px)",
        height: "calc(3vw + 60px)",
        borderRadius: "100%",
        border: "white solid .5vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarImage: {
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        height: "100%",
        borderRadius: "100%",
        position: "absolute",
        border: "none"
    },
    avatarImageInput: {
        display: "none",
    },
    textInput: {
        margin: "10px",
        width: "100%",
    },
});

class EditProfileModal extends Component {
    state = {
        backgroundImage: "",
        avatarImage: "",
        name: "",
        bio: "",
    };

    loadBackgroundImage = (e) => {
        let reader = new FileReader();
        reader.onload = () => {
            this.setState({
                backgroundImage: reader.result,
            });
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    loadAvatarImage = (e) => {
        let reader = new FileReader();
        reader.onload = () => {
            this.setState({
                avatarImage: reader.result,
            });
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    handleNameChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };
    handleBioChange = (e) => {
        this.setState({
            bio: e.target.value,
        });
    };
    render() {
        const { classes, open, onClose, account } = this.props;
        const { backgroundImage, avatarImage, name, bio } = this.state;
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
                            <Typography> تغییر پروفایل </Typography>
                        </Box>
                        <Button classes={{root: classes.saveButton}}>
                            ذخیره
                        </Button>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box className={classes.form}>
                        <Box className={classes.backgroundImageWrapper}>
                            <img alt={null} className={classes.backgroundImage} src={ backgroundImage } />
                            <input
                                onChange={this.loadBackgroundImage}
                                accept="image/*"
                                className={classes.backgroundImageInput}
                                id="button-background-image"
                                multiple
                                type="file"
                            />
                            <label htmlFor="button-background-image">
                                <IconButton component="span">
                                    <AddAPhotoRounded fontSize="small" />
                                </IconButton>
                            </label>
                            {
                                backgroundImage ? (
                                    <IconButton component="span" onClick={() => this.setState({backgroundImage: ""})}>
                                        <CloseRounded fontSize="small" />
                                    </IconButton>
                                ) : null
                            }
                        </Box>
                        <Box className={classes.avatarImageWrapper}>
                            <img alt={null} className={classes.avatarImage} src={ avatarImage }/>
                            <input
                                onChange={this.loadAvatarImage}
                                accept="image/*"
                                className={classes.avatarImageInput}
                                id="button-avatar-image"
                                multiple
                                type="file"
                            />
                            <label htmlFor="button-avatar-image">
                                <IconButton component="span">
                                    <AddAPhotoRounded fontSize="small" />
                                </IconButton>
                            </label>
                            {
                                avatarImage ? (
                                    <IconButton component="span" onClick={() => this.setState({avatarImage: ""})}>
                                        <CloseRounded fontSize="small" />
                                    </IconButton>
                                ) : null
                            }
                        </Box>
                        <TextField

                            value={name}
                            label="نام"
                            onChange={this.handleNameChange}
                            classes={{root: classes.textInput}}
                            variant="filled"
                        />
                        <TextField
                            label="معرفی نامه"
                            value={bio}
                            onChange={this.handleBioChange}
                            classes={{root: classes.textInput}}
                            variant="filled"
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(EditProfileModal));
