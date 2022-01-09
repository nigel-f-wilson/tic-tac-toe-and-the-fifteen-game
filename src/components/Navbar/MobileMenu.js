import React from 'react';
import { Link as RouterLink } from "react-router-dom";

// MATERIAL-UI COMPONENTS
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// ICONS
import MenuIcon from '@material-ui/icons/Menu';


import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    menu: {
        // border: 'solid red 1px',
        backgroundColor: theme.palette.primary.main,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    button: {
    },
    drawer: {
        height: 'auto',
    },
    list: {
        width: 'auto',
        minWidth: '300px',
        fontSize: '0.8rem',
        backgroundColor: theme.palette.primary.main,
        height: '100%'
    },
    listItem: {
        color: theme.palette.common.white,
    },
    icon: {
        width: '45px',
        color: theme.palette.common.white,
        alignContent: 'center',
        justifyContent: 'center',
    },
}));

export default function MobileMenu() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <MenuList />
            </List>
        </Box>
    );

    return (
        <Box className={classes.menu} >
            <Button 
                className={classes.button}
                onClick={toggleDrawer('open', true)}
                aria-controls="simple-menu"
                aria-haspopup="true"
            >
                <MenuIcon fontSize='large' />
            </Button>   
            <Drawer 
                className={classes.drawer}
                classes={{ paper: 'paper'}}
                anchor={'right'} 
                open={state['open']} 
                onClose={toggleDrawer('open', false)}
                onClick={toggleDrawer('open', false)}
            >
                    {list('right')}
            </Drawer>
        </Box>
    );
}



function MenuList() {
    const classes = useStyles();

    return (

        <React.Fragment >

            <ListItem
                key={'welcome'}
                button
                component={RouterLink}
                to='/'
            >
                <Icon className={"fas fa-home fa-2x"}
                    classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Welcome'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <Divider />


            <ListSubheader >
                <Box p={2} />
                <Typography variant='h4' color="textPrimary" gutterBottom  >
                    Tic Tac Toe
                </Typography>
            </ListSubheader>


            <ListItem
                key={'rule'}
                button
                component={RouterLink}
                to={{
                    pathname: '/tic_tac_toe_rules',
                }}
            >
                <Icon className={"fas fa-question fa-2x"}
                    classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'How To Play'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'tic_tac_toe_vs_human'}
                button
                component={RouterLink}
                to={{
                    pathname: '/tic_tac_toe_vs_human',
                }}
            >
                <Icon className={"fas fa-user-friends fa-2x"}
                    classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Play vs. Human'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'tic_tac_toe_vs_bot'}
                button
                component={RouterLink}
                to={{
                    pathname: '/tic_tac_toe_vs_bot',
                }}
            >
                <Icon className={"fas fa-robot fa-2x"}
                    classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Play vs. Bot'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'tic_tac_toe_with_coach'}
                button
                component={RouterLink}
                to={{
                    pathname: '/tic_tac_toe_with_coach',
                }}
            >
                <Icon className={"fas fa-graduation-cap fa-2x"}
                    classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Play with Coach'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>


            <Divider />


            <ListSubheader  >
                <Box p={2} />
                <Typography variant='h4' color="textPrimary" gutterBottom >
                    The Fifteen Game
                </Typography>
            </ListSubheader>

            <ListItem
                key={'fifteen_rules'}
                button
                component={RouterLink}
                to={{
                    pathname: '/fifteen_rules',
                }}
            >
                <Icon className={"fas fa-question fa-2x"}
                    classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'How To Play'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'fifteen_vs_human'}
                button
                component={RouterLink}
                to={{
                    pathname: '/fifteen_vs_human',
                }}
            >
                <Icon className={"fas fa-user-friends fa-2x"}
                    classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Play vs. Human'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'fifteen_vs_bot'}
                button
                component={RouterLink}
                to={{
                    pathname: '/fifteen_vs_bot',
                }}
            >
                <Icon className={"fas fa-robot fa-2x"}
                    classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Play vs. Bot'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>

            <ListItem
                key={'learn_about_magic_squares'}
                button
                component={RouterLink}
                to={{
                    pathname: '/learn_about_magic_squares',
                }}
            >
                <Icon className={"fas fa-graduation-cap fa-2x"}
                    classes={{ root: classes.icon }}
                />
                <ListItemText
                    primary={'Magic Squares'}
                    primaryTypographyProps={{ variant: 'h5' }}
                />
            </ListItem>


        </React.Fragment>
    );
}