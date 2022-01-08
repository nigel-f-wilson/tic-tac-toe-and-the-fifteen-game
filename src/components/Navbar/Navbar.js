import React from 'react';

// MY COMPONENTS
import MobileMenu from "./MobileMenu";
// import SpacerBox from "./SpacerBox";

// Image Imports
import logo from "../../images/nsgLogoSnipped.png";


// MATERIAL-UI COMPONENTS
import { Box, Container, Typography, AppBar } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

// const heightInRem = 3.6;
// const height = `${heightInRem}rem`;
// const halfHeight = `${heightInRem/2}rem`;

const useStyles = makeStyles((theme) => ({
    navbar: {
        width: '100vw',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        zIndex: '1200',
        display: 'flex',
        alignItems: 'flex-end',
        // alignItems: 'stretch',
    },
    logo: {
        width: '10%',
        backgroundImage: `
            url(${logo})  
        `,
        backgroundPosition: 'left bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 95%',
    },
    pageTitle: {
        display: 'flex',
        flex: '1 0 70%',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

export default function Navbar(props) {
    const classes = useStyles();
    return (
        <AppBar position='sticky' >
            <Box className={classes.navbar} >
                <Container maxWidth='md' disableGutters height='inherit' >
                    <Box display='flex' justifyContent='center' >
                        <Box className={classes.logo} />
                        <Box className={classes.pageTitle} >
                            <Typography align='center' variant='h4' noWrap >
                                {props.pageTitle}
                            </Typography>
                        </Box>
                        <Box display='flex' flexBasis='10%' justifyContent='flex-end' >
                            <MobileMenu />
                        </Box>
                    </Box>

                </Container>
            </Box>
        </AppBar>
    )
}
