import React, { Component } from 'react';
import {Box, Card, CardHeader, Avatar, Typography, CardContent} from "@material-ui/core";
import  { withStyles } from "@material-ui/core";
import Post from "./Post";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import {withRouter} from "react-router";

const styles = theme => ({
    accountRoot: {
        borderRadius: 0,
        borderBottom: `1px solid ${theme.palette.tertiary.main}`,
    },
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
    avatar: {
        marginLeft: theme.spacing(1),
    },
});

class Account extends Component {
    state = {
        followed: false,
    };

    revertProp = (prop) => (e) => {
        this.setState({
            [prop]: !this.state[prop],
        })
    };

    render() {
        // "followers -> follow ban" "normal(search, following)" "channelMembers -> delete and ban" "channelAdmins -> delete access"
        const { classes, followed, followedHandler} = this.props;
        return (
            <Card className={classes.accountRoot}>
                <CardHeader
                    avatar={
                        <Avatar
                            onClick={() => this.props.history.push("/profile/4")}
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
                            onClick={this.revertProp("followed")}
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

export default withStyles(styles)(connect(mapStateToProps, null)(withRouter(Account)));
