import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Tabs, Tab, styled, useMediaQuery} from "@material-ui/core";
import { DirectionsRunRounded, FiberNewRounded, WhatshotRounded, PanToolRounded } from '@material-ui/icons';
import {Link} from "react-router-dom";

const StyledTab = styled(({icon, label, matches, to, ...other}) =>
    matches ? (
        <Tab label={label} {...other}/>
    ) : (
        <Tab fontSize={"large"} icon={icon} {...other}/>
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
        <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            classes={{root: classes.root}}
        >
            <StyledTab to="/home/following" icon={<DirectionsRunRounded fontSize={"large"}/>} label="پست‌ها" {...styledTabAttributes} />
            <StyledTab to="/home/newest" icon={<FiberNewRounded fontSize={"large"}/>} label="جواب‌ها" {...styledTabAttributes} />
            <StyledTab to="/home/hottest" icon={<WhatshotRounded fontSize={"large"}/>} label="کانال‌ها شخصی" {...styledTabAttributes}  />
            <StyledTab to="/home/participated" icon={<PanToolRounded fontSize={"large"}/>} label="کانال‌های دنبال شده" {...styledTabAttributes} />
        </Tabs>
    );
}

export default ProfileTabs;
