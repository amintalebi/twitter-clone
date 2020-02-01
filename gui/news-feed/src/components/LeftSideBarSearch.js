import React, {Component} from "react";
import { Link } from 'react-router-dom';
import {Paper, IconButton, InputBase, Divider, Hidden} from "@material-ui/core";
import { CloseRounded, SearchRounded, DirectionsRounded  } from "@material-ui/icons"
import { withStyles, } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: "100px",
        boxSizing: "border-box",
        backgroundColor: theme.palette.tertiary.main,
        height: 38,
        marginTop: theme.spacing(1),
        '@media only screen and (min-width: 988px) and (max-width: 1078px)': {
            width: 290,
        },
        '@media only screen and (min-width: 1078px)': {
            width: 350,
        },
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
        position: "absolute",
        '@media only screen and (min-width: 988px) and (max-width: 1078px)': {
            width: 290,
        },
        '@media only screen and (min-width: 1078px)': {
            width: 350,
        },
    },
});

class LeftSideBarSearch extends Component {
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
        return (
            <Hidden xsDown>
                <Paper className={this.props.classes.root} id="search-field-parent" elevation={0}>
                    <IconButton type="submit" className={this.props.classes.searchIconButton} disabled>
                        <SearchRounded />
                    </IconButton>
                    <InputBase
                        className={this.props.classes.input}
                        placeholder="جست‌و‌جو"
                        onInput={this.searchHandler}
                        value={this.state.search}
                    />
                    {this.state.search ? (
                        <IconButton className={this.props.classes.closeIconButton} onClick={this.searchCloseIconClickHandler}>
                            <CloseRounded fontSize="small" />
                        </IconButton>
                    ) : null}
                </Paper>
                {this.state.search ? (
                    <Paper elevation={1} className={this.props.classes.searchResult}>
                        dwq
                    </Paper>
                ) : null}
            </Hidden>
        );
    }
}
export default withStyles(styles)(LeftSideBarSearch);
