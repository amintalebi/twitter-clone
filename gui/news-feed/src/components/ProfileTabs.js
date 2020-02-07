import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Tabs, Tab, styled, useMediaQuery, Box} from "@material-ui/core";
import {
    DirectionsRunRounded,
    FiberNewRounded,
    WhatshotRounded,
    PanToolRounded,
    ModeCommentRounded, ForumRounded, GroupAddRounded, GroupRounded
} from '@material-ui/icons';
import {Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import ChannelPage from "./ChannelPage";
import ProfilePage from "./ProfilePage";
import SearchPage from "./SearchPage";
import PostPage from "./PostPage";
import Main from "./Main";
import Posts from "./Posts";
import Accounts from "./Accounts";

const StyledTab = styled(({icon, label, matches, to, ...other}) =>
    matches ? (
        <Tab label={label} {...other} component={ Link } to={ to } />
    ) : (
        <Tab fontSize={"large"} icon={icon} {...other} component={ Link } to={ to } />
    )
)``;


const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: "none",
        borderStyle: "solid",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: theme.palette.tertiary.main,
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 2,
    },
    tab: {
        minWidth: "auto",
        width: "calc(100% / 4)",

        "&:focus": {
            backgroundColor: "transparent",
            outline: "none",
        },
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        },
    }
}));

function ProfileTabs() {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [value, setValue] = React.useState(0);
    const matches = useMediaQuery(theme.breakpoints.up('xl'));
    const styledTabAttributes = {matches: matches, className: classes.tab};

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                classes={{root: classes.root}}
            >
                <StyledTab to="/profile/2" icon={<ModeCommentRounded fontSize={"large"}/>} label="پست‌ها" {...styledTabAttributes} />
                <StyledTab to="/profile/2/replies" icon={<ForumRounded fontSize={"large"}/>} label="جواب‌ها" {...styledTabAttributes} />
                <StyledTab to="/profile/2/posts/own-channels" icon={<GroupAddRounded fontSize={"large"}/>} label="کانال‌ها شخصی" {...styledTabAttributes}  />
                <StyledTab to="/profile/2/posts/channels" icon={<GroupRounded fontSize={"large"}/>} label="کانال‌های دنبال شده" {...styledTabAttributes} />
            </Tabs>
            <Switch>
                <Route path='/profile/2' component={ Posts } />
                <Route path='/profile/2/replies' component={ Posts } />
                <Route path='profile/2/posts/own-channels' component={ Accounts } />
                <Route path='profile/2/posts/channels' component={ Accounts } />
            </Switch>
        </Box>
    );
}

export default ProfileTabs;
