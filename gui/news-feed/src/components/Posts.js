import React, { Component } from 'react';
import {Box, Card, CardActions, CardContent, CardHeader} from "@material-ui/core";
import  { withStyles } from "@material-ui/core";
import Post from "./Post";
import {connect} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "@material-ui/lab/Skeleton";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
    skeleton: {
        backgroundColor: theme.palette.primary.light,
    },
    skeletonAvatar: {
        backgroundColor: theme.palette.primary.light,
        marginLeft: theme.spacing(1),
    },
    skeletonCardActionWrapper: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    }
});

class Posts extends Component {
    fetchMoreData = () => {

    };
    render() {
        const { classes, posts } = this.props;
        const postList = posts.map((post) => {
            return posts.length > 0 ? (
                <Post post={post} />
            ) : (
                <p>no post yet</p>
            )
        });
        return (
            <InfiniteScroll
                dataLength={posts.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={
                    <Card>
                        <CardHeader
                            avatar={<Skeleton className={classes.skeletonAvatar} animation="wave" variant="circle" width={40} height={40} />}
                            title={<Skeleton className={classes.skeleton} animation="wave" variant="text" width={"60%"} />}
                            subheader={<Skeleton className={classes.skeleton} animation="wave" variant="text" width={"40%"}/>}
                        />
                        <CardContent>
                            <Skeleton className={classes.skeleton} animation="wave" variant="text" width={"80%"} />
                            <Skeleton className={classes.skeleton} animation="wave" variant="text" width={"90%"} />
                            <Skeleton className={classes.skeleton} animation="wave" variant="text" width={"70%"} />
                        </CardContent>
                        <CardMedia>
                            <Skeleton className={classes.skeleton} animation="wave" variant="rect" width={"100%"} height={220} />
                        </CardMedia>
                        <CardActions className={classes.skeletonCardActionWrapper}>
                            <Skeleton className={classes.skeleton} animation="wave" variant="circle" width={36} height={36} />
                            <Skeleton className={classes.skeleton} animation="wave" variant="circle" width={36} height={36} />
                            <Skeleton className={classes.skeleton} animation="wave" variant="circle" width={36} height={36} />
                        </CardActions>
                    </Card>
                }
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        موارد بیشتری وجود ندارد.
                    </p>
                }
            >
                {
                    posts.map((post) => <Post post={post} />)
                }
            </InfiniteScroll>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.post.posts,
    };
};

export default withStyles(styles)(connect(mapStateToProps, null)(Posts));
