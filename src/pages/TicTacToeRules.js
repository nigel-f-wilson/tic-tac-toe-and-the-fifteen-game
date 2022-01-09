import React from 'react';

import {
    Link as RouterLink,
} from "react-router-dom";

// My Components
import Navbar from "../components/Navbar/Navbar"

// MUI  components
import {
    Box,
    Container,
    Grid,
    Button,
    Typography,
} from '@material-ui/core'
import Icon from '@material-ui/core/Icon';

// Custom Styling
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    scrollingContainer: {
        overflowY: "scroll",
        "scrollbarWidth": "none",       /* Firefox */
        "MsOverflowStyle": "none",      /* IE and Edge */
        "::WebkitScrollbar": {          /* Hide scrollbar for Chrome, Safari and Opera */
            display: "none"
        }
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

export default function TicTacToeRulesPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar pageTitle={"Tic Tac Toe"} />
            <Container className={classes.scrollingContainer}
                maxWidth='sm'
                style={{
                    "scrollbarWidth": "none",       /* Firefox */
                    "MsOverflowStyle": "none",      /* IE and Edge */
                    "::WebkitScrollbar": {          /* Hide scrollbar for Chrome, Safari and Opera */
                        display: "none"
                    }
                }}
            >
                <Title />
                <PlayModeIconGrid />
                <Rules />
                <TeachingTips />
            </Container>
        </React.Fragment>
    );
}

function Title() {
    return (
        <Typography align='center' color='textPrimary' variant='h1' gutterBottom style={{ paddingTop: "2rem" }} >
            Tic Tac Toe
        </Typography>
    )
}
function PlayModeIconGrid() {
    return (
        <Grid container spacing={5} style={{ marginBottom: "2rem" }}  >
            <Grid item xs={4} >
                <IconCard
                    title="Play vs. Human"
                    to='/tic_tac_toe_vs_human'
                    iconClassName="fas fa-user-friends"
                />
            </Grid>
            <Grid item xs={4} >
                <IconCard
                    title="Play vs. Bot"
                    to='/tic_tac_toe_vs_bot'
                    iconClassName="fas fa-robot"
                />
            </Grid>
            <Grid item xs={4} >
                <IconCard
                    title="Play with Coach"
                    to='/tic_tac_toe_with_coach'
                    iconClassName="fas fa-graduation-cap"
                />
            </Grid>
        </Grid>
    )
}
function IconCard(props) {
    const classes = useStyles();
    let { title, to, iconClassName } = props

    return (
        <Button
            component={RouterLink}
            to={to}
            fullWidth
            style={{
                border: "solid white 1px",
                backgroundColor: "black",
                height: "12rem",
            }}
        >
            <Box style={{ display: "flex", flexDirection: "column", alignItems: 'center' }} >
                <Typography
                    children={title}
                    variant="h5"
                    gutterBottom
                    align="center"
                />
                <Icon className={iconClassName}
                    classes={{ root: classes.icon }}
                    style={{
                        width: "10rem",
                        fontSize: "6rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: 'center'
                    }}
                />
            </Box>
        </Button>
    )
}
function Rules() {
    return (
        <React.Fragment>
            <Typography align='left' variant="h4" color='textPrimary' gutterBottom >
                Rules of Play
            </Typography>
            <Typography align='justify' variant='body1' color='textPrimary' gutterBottom >
                Tic-Tac-Toe is most often played as a paper and pencil game.
                Two players, one using X's and the other using O's, take turns marking one cell in a three-by-three grid.
                Both players seek to get a three-in-a-row, to have their mark in all three cells in a any row, column,
                or diagonal. If the whole grid is filled and neither player has managed to get a three-in-a-row then the game
                ends a draw.
            </Typography>
        </React.Fragment>
    )
}

