import React, { Component } from 'react';
import {Box, Card, CardHeader, Avatar, Typography, CardContent} from "@material-ui/core";
import  { withStyles } from "@material-ui/core";
import Post from "./Post";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    actionButtonOn: {
        borderRadius: 100,
        backgroundColor: theme.palette.primary.main,
        color: "white",
        "&:hover": {
            backgroundColor: theme.palette.error.dark,
        },
        boxSizing: "border-box",
        height: 35,
    },
    actionButtonOff: {
        borderRadius: 100,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme.palette.primary.main,
        boxSizing: "border-box",
        height: 35,
    },
});

class Account extends Component {

    render() {
        const { classes, followed, followedHandler } = this.props;
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar
                            classes={{root: classes.avatar}}
                            aria-label="recipe"
                            alt={ "" }
                            src={ "https://picsum.photos/300/300" }
                        />
                    }
                    title={"علی"}
                    subheader={ "@" + "ali_j1" }
                    action={
                        <Button
                            color="primary"
                            classes={{root: followed ? classes.actionButtonOn : classes.actionButtonOff}}
                            onClick={() => followedHandler()}
                        >
                            {
                                followed ? "حذف از دنبال شده‌ها" : "دنبال کردن"
                            }
                        </Button>
                    }
                />
            </Card>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        notifications: null,
    };
};

export default withStyles(styles)(connect(mapStateToProps, null)(Account));
