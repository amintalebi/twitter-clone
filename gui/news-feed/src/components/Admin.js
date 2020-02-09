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
        backgroundColor: theme.palette.primary.main,
        color: "white",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
        boxSizing: "border-box",
        height: 35,
    },
    avatar: {
        marginLeft: theme.spacing(1),
    },
});

class Admin extends Component {
    state = {
        access: false,
    };

    revertProp = (prop) => (e) => {
        this.setState({
            [prop]: !this.state[prop],
        })
    };

    render() {
        const { classes, access, followedHandler, removeAdmin} = this.props;
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
                        <Box>
                            <Button
                                color="primary"
                                classes={{root: classes.actionButtonOff}}
                                onClick={() => this.revertProp("access")}
                            >
                                {
                                    this.state.access ? "دسترسی کامل به پست ها" : "دسترسی فقط به پست های شخصی"
                                }
                            </Button>
                            <Button
                                color="primary"
                                classes={{root: classes.actionButtonOn}}
                                onClick={() => removeAdmin()}
                            >
                                حذف
                            </Button>
                        </Box>
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

export default withStyles(styles)(connect(mapStateToProps, null)(withRouter(Admin)));