function TeachingTips() {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom style={{ paddingTop: "1.5rem" }} >
                Teaching Tips
            </Typography>
            <Typography paragraph align='justify' component='p' variant='body1' gutterBottom >
                Young kids have long enjoyed this classic paper and pencil game.
                By the time they have played a few dozen rounds, most children get pretty good at it. 
                Most people never come close to exploring the full depth of Tic Tac Toe because they start getting bored 
                of it when they realize that most games end in a draw.  Do not under estimate this classic game!
            </Typography>

            <Typography align='left' variant='h4' color='textPrimary' gutterBottom >
                Elementary School
            </Typography>
            <Typography align='left' variant='h6' color='textPrimary' gutterBottom >
                Articulate Strategy
            </Typography>
            <Typography paragraph align='justify' component='p' variant='body1' gutterBottom >
                I like to give my students in elementary school bonus questions at the end of math tests and Tic Tac Toe Tactics puzzles are 
                a favorite genre of bonus question.  Present positions where each player has made between 1 and 3 moves and ask questions like,
                "What move could X make to create a double attack?" or "How many asymetrical choices does O hav in this position? Which are good and which are bad moves?"
            </Typography>

            <Typography align='left' variant='h4' color='textPrimary' gutterBottom >
                Middle School
            </Typography>
            <Typography align='left' variant='h6' color='textPrimary' gutterBottom >
                Develop Notation and Use Diagrams
            </Typography>
            <Typography paragraph align='justify' component='p' variant='body1'  >
                Around Middle School I like to challenge kids to find (and write down) a step by step strategy that will guarantee 
                them a win in every game of Tic Tac Toe they play as long as they get to go first.
                Once this challenge has been posed, leave students to their own devices for a while to invent ways
                of writing down their moves and organizing their thoughts.
            </Typography>
            <Typography paragraph align='justify' component='p' variant='body1' gutterBottom >
                Once they have had plenty of opportunity for creative struggle, you may introduce them to tree diagrams as a way to 
                organize their thinking. Each node on the tree represents a possible position. Each branch off of that node represents 
                one of the legal moves the player whose turn it is has to choose from. 
                Each layer of the tree represents a turn in the game. This is a great start, but solving the whole game this way using 
                tiny drawings of game positions will take many pages worth of paper. There are at least two things we can do to make our 
                solution take up leass space:
            </Typography>
            <Typography align='left' variant='h6' color='textPrimary' gutterBottom >
                Develop a System of Notation
            </Typography>
            <Typography paragraph align='justify' component='p' variant='body1'  >
                Rather than drawing tiny tic tac toe boards at every node of your tree diagram try assigning a name or a number to each 
                square on the board and write down just the last move that was made at each node.
            </Typography>
            <Typography align='left' variant='h6' color='textPrimary' gutterBottom >
                Consider Symmetry
            </Typography>
            <Typography paragraph align='justify' component='p' variant='body1'  >
                How many different ways is it possible for a game of tic tac toe to play out? On the first move of the game X has 9 choices and 
                on the second O had 8. Multipliying 9 x 8 x 7 x ... x 2 x 1 gives us 362880.  That is also known as "nine factorial" or "9!".
                In any case, it is a lot of possible games to be examining!  But consider this: Does in make a difference <em>which</em> corner 
                X chooses on their first turn? No! X can start by taking a Corner, and Edge, or the Center.  It may look like 9 options but really 
                it is only 3 when we consider symmetry. We are avoiding duplicating work. Considering symmetry on just the first two moves of the 
                game cuts the number of possible positions we have to consider all the way down to 60480 or one sixth as many!
                It is ok if your middle schoolers do not ultimately succeed at constructing a complete solution tree for tic tac toe, but make 
                sure that this task is put aside in a way that lets kids know it will be revisited later on when they are better equipped.
            </Typography>


            <Typography align='left' variant='h4' color='textPrimary' gutterBottom >
                High School
            </Typography>
            <Typography align='left' variant='h6' color='textPrimary' gutterBottom >
                Intro to Formal Proof
            </Typography>
            <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                All of mathematics is based on Proofs: Written logical arguments that leave no room for doubt.
                The art of writing proofs is often introduced in a needlessly confusing way in school.
                It is usually mixed into a geometry lesson that also introduces lots of new technical jargon dealing with similar and congruent triangles.
                I think that kids should be introduced to the art of writing thorough arguments
                in a context that is more familiar to them so that the beauty of what a proof is doesn't get lost in a pile of new vocabulary words.
            </Typography>
            <Typography variant='body1' gutterBottom >
                When students are challenged to articulate a winning strategy for Tic Tac Toe they generally will come up with a few different 
                proposals. One by one, they or their classmates will find counterexamples for each one. 
                Eventually kids will intuit that this is an impossible task.
                At this point, modify the objective: If you think there is no strategy that guarantees a win, then prove that instead!
                Prove that you can get a draw in the worst case no matter what moves your opponent makes.
            </Typography>
            <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                Finding an actual proof is going to take more than just playing lots of games and recording the results.
                Even if you won a thousand games in a row, that does not prove you have a winning strategy, just that you have an
                opponent who's not learning from their mistakes. 
            </Typography>
            <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                The point here is that we will not settle for a final answer that is just based on intuition.
                Tic Tac Toe is a classic game with a reputation for being one of the simplest strategy games,
                but this reputation causes many folks to underestimate its depth. It is very common for people
                to asume that they have fully mastered Tic-Tac-Toe just because they know a way to never lose,
                but a true master plays both offense and defense. Just because you can't force a win from starting
                position doesn't mean you should give up looking for ways to win. Unforced errors happen all the time!
            </Typography>
            
        </React.Fragment>
    )
}

