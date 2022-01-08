import React from 'react';
import { Link as RouterLink } from "react-router-dom";

// My Components
import Navbar from "../components/Navbar/Navbar"

// MUI  components
import { Box, Container, Grid, Button, Typography, Card, CardActionArea, CardMedia, CardHeader } from '@material-ui/core'

// Images
import TicTacToeCoachScreenshot from "../images/TicTacToeCoachScreenshot860x800.png";
import FifteenGameScreenshot from "../images/FifteenGameScreenshot860x800.png";


// Custom Styling
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    scrollingContainer: {
        overflowY: "scroll"
    },
    cardRoot: {
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee"
    },
    cardTitle: {
        color: "#000",
    },
    cardImage: {
        width: "90%",
        paddingTop: "86%",
        margin: "0 0 1rem",
        borderRadius: "0.3rem"
    },
    cardButton: {
        width: "75%",
        margin: "0 0 1rem",
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center',

    },
}));

export default function WelcomePage() {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <Navbar pageTitle={"Tic Tac Toe and the 15 Game"} />
            <Container maxWidth='sm' className={classes.scrollingContainer} >
                <Header />
                <CardGrid />
                <TeachingNotes />
                <BehindTheScenes />
            </Container>
        </React.Fragment>
    );
}

function Header() {
    return (
        <React.Fragment>
            <Box p={2} />
            <Typography align='center' variant="h4" color='textPrimary' gutterBottom >
               A Math Lesson in Disguise
            </Typography>
            <Typography align='justify' variant='body1' color='textPrimary' style={{ paddingBottom: "2rem" }} >
                Math helps us see when things that seem unrelated on their surfaces are actually behaving according to
                the same underlying rules. Try out these two games and you will see that they feel completely different to play.
                They make you think in two very different ways. Behind the scenes though, they are the same game! The Bot follows the exact same instructions
                when it is playing either game, the only thing that is different is how the game is depicted visually.
            </Typography>
        </React.Fragment>
    )
}

function CardGrid() {
    return (
        <Grid container spacing={3} style={{ paddingBottom: "2rem" }}  >
            <Grid item xs={6} >
                <GameCard 
                    title="Tic Tac Toe"
                    image={TicTacToeCoachScreenshot}
                    to='/tic_tac_toe_rules'
                />
            </Grid>
            <Grid item xs={6} >
                <GameCard
                    title="The 15 Game"
                    image={FifteenGameScreenshot}
                    to='/fifteen_rules'
                />
            </Grid>
        </Grid>
    )
}

function GameCard(props) {
    const classes = useStyles();
    let { title, image, to } = props

    return (
        <Card className={classes.cardRoot} >
            <CardHeader 
                title={title}
                className={classes.cardTitle}
                titleTypographyProps={{
                    variant: "h5",
                    align: "center"
                }}
            />
            <CardMedia 
                image={image}
                className={classes.cardImage}
            />
            <Button
                className={classes.cardButton}
                variant="contained"
                color="primary"
                component={RouterLink}
                to={to}
                style={{ fontSize: "1.25rem", textTransform: "none" }}
            >
                Play Now!
            </Button>
        </Card>
    )
}

function TeachingNotes(params) {
    return (
        <React.Fragment>
            <Typography align='left' variant='h4' color='textPrimary' gutterBottom >
                Teaching Notes
            </Typography>
            <Typography variant='body1' style={{ paddingBottom: "1rem" }} >
                There is something here for learners of all ages and experience levels!  <br/> 
                The Rules page for each game includes tips for teachers on how to use this App in math class.
            </Typography>
        </React.Fragment>
    )
}

function BehindTheScenes() {
    return (
        <Box style={{ paddingBottom: "5rem" }} >
            <Typography align='left' variant='h4' color="textPrimary" gutterBottom >
                Behind the Scenes
            </Typography>
            <Typography variant='body1' gutterBottom >
                This lesson is built with code that is open-source and available on my <a href="https://github.com/nolastemgarden">Github</a> page.
                If you have something to suggest, a bug to report, or you simply want to dig into the code to see how it works you are welcome visit the&emsp;
                <a href="https://github.com/nolastemgarden/tic-tac-toe-and-the-fifteen-game">repository</a> or to open an issue.
            </Typography>
        </Box>
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