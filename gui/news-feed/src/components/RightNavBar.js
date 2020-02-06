import React, { Component } from "react";
import { HomeRounded, SearchRounded, NotificationsRounded, MailOutlineRounded, BookmarkBorderRounded,
    FormatListBulletedRounded, AccountCircleRounded, MoreHorizRounded } from '@material-ui/icons';
import {makeStyles, useMediaQuery, useTheme, styled, Badge, withStyles} from "@material-ui/core";
import { Fab, Box } from "@material-ui/core";
import EditProfileModal from "./EditProfileModal";
import NotificationModal from "./NotificationModal";


const useStyles = makeStyles(theme => ({
    root: {
        // position: "fixed",
        // overflowY: "auto",
        // height: "100%",
        // width: "100%",
    },
    scrollableBox: {
        // direction: "rtl",
    },
    items: { //todo more style for focus
        '&.MuiFab-root': { //for rise order
            boxShadow: "none",
            backgroundColor: "transparent",
            outline: "none",
            fontSize: 19,
            padding: theme.spacing(1),
            marginTop: theme.spacing(1),
            height: 50,
            borderRadius: 100,
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
        },
        '&:focus': {
            boxSizing: "border-box",
            border: "1px solid",
            borderColor: theme.palette.primary.dark,
            color: theme.palette.primary.dark,
        }
    },
    header: {
        '&.MuiFab-root': {
            boxShadow: "none",
            backgroundColor: "transparent",
            color: theme.palette.primary.dark,
            outline: "none",
            height: 50,
            borderRadius: 100,
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
        },
        '&:focus': {
            boxSizing: "border-box",
            border: "1px solid",
            borderColor: theme.palette.primary.dark,
            color: theme.palette.primary.dark,
            outline: "none",
        }
    },
    extendedIcon: {
        marginLeft: theme.spacing(1),
    },
    extendedText: {
        margin: 0,
        marginLeft: theme.spacing(5),
        padding: 0,
        marginRight: theme.spacing(5),
    },
}));


const StyledFab = styled(({Icon, text, classes, matches, theme, onClick,  ...other}) => matches ? (
    <Box {...other}>
        <Fab onClick={onClick} boxShadow={0} size="medium" variant="extended" color="primary" className={classes.items}>
            {Icon}
            <p className={classes.extendedText}>{text}</p>
        </Fab>
    </Box>
) : (
    <Box {...other}>
        <Fab onClick={onClick} size="medium" color="primary" className={classes.items}>
            {Icon}
        </Fab>
    </Box>
))``;

const StyledBadge = withStyles(theme => ({
    badge: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: `1px solid ${theme.palette.primary.main}`,
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const StyledFabWithBadge = styled(({Icon, text, classes, matches, theme, onClick, withBadge, ...other}) => matches ? (
    <Box {...other}>
        <Fab onClick={onClick} boxShadow={0} size="medium" variant="extended" color="primary" className={classes.items}>
            {
                withBadge ? (
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        variant="dot"
                    >
                        {
                            Icon
                        }
                    </StyledBadge>
                ) : (
                    Icon
                )
            }
            <p className={classes.extendedText}>{text}</p>
        </Fab>
    </Box>
) : (
    <Box {...other}>
        <Fab onClick={onClick} size="medium" color="primary" className={classes.items}>
            {
                withBadge ? (
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        variant="dot"
                    >
                        {
                            Icon
                        }
                    </StyledBadge>
                ) : (
                   Icon
                )
            }
        </Fab>
    </Box>
))``;


function RightNavBar() {
    const theme = useTheme();
    const classes = useStyles(theme);
    const matches = useMediaQuery(theme.breakpoints.up('xl'));
    const styleFabAttributes = { classes: classes, matches: matches, theme: theme };
    const [notificationModal, setNotificationModal] = React.useState(false);
    const youHaveNotification = true;//todo
    return (
        <Box
            className={classes.root}
            display="flex" flexDirection="column"
            justifyContent="flex-start"
            alignItems={matches ? "flex-start" : "center"}
        >
            <Box display="block">
                <Fab size="medium" color="secondary" className={classes.header}>
                    <HomeRounded fontSize={"large"}/>
                </Fab>
            </Box>
            {/*<StyledFab Icon={<HomeRounded fontSize={"large"}/>} text="خانه"  {...styleFabAttributes} />*/}
            <StyledFab Icon={<SearchRounded fontSize={"large"}/>} text="جست و جو"  {...styleFabAttributes} />
            <StyledFabWithBadge
                Icon={<NotificationsRounded fontSize={"large"}/>}
                text="اعلانات"
                {...styleFabAttributes}
                onClick={() => setNotificationModal(true)}
                withBadge
            />

            <StyledFab Icon={<MailOutlineRounded fontSize={"large"}/>} text="پیام‌ها"  {...styleFabAttributes} />
            <StyledFab Icon={<BookmarkBorderRounded fontSize={"large"}/>} text="نشانک‌ها"  {...styleFabAttributes} />
            <StyledFab Icon={<FormatListBulletedRounded fontSize={"large"}/>} text="لیست‌ها"  {...styleFabAttributes} />
            <StyledFab Icon={<AccountCircleRounded fontSize={"large"}/>} text="مشخصات"  {...styleFabAttributes} />
            <StyledFab Icon={<MoreHorizRounded fontSize={"large"}/>} text="بیشتر"  {...styleFabAttributes} />
            <NotificationModal open={notificationModal} onClose={(e) => setNotificationModal(false)}/>
        </Box>
    );
}
export default RightNavBar;
