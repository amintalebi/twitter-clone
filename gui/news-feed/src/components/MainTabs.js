import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Tabs, Tab, Hidden, AppBar, Typography, Box, styled, Fab, useMediaQuery} from "@material-ui/core";
import { DirectionsRunRounded, FiberNewRounded, WhatshotRounded, PanToolRounded } from '@material-ui/icons';

const StyledTab = styled(({icon, label, matches, ...other}) => matches ? (
    <Tab label={label} {...other}/>
) : (
    <Tab fontSize={"large"} icon={icon} {...other}/>
))``;

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        boxShadow: "none",
        borderStyle: "solid",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: theme.palette.tertiary.main,
    },
    tab: {
        minWidth: "auto",
        width: "calc(100% / 4)",
        fontSize: 19,
        "&:focus": {
            backgroundColor: "transparent",
            outline: "none",
        },
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        },
    }
}));

function MainTabs() {
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
            className={classes.root}
        >
            <StyledTab icon={<DirectionsRunRounded fontSize={"large"}/>} label="دنبال شده‌ها" {...styledTabAttributes} />
            <StyledTab icon={<FiberNewRounded fontSize={"large"}/>} label="تازه‌ترین‌ها" {...styledTabAttributes} />
            <StyledTab icon={<WhatshotRounded fontSize={"large"}/>} label="داغ‌ترین‌ها" {...styledTabAttributes}  />
            <StyledTab icon={<PanToolRounded fontSize={"large"}/>} label="شرکت کرده‌ها" {...styledTabAttributes} />
        </Tabs>
    );
}

export default MainTabs;
