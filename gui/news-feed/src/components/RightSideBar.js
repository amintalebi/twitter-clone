import React, { Component } from "react";
import RightNavBar from "./RightNavBar";
import {Box, withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        position: "fixed",
        overflow: "scroll",
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
