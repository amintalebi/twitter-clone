import React, { Component } from "react";
import {Box, withStyles} from "@material-ui/core";
import { Switch, Route } from "react-router";
import RightSideBar from "./RightSideBar";
import Main from "./Main";
import LeftSideBar from "./LeftSideBar";

const styles = theme => ({
    root: {
        // position: "fixed",
        // overflowY: "auto",
        // height: "100%",
        // width: "auto",
    },
    scrollableBox: {
        // direction: "rtl",
        // padding: "0 auto",
        // width: "100%",
    },
    leftSideBar: {
        height: "100vh",
        boxSizing: "border-box",
        '@media only screen and (max-width: 600px)': {
            width: 0,
        },
        '@media only screen and (min-width: 600px) and (max-width: 988px)': {
            width: 0,
        },
        '@media only screen and (min-width: 988px) and (max-width: 1008px)': {
            width: 320,
            paddingLeft: 15,
            paddingRight: 15,
        },
        '@media only screen and (min-width: 1008px) and (max-width: 1078px)': {
            width: 320,
            paddingLeft: 15,
            paddingRight: 15,
        },
        '@media only screen and (min-width: 1078px) and (max-width: 1265px)': {
            width: 390,
            paddingLeft: 20,
            paddingRight: 20,
        },
        '@media only screen and (min-width: 1265px)': {
            width: 390,
            paddingLeft: 20,
            paddingRight: 20,
        },
    },
    mainPage: {
        height: "100%",
        boxSizing: "border-box",
        borderStyle: "solid",
        borderWidth: "0 1px",
        borderColor: theme.palette.tertiary.main,
        '@media only screen and (max-width: 600px)': {
            width: "calc(100vw - 68px)",
        },
        '@media only screen and (min-width: 600px) and (max-width: 988px)': {
            width: "calc(100vw - 88px)",
            maxWidth: 600,
        },
        '@media only screen and (min-width: 988px) and (max-width: 1008px)': {
            width: 600,
        },
        '@media only screen and (min-width: 1008px) and (max-width: 1078px)': {
            width: 600,
        },
        '@media only screen and (min-width: 1078px) and (max-width: 1265px)': {
            width: 600,
        },
        '@media only screen and (min-width: 1265px)': {
            width: 600,
        },
    },
    rightSideBar: {
        height: "100vh",
        boxSizing: "border-box",
        '@media only screen and (max-width: 600px)': {
            width: 68,
            paddingLeft: 10,
            paddingRight: 10,
        },
        '@media only screen and (min-width: 600px) and (max-width: 988px)': {
            width: 88,
            paddingLeft: 20,
            paddingRight: 20,
        },
        '@media only screen and (min-width: 988px) and (max-width: 1008px)': {
            width: 68,
            paddingLeft: 10,
            paddingRight: 10,
        },
        '@media only screen and (min-width: 1008px) and (max-width: 1078px)': {
            width: 88,
            paddingLeft: 20,
            paddingRight: 20,
        },
        '@media only screen and (min-width: 1078px) and (max-width: 1265px)': {
            width: 88,
            paddingLeft: 20,
            paddingRight: 20,
        },
        '@media only screen and (min-width: 1265px)': {
            width: 275,
            paddingLeft: 20,
            paddingRight: 20,
        },
    },
});

class Inside extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box display="flex" justifyContent="center" alignItems="flex-start" className={classes.scrollableBox}>
                <Box className={classes.rightSideBar}><RightSideBar /></Box>
                <Box className={classes.mainPage}>
                    <Switch>
                        <Route path='/' component={ Main } />
                    </Switch>
                </Box>
                <Box className={classes.leftSideBar}><LeftSideBar /></Box>
            </Box>
        );
    };
}
export default withStyles(styles)(Inside);
