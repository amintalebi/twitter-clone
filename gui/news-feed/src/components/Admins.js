import React, { Component } from 'react';
import {Box, Card, CardHeader, Avatar } from "@material-ui/core";
import  { withStyles } from "@material-ui/core";
import {connect} from "react-redux";
import Account from "./Account";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from '@material-ui/lab/Skeleton';
import Admin from "./Admin";


const styles = theme => ({
    accountSkeletonRoot: {
        borderRadius: 0,
        borderBottom: `1px solid ${theme.palette.tertiary.main}`,
    },
    skeleton: {
        backgroundColor: theme.palette.primary.light,
    },
    skeletonAvatar: {
        backgroundColor: theme.palette.primary.light,
        marginLeft: theme.spacing(1),
    },
});

class Admins extends Component {
    state = {
        accounts: [null, null, null, null, null, null, null, null,]
    };
    fetchMoreData = () => {
        setTimeout(() => {
            this.setState({
                accounts: this.state.accounts.concat([null, null, null, null,])
            })
        }, 5000);
    };

    render() {
        const { classes, follow, scrollableTargetID } = this.props;
        const {accounts} = this.state;
        return (
            <InfiniteScroll
                dataLength={accounts.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={
                    <Card className={classes.accountRoot}>
                        <CardHeader
                            avatar={<Skeleton className={classes.skeletonAvatar} animation="wave" variant="circle" width={36} height={36} />}
                            title={<Skeleton className={classes.skeleton} animation="wave" variant="text" width={"80%"} />}
                            subheader={<Skeleton className={classes.skeleton} animation="wave" variant="text" width={"60%"}/>}
                        />
                    </Card>
                }
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        موارد بیشتری وجود ندارد.
                    </p>
                }
                scrollableTarget={scrollableTargetID}
            >
                {
                    accounts.map((account , index) => (
                        <Admin key={index} removeAdmin={() => accounts.splice(index, 1)}/>
                    ))
                }
            </InfiniteScroll>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        accounts: [null, null, null, null, null, null, null, null],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => null,
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Admin));
