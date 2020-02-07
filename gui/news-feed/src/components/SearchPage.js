import React, {Component} from "react";
import {Paper, IconButton, InputBase, Hidden, Box} from "@material-ui/core";
import { CloseRounded, SearchRounded  } from "@material-ui/icons"
import { withStyles, } from "@material-ui/core/styles";
import Posts from "./Posts";
import {deletePost} from "../store/actioncreators/postActions";
import {connect} from "react-redux";

const styles = theme => ({
    root: {

    },
    searchRoot: {
        position: "fixed",
        top: 0,
        backgroundColor: "white",
        height: 48,
        zIndex: 2,
        borderStyle: "solid",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: theme.palette.tertiary.main,
        boxSizing: "border-box",
        padding: "0 10px",
        '@media only screen and (max-width: 600px)': {
            width: "calc(100vw - 68px - 2px)",
        },
        '@media only screen and (min-width: 600px) and (max-width: 988px)': {
            width: "calc(100vw - 88px - 2px)",
            maxWidth: 598,
        },
        '@media only screen and (min-width: 988px)': {
            width: 598,
        },
    },
    distanceProviderRoot: {
        height: 48,
    },
    paperRoot: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: "100px",
        boxSizing: "border-box",
        backgroundColor: theme.palette.tertiary.main,
        height: 38,
        marginTop: theme.spacing(1),
        // '@media only screen and (min-width: 988px) and (max-width: 1078px)': {
        //     width: 290,
        // },
        // '@media only screen and (min-width: 1078px)': {
        //     width: 350,
        // },
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
});

class SearchPageSearchField extends Component {
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
        const { classes } = this.props;
        const  { state } = this;
        return (
            <Box className={classes.root}>
                <Box className={classes.searchRoot}>
                    <Paper classes={{root: classes.paperRoot}} id="search-field-parent" elevation={0}>
                        <IconButton type="submit" className={classes.searchIconButton} disabled>
                            <SearchRounded />
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="کاوش در پست ها"
                            onInput={this.searchHandler}
                            value={state.search}
                        />
                        {state.search ? (
                            <IconButton className={classes.closeIconButton} onClick={this.searchCloseIconClickHandler}>
                                <CloseRounded fontSize="small" />
                            </IconButton>
                        ) : null}
                    </Paper>
                </Box>
                <Box className={classes.distanceProviderRoot}/>
                {state.search ? (
                    <Posts />
                ) : null}
            </Box>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPostPagePosts: (id) => dispatch(deletePost(id)),
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SearchPageSearchField));
