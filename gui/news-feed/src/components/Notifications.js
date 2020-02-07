import React, { Component } from 'react';
import {Box, Card, CardHeader, Avatar } from "@material-ui/core";
import  { withStyles } from "@material-ui/core";
import Post from "./Post";
import {connect} from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import Account from "./Account";
import InfiniteScroll from "react-infinite-scroll-component";

const styles = theme => ({
    root: {
      // padding: 0,
    },
    skeleton: {
        backgroundColor: theme.palette.primary.light,
    },
    skeletonAvatar: {
        backgroundColor: theme.palette.primary.light,
        marginLeft: theme.spacing(1),
    },
    notificationRoot: {
        borderRadius: 0,
        borderBottom: `1px solid ${theme.palette.tertiary.main}`,
    },
    avatar: {
        marginRight: theme.spacing(1),
    }
});

class Notifications extends Component {
    fetchMoreData = () => {

    };

    render() {
        const { classes, notifications, scrollableTargetID } = this.props;
        return (
            <InfiniteScroll
                className={classes.root}
                dataLength={notifications.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={
                    <Card className={classes.notificationRoot}>
                        <CardHeader
                            avatar={<Skeleton className={classes.skeletonAvatar} animation="wave" variant="circle" width={36} height={36} />}
                            title={<Skeleton className={classes.skeleton} animation="wave" variant="text" width={"60%"} />}
                            subheader={<Skeleton className={classes.skeleton} animation="wave" variant="text" width={"40%"} />}
                        />
                    </Card>
                }
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        اعلان دیگری وجود ندارد.
                    </p>
                }
                scrollableTarget={scrollableTargetID}
            >
                {
                    notifications.map((notification) => (
                        <Card className={classes.notificationRoot}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        classes={{root: classes.avatar}}
                                        aria-label="recipe"
                                        alt={ "" }
                                        src={ "https://picsum.photos/300/300" }
                                    />
                                }
                                title={ "علی" + " " + "پست شما را لایک کرد"}
                            />
                        </Card>
                    ))
                }
            </InfiniteScroll>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        notifications: [null, null, null, null, null, null, null, null, null, null, null, null],
    };
};

export default withStyles(styles)(connect(mapStateToProps, null)(Notifications));
