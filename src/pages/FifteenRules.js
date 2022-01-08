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
    Card, 
    CardActionArea, 
    CardMedia, 
    CardHeader } from '@material-ui/core'

// Images
import botEmoji from "../images/robot_emoji.png";
import childEmoji from "../images/child_emoji.png";
import teacherEmoji from "../images/teacher_emoji.png";

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
        backgroundColor: "#fff"
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

export default function FifteenRulesPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar pageTitle={"The 15 Game"} />
            <Container className={classes.scrollingContainer} maxWidth='sm' >
                <Typography align='center' color='textPrimary' variant='h2' gutterBottom >
                    The Fifteen Game
                </Typography>

                <CardGrid />
                
                <Typography align='left' variant="h4" color='textPrimary' gutterBottom >
                    Rules of Play
                </Typography>
                <Typography align='justify' variant='body1' color='textPrimary' gutterBottom >
                    The Fifteen Game is a two-player turn-based game. 
                    Though it is traditionally played with a set of cards numbered one through nine, it can just as easily be
                    played with paper and pencil. Each time it is their turn a player must claim one of the remaining numbered cards.
                </Typography>
                <Typography align='justify' variant='body1' color='textPrimary' gutterBottom >
                    Each time it is their turn a player must claim one of the remaining numbered cards. Both players have the same goal:
                    be first to collect a set of exactly Three cards that adds up to exactly Fifteen.
                </Typography>
                <Typography align='justify' variant='body1' color='textPrimary' style={{ paddingBottom: "1.5rem"}} >
                    You may collect more than three cards, play continues until all nine cards are claimed.
                    If you do collect more than three cards you will have to ignore any extras when looking for winning combos.
                    If all nine cards are claimed and neither player has a three-card subset that sums to 15 then the game ends a draw.
                </Typography>

                <Typography align='left' variant='h4' color='textPrimary' gutterBottom >
                    Examples
                </Typography>
                <Typography align='justify' variant='body1' color='textPrimary' gutterBottom >
                    Taking the 6 and the 9 does NOT win because even though they add up to 15 it is only TWO cards.
                </Typography>
                <Typography align='justify' variant='body1' color='textPrimary' gutterBottom >
                    Taking the 1, 3, 4, and 7 does NOT win because even though they add up to 15 it is a FOUR card set.
                </Typography>
                <Typography align='justify' variant='body1' color='textPrimary' gutterBottom >
                    Taking the 6, 7, and 8 does NOT win because they add up to MORE than 15.
                </Typography>
                <Typography align='justify' variant='body1' color='textPrimary' gutterBottom >
                    Taking the 1, 5, and 9 does WIN even if you have claimed additional cards because those three add up to exactly 15.
                    For the same reason 2, 6, and 7 is a winning combo.
                </Typography>
                <Typography align='justify' variant='body1' color='textPrimary' gutterBottom >
                    Bonus Questions: How many different three card combinations are there total? How many of them sum to 15?
                </Typography>
                

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

function CardGrid() {
    return (
        <Grid container spacing={3} style={{ paddingBottom: "2rem" }}  >
            <Grid item xs={1} />
            <Grid item xs={5} >
                <GameCard
                    title="Play vs. Human"
                    image={childEmoji}
                    to='/fifteen_vs_human'
                />
            </Grid>
            <Grid item xs={5} >
                <GameCard
                    title="Play vs. Bot"
                    image={botEmoji}
                    to='/fifteen_vs_bot'
                />
            </Grid>
            {/* <Grid item xs={4} >
                <GameCard
                    title="Play vs. Bot"
                    image={botEmoji}
                    to='/fifteen_rules'
                />
            </Grid> */}
        </Grid>
    )
}

function GameCard(props) {
    const classes = useStyles();
    let { title, image, to } = props

    return (
        <Card 
            className={classes.cardRoot} 
        >
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
                component={RouterLink}
                to={to}
            />
        </Card>
    )
}


// <Typography align='left' variant='h6' color='textPrimary' gutterBottom >
//                 Tic-Tac-Toe for Elementary Grades
//             </Typography>
//             <Typography variant='body1'  gutterBottom >
//                 Kids as young as 1st grade have long enjoyed this classic paper and pencil game. 
//                 Most children get pretty good at the game by the time they have played a few dozen rounds.
//                 At this point I like to challenge them to find (and write down) a step by step strategy that will guarantee them a win as long as they get to go first. 
//                 Leave students to their own devices for a while to invent ways of writing down their moves and organizing their thoughts.
//                 Once they have had plenty of opportunity for creative struggle you may introduce them to tree diagrams and to systems of notation that assign a name to each cell.
//             </Typography>
//             <Typography align='left' variant='h6' color='textPrimary' gutterBottom >
//                 The 15 Game for Elementary Grades
//             </Typography>
//             <Typography variant='body1' gutterBottom >
//                 Kids as young as 1st grade have long enjoyed this classic paper and pencil game.
//                 Most children get pretty good at the game by the time they have played a few dozen rounds.
//                 At this point I like to challenge them to find (and write down) a step by step strategy that will guarantee them a win as long as they get to go first.
//                 Leave students to their own devices for a while to invent ways of writing down their moves and organizing their thoughts.
//                 Once they have had plenty of opportunity for creative struggle you may introduce them to tree diagrams and to systems of notation that assign a name to each cell.
//             </Typography>


//             <Typography align='left' variant='h6' color='textPrimary' gutterBottom >
//                 Tic-Tac-Toe as an Intro to Proof
//             </Typography>
//             <Typography variant='body1'  gutterBottom >
//                 By the time they have played a few dozen rounds of Tic-Tac-Toe, most children have gotten pretty good at the game.
//                 At this point I like to challenge them to find (and write down) a strategy that will guarantee them a win
//                 every time, as long as they get to make the first move. First let students invent their own ways of writing down move orders and organizing their thoughts.
//                 Once they have had a chance to get creative and to struggle you may introduce them to tree diagrams and to systems of notation assign a letter name to each cell.
//             </Typography>
//             <Typography variant='body1'  gutterBottom >
//                 Generally, students will come up with a few different strategies that they think guarantee a win, but one by one
//                 counterexamples will be found and most kids will eventually intuit that this is an impossible task.
//                 At this point I modify the objective: If you think there is no strategy that guarantees a win, then prove that instead!
//                 Prove that you can at get a draw in the worst case no matter what moves your opponent makes when they go first.
//             </Typography>
//             <Typography variant='body1'  gutterBottom >
//                 The point here is that we will not settle for a final answer that is just based on intuition.
//                 Tic Tac Toe is a classic game with a reputation for being one of the simplest strategy games, but this reputation causes many folks to
//                 underestimate its depth. It is very common for people to asume that they have fully mastered Tic-Tac-Toe just because they know a way to never lose,
//                 but a true master plays both offens and defense. Just because you can't force your opponent to lose doesn't mean you should let your guard down: unforced errors happen all the time!
//             </Typography>