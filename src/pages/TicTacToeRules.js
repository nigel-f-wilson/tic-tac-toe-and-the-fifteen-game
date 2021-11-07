import React from 'react';

import {
    Link as RouterLink,
} from "react-router-dom";

// My Components
import Navbar from "../components/Navbar/Navbar"

// MUI  components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'


// Custom Styling
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: 'calc(100vh - 4rem)',

        display: 'flex',
        flexDirection: 'column',
        color: theme.palette.common.white,
        padding: '1.0rem',
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center',
        width: '95%',
    },
}));

export default function FifteenRulesPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position='sticky' >
                <Navbar pageTitle={"Play Tic Tac Toe"} />
            </AppBar>
            <Container className={classes.root} maxWidth='md' >
                <Typography align='center' color='textPrimary' component='h1' variant='h2' gutterBottom >
                    Tic Tac Toe
                </Typography>

                <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom >
                    Rules of Play
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    Tic-Tac-Toe is most commonly played as a paper and pencil game. Two players, one using X's and the other using O's,
                    take turns claiming one cell in a three-by-three grid.  
                    Both players seek to get a three-in-a-row, meaning to have thier mark in all three cells in a particular row, column,
                    or diagonal. If the whole grid is filled and neither player has managed to get a three-in-a-row then the game
                    ends a draw.
                </Typography>
                <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom >
                    An Introduction to Proof Writing
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    Once they have played a few dozen times, most children have gotten pretty good at Tic Tac Toe.
                    At this point I like to challenge them to find (and write down) a strategy that will guarantee them a win
                    if they get to make the first move.
                    After finding counterexamples to their first few attempts, most kids will intuit that this is an impossible task.
                    At this point I modify the challenge: If you think there is no winning strategy, then prove that instead!
                    Prove that you can at least get a draw no matter what moves your opponent makes when they go first.
                    The point here is that we will not settle for a final answer that is just based on intuition.
                    This task can be completed with simple tools, nothing more than pencil and paper is required!
                    It will take several pages and it will challenge your ability to be thorough and organized in your thinking.
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    Finding an actual proof is going to take more than just playing lots of games and recording the results.
                    Even if you win a thousand games in a row, that does not prove you have a winning strategy, just that you have an
                    opponent who's not learning from their mistakes. To actually prove you have a winning strategy you will have to examine every
                    possibile play, not just the ones a particular opponent chooses. Making a tree-diagram that maps out all variations will help
                    you ensure that you have not overlooked any possible moves. There are shortcuts you can take based on symmetry. You may
                    find it helpful to develop your own shorthand notation for a position. You will certainly need to come up with a precice
                    definition of the word "mistake".  Enumerating possibilities, finding counterexamples, developing new forms of notation,
                    and formulating definitions... This IS doing Math.
                </Typography>
                <Box width="100%" mb={3} >
                    <Grid container mb={3} >
                        <Grid item xs={12} sm={4} >
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                component={RouterLink}
                                to='/play_vs_human'
                            >
                                Play Human vs. Human
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                component={RouterLink}
                                to='/play_vs_bot'
                            >
                                Play Human vs. Bot
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                component={RouterLink}
                                to='/play_with_coach'
                            >
                                Play with Coach
                            </Button>
                        </Grid>

                    </Grid>

                </Box>
                


                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    In this app you can play in Human vs. Human mode on a shared device. You can play against my Bot 
                    in threee different difficulty settings. Finally, you can play with a bot that will coach you.  
                    The coach offers verbal commentary for what a player should look out for in a given position. 
                    If you click "Show Hints" the coach will color code the remaining squares to indicate which moves
                     lead to a win, loss, and draw. This is a "complete solution" to the game.
                </Typography>

                <Box p={5} />
            </Container>
        </React.Fragment>
    );
}
