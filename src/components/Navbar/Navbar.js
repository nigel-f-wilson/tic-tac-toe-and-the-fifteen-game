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
}));

export default function Navbar(props) {
    const classes = useStyles();
    return (
        <AppBar position='sticky' className={classes.navbar}>
            <Container maxWidth='sm' disableGutters height='inherit' >
                <Box display='flex' justifyContent='space-between'  >
                    <Box className={classes.logo} />
                    <Typography align='center' variant='h3' noWrap children={props.pageTitle} style={{ paddingTop: "0.5rem" }} />
                    <MobileMenu />
                </Box>
            </Container>
        </AppBar>
    )
}
