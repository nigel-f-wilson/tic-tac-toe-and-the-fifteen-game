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
        // borderRight: 'solid black 1rem',
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
                <Navbar pageTitle={"Tic Tac Toe and the 15 Game"} />
            </AppBar>
            <Container className={classes.root} maxWidth='md' >


                <Typography align='center' color='textPrimary' component='h1' variant='h2' gutterBottom >
                    The Fifteen Game
                </Typography>
                <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom >
                    Rules of Play
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    The Fifteen Game is traditionally played with a set of cards numbered one through nine, but can easily be adapted into 
                    a paper and pencil game. Two players take turns claiming one card per turn. 
                    The first player to collect a set of exactly three cards that add up to exactly fifteen wins. 
                    If you collect more than three cards you may ignore any extras when looking at subsets of three.
                    If all nine cards are claimed and neither player has made a three-card set that sums to 15 then the game ends a draw.
                </Typography>
                <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom >
                    Examples
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    It is possible to get a sum of 15 with two, four, or five cards but these combinations do not count as wins.
                    For example taking only the 6 and 9 does not win the game because it is only a two-card set. 
                    Similarly taking the 1, 3, 4, and 7 does not win the game because it is a four-card set.
                    Three-card sets that exceed 15 (ie. 6, 7, 8) do not win either. <br/>
                    The two sets 1, 5, 9 and 2, 6, 7 would be winning, even if the player held additional cards not listed. <br/>
                    Bonus Questions: How many different three card combinations are there? How many of them sum to 15?
                </Typography>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={4} >
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            component={RouterLink}
                            to='/fifteen_vs_human'
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
                            to='/fifteen_vs_bot'
                        >
                            Play Human vs. Bot
                        </Button>
                    </Grid>

                </Grid>
                <Box p={2} />


                <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom >
                    Using the Fifteen Game in a Math Class
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    The Fifteen Game only takes a few minutes to play, making it an ideal brain-break activity.
                    You can also set up a bracket and have a class-wide or school-wide championship tournament.
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    For students at the Elementary level, The Fifteen Game is a fantastic way to build automaticity at 
                    mentally computing sums and differences. 
                    Middle School students will learn about combinations, permutations, and symmetry as they build their tree diagrams 
                    and map out all the possible strategies in Tic Tac Toe.
                    High Schoolers can learn what it means to write a rigorous proof in a familiar context. 
                    They can also apply their algebra skills to create a Magic Square from scratch.  
                </Typography>

                <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom >
                    Seeing the Similarity Beneath the Surface
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    Many problems can be solved with less work if, instead of starting from scratch, you look for similarities between the problem
                    at hand and other problems that have already been solved.
                    Two real-world problems may seem unrelated at first even though they are behaving according to the same
                    underlying patterns. Being familiar with mathematics makes you better at noticing when this is the case!
                    Experience this for yourself by playing the two games featured here.
                    Though they feel nothing alike when you first play them, the Fifteen Game and Tic-Tac-Toe are actually the same game.
                    In fact, the bot in this app uses the same exact code to select its moves when playing Tic Tac Toe and the Fifteen Game.
                    The only thing that is different is how these moves are represented visually. 
                    If you have mastered Tic-Tac-Toe but still find yourself losing to my bot at the Fifteen Game then I suggest looking into "Magic Squares".
                </Typography>
            </Container>
        </React.Fragment>
    );
}
