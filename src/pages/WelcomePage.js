import React from 'react';

import {
    Link as RouterLink,
} from "react-router-dom";

// My Components
import Navbar from "../components/Navbar/Navbar"

// MUI  components
import { Box, Container, Grid, Button, Typography, Card, CardActionArea, CardContent, CardHeader } from '@material-ui/core'


// Custom Styling
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center',
        width: '95%',
    }, 
    scrollingContainer: {
        overflowY: "scroll"
    },
    cardTitle: {
        color: "#000",
    }
}));

export default function WelcomePage() {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <Navbar pageTitle={"Tic Tac Toe and the 15 Game"} />
            <Container maxWidth='sm' className={classes.scrollingContainer} >
                <Box p={2} />
                <Typography align='center' color='textPrimary' variant="h5" gutterBottom >
                    Welcome to a Math Lesson in Disguise! 
                </Typography>
                <Typography align='justify' color='textPrimary' variant='body1' gutterBottom >
                    Math helps us see when things that seem unrelated on their surfaces are actually behaving according to 
                    the same underlying rules. Try out these two games and you will see that they feel completely different to play. 
                    They make you think in two very different ways. Behind the scenes though, they are the same game! The Bot follows the exact same instructions
                    when it is playing either game, the only thing that is different is how the game is depicted visually.
                </Typography>

                <Grid container spacing={3} >
                    <Grid item zeroMinWidth xs={false} sm={1} />
                    <Grid item xs={6} sm={5} >
                        <GameCard 
                            title="Tic Tac Toe"
                        />
                    </Grid>
                    <Grid item xs={6} sm={5} >
                        <GameCard
                            title="The 15 Game"

                        />
                    </Grid>
                    <Grid item zeroMinWidth xs={false} sm={1} />

                </Grid>
                
                
                <Box p={2} />

                
                <TeachingNotes />
                

                <Typography align='left' color='textPrimary' variant='h4' gutterBottom >
                    Behind the Scenes
                </Typography>
                <Typography variant='body1' color='textPrimary' gutterBottom >
                    This lesson is built with code that is open-source and available on my <a href="https://github.com/nolastemgarden">Github</a> account,
                    so if you have something to add, a bug to report, or simply want to see how it works you are welcome to open an issue or &nbsp;
                    <a href="https://github.com/nolastemgarden/tic-tac-toe-and-the-fifteen-game">clone the repository</a>!
                </Typography>
                <Box p={5} />
            </Container>
        </React.Fragment>
    );
}

function GameCard(props) {
    const classes = useStyles();
    let { title } = props

    return (
        <Card >
            <CardHeader 
                title={title}
                className={classes.cardTitle}
                titleTypographyProps={{
                    variant: "h4",
                    align: "center"
                }}
            />

            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                component={RouterLink}
                to='/tic_tac_toe_rules'
            >
                Tic Tac Toe
            </Button>
        </Card>
    )
}

{/* <Button
    className={classes.button}
    variant="contained"
    color="primary"
    component={RouterLink}
    to='/fifteen_rules'
    The Fifteen Game
                </Button>
> */}

function TeachingNotes(params) {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' variant='h4' gutterBottom >
                Teaching Notes
            </Typography>
            <Typography align='left' color='textPrimary' variant='h5' gutterBottom >
                Tic-Tac-Toe as an Intro to Proof
            </Typography>
            <Typography variant='body1' color='textPrimary' gutterBottom >
                By the time they have played a few dozen rounds of Tic-Tac-Toe, most children have gotten pretty good at the game.
                At this point I like to challenge them to find (and write down) a strategy that will guarantee them a win
                every time, as long as they get to make the first move. First let students invent their own ways of writing down move orders and organizing their thoughts.
                Once they have had a chance to get creative and to struggle you may introduce them to tree diagrams and to systems of notation assign a letter name to each cell.
            </Typography>
            <Typography variant='body1' color='textPrimary' gutterBottom >
                Generally, students will come up with a few different strategies that they think guarantee a win, but one by one
                counterexamples will be found and most kids will eventually intuit that this is an impossible task.
                At this point I modify the objective: If you think there is no strategy that guarantees a win, then prove that instead!
                Prove that you can at get a draw in the worst case no matter what moves your opponent makes when they go first.
            </Typography>
            <Typography variant='body1' color='textPrimary' gutterBottom >
                The point here is that we will not settle for a final answer that is just based on intuition.
                Tic Tac Toe is a classic game with a reputation for being one of the simplest strategy games, but this reputation causes many folks to
                underestimate its depth. It is very common for people to asume that they have fully mastered Tic-Tac-Toe just because they know a way to never lose,
                but a true master plays both offens and defense. Just because you can't force your opponent to lose doesn't mean you should let your guard down: unforced errors happen all the time!
            </Typography>
        </React.Fragment>
    )
}


// Finding an actual proof is going to take more than just playing lots of games and recording the results. 
// Even if you win a thousand games in a row, that does not prove you have a winning strategy, just that you have an 
// opponent who's not learning from their mistakes. To actually prove you have a winning strategy you will have to examine every 
// possibile play, not just the ones a particular opponent chooses.Making a tree - diagram that maps out all variations will help 
// you ensure that you have not overlooked any possible moves.There are shortcuts you can take based on symmetry.You may 
// find it helpful to develop your own shorthand notation for a position.You will certainly need to come up with a precice 
// definition of the word "mistake".Exploring possibilities, finding counterexamples, developing new forms of notation,
// and formulating definitions... This IS what doing Math involves.


// This lesson has something to offer students of all experience levels.
// Kids of Elementary School age can use it to practice their fluency at mentally computing sums and differences.
// Middle School aged kids will learn about combinations and permutations as they build their tree diagrams and consider all the
// possible things that could happen next. 
// High School aged kids will learn what it means to write a rigorous proof and can apply their algebra skills to create a Magic Square from scratch.