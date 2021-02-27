import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { Hidden, Tooltip, ListItemIcon, ListItemText, ListItem, Drawer, AppBar, Toolbar, List, CssBaseline, Box, Typography, Divider, IconButton, Menu } from '@material-ui/core'
import { Menu as MenuIcon, ChevronLeft, ChevronRight, Mail, AccountCircle } from '@material-ui/icons'
import { routes } from '../../auth/route'
import { navigate, Link } from 'gatsby';
import { useStyles } from './dashboard-styles'

export default function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }
    const handleLogout = () => {
        window.localStorage.removeItem('user')
        navigate('/')
    }
    const handleClick = () => {
        navigate('/dashboard')
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Box display="flex">
                    <Box flexGrow={1}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box flexGrow={50}>
                        <Typography variant="h6" className={classes.typography} style={{ cursor: 'pointer' }} onClick={handleClick}>
                            Talent Excel
                                </Typography>
                    </Box>
                    <Box>
                        <Tooltip title="Logout">
                            <IconButton
                                onClick={handleLogout}
                            >
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </AppBar>
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}

                    open={open}
                    ModalProps={{
                        keepMounted: true //Better open performance on mobile
                    }}

                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List >
                        {routes && routes.map((route, index) => (
                            <ListItem button key={route.text}>
                                <ListItemIcon>{route.icon}</ListItemIcon>
                                <Link to={`/${route.text.toLowerCase().trim()}`} className={classes.link}>

                                    <ListItemText primary={route.text}
                                    />
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}

                    open={open}
                    ModalProps={{
                        keepMounted: true //Better open performance on mobile
                    }}

                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {routes && routes.map((route, index) => (
                            <ListItem button key={route.text}>
                                <ListItemIcon>{route.icon}</ListItemIcon>
                                <Link to={`/${route.text.toLowerCase().trim()}`} className={classes.link}>
                                    <ListItemText primary={route.text}
                                    />
                                </Link>

                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Hidden>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {
                    props.children
                }
            </main>
        </div >
    );
}