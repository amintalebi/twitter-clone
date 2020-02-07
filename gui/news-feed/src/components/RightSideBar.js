import React, { Component } from "react";
import RightNavBar from "./RightNavBar";
import {Box, withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        position: "fixed",
        overflowY: "auto",
        maxHeight: "100vh",
        '@media only screen and (max-width: 600px)': {
            width: 68 - 20,
        },
        '@media only screen and (min-width: 600px) and (max-width: 988px)': {
            width: 88 - 20,
        },
        '@media only screen and (min-width: 988px) and (max-width: 1008px)': {
            width: 68 - 20,
        },
        '@media only screen and (min-width: 1008px) and (max-width: 1078px)': {
            width: 88 - 20,
        },
        '@media only screen and (min-width: 1078px) and (max-width: 1265px)': {
            width: 88 - 20,
        },
        '@media only screen and (min-width: 1265px)': {
            width: 275 - 20,
        },
    }
});

class RightSideBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.root} >
                <RightNavBar />
            </Box>
        );
    };
}
export default  withStyles(styles)(RightSideBar);
