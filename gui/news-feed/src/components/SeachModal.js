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
    TextField, Paper, InputBase,
} from "@material-ui/core";
import {
    AddAPhotoRounded,
    CloseRounded,
    SearchRounded,
    VisibilityOffRounded,
    VisibilityRounded
} from "@material-ui/icons";
import {deletePost} from "../store/actioncreators/postActions";
import {connect} from "react-redux";
import LeftSideBarSearch from "./LeftSideBarSearch";
import Accounts from "./Accounts";

const styles = theme => ({
    paper: {
        borderRadius: 13,
        width: "auto",
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


    //copied from search page
    paperRoot: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: "100px",
        boxSizing: "border-box",
        backgroundColor: theme.palette.tertiary.main,
        height: 38,
        marginTop: theme.spacing(1),
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    searchIconButton: {
        padding: 10,
    },
    closeIconButton: {
        padding: theme.spacing(0),
        marginLeft: theme.spacing(1),
        color: "white",
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    searchResult: {
        maxHeight: "50vh",
        overflowY: "scroll",
    },
});

class SearchModal extends Component {
    state = {
        search: "",
    };

    searchHandler = (e) => {
        this.setState({
            search: e.target.value,
        });
    };
    searchCloseIconClickHandler = (e) => {
        this.setState({
            search: "",
        });
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
                            <Typography> جست و جو </Typography>
                        </Box>
                    </Box>
                    <Paper classes={{root: classes.paperRoot}} id="search-field-parent" elevation={0}>
                        <IconButton type="submit" className={classes.searchIconButton} disabled>
                            <SearchRounded />
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="جست‌و‌جو"
                            onInput={this.searchHandler}
                            value={this.state.search}
                        />
                        {this.state.search ? (
                            <IconButton className={classes.closeIconButton} onClick={this.searchCloseIconClickHandler}>
                                <CloseRounded fontSize="small" />
                            </IconButton>
                        ) : null}
                    </Paper>
                </DialogTitle>
                <DialogContent className={classes.formWrapper}>
                    {this.state.search ? (
                        <Paper elevation={1} className={classes.searchResult} id="infiniteScrollSmallSearchBar">
                            <Accounts scrollableTargetID={"infiniteScrollSmallSearchBar"}/>
                        </Paper>


                    ) : null}
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SearchModal));
