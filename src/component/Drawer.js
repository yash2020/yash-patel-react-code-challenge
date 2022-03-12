import React from "react";
import clsx from "clsx";
import {
    Drawer,
    AppBar,
    Toolbar,
    IconButton,
    Divider,
    useTheme,
    List,
    CssBaseline,
    Typography,
    ListItem,
    ListItemIcon,
    ListItemText,


} from "@material-ui/core";
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    Menu,
    Home,
    PinDrop,
    Business
} from '@material-ui/icons';
import { useLocation, useNavigate } from "react-router-dom";

import useStyles from "./styles/themeDesign";


const MiniDrawer = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const location = useLocation();

    let navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open
                        })}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Vog React code challenge.
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open
                    })
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>

                <Divider />
                <List>
                    <ListItem key={"dashBoardPage"} onClick={() => navigate('/')} selected={location.pathname === '/'}>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                    <ListItem key={"devicePage"} onClick={() => navigate('/universities')} selected={location.pathname === '/universities'}>
                        <ListItemIcon>
                            <Business />
                        </ListItemIcon>
                        <ListItemText primary={"Universities"} />
                    </ListItem>
                    <ListItem key={"controlPage"} onClick={() => navigate('/postal-lookup')} selected={location.pathname === '/postal-lookup'}>
                        <ListItemIcon>
                            <PinDrop />
                        </ListItemIcon>
                        <ListItemText primary={"Postal-lookup"} />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default MiniDrawer;