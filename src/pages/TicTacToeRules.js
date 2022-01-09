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

function TeachingTips() {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom style={{ paddingTop: "1.5rem" }} >
                Teaching Tips
            </Typography>
            <Typography paragraph align='justify' component='p' variant='body1' gutterBottom >
                The Fifteen Game has something to offer for students of all ages and at levels of mathematical training.
                Each round only takes takes a few minutes to play, making it an ideal for a brain-break activity during class.
                If you want to set up a bracket and have a class-wide or school-wide championship tournament, I recommend the free tool available at <a href="https://brackethq.com/" >Bracket HQ</a>.
            </Typography>

            <Typography align='left' variant='h4' color='textPrimary' gutterBottom >
                Elementary School
            </Typography>
            <Typography align='left' variant='h6' color='textPrimary' gutterBottom >
                Mental Math Fluency and Thinking Out Loud
            </Typography>
            <Typography paragraph align='justify' component='p' variant='body1' gutterBottom >
                For students at the Elementary level, The Fifteen Game is a fantastic way to build automaticity at mentally computing sums and differences within 20 (a 1st grade standard).
                Even for students who have mastered basic addition, trying to formulate strategies that involve offence and defense will push them to a new depth of understanding.
                Make note of the pairs that add up to 10 and the fact that any of these four pairs is enough to win if you get the 5.
                Be sure to get kids talking! Thinking out loud is a valuable life skill that games like this are excellent tools for teaching.
                Keep playing against the bot in "Easy" mode until you can win well over half the time.
            </Typography>

            <Typography align='left' variant='h4' color='textPrimary' gutterBottom >
                Middle School
            </Typography>
            <Typography align='left' variant='h6' color='textPrimary' gutterBottom >
                Combinations and Permutations
            </Typography>
            <Typography paragraph align='justify' component='p' variant='body1'  >
                Students at the Middle School level who have already gained a feel for the game can take there understanding to the next level by exploring questions like:
                <br /> &#8226; &nbsp; How many different three card combinations are there total?
                <br /> &#8226; &nbsp; How many of those combinations sum to 15?
                <br /> &#8226; &nbsp; What are the sums of all the combinations that don't sum to 15?
                <br /> &#8226; &nbsp; Would this game be fun to play with a different targt number than 15?
            </Typography>
            <Typography paragraph align='justify' component='p' variant='body1' gutterBottom >
                Entertaining questions like these will set kids up to learn about combinations and permutations. Once they have answered all of the above questions
                you can inform kids that the Fifteen Game is actually Tic Tac Toe in disguise. Don't explain how though! As teachers we have to withold
                some information to teach kids how to go get what they want with their own research!
            </Typography>

            <Typography align='left' variant='h4' color='textPrimary' gutterBottom >
                High School: Similarity Beneath the Surface
            </Typography>
            <Typography align='left' variant='h6' color='textPrimary' gutterBottom >
                Combinations and Permutations
            </Typography>
            <Typography paragraph align='justify' component='p' variant='body1' gutterBottom >
                Many problems can be solved with less work if, instead of starting from scratch, you look for similarities between the problem
                at hand and other problems that you already know how to solve. Have you <em>mastered</em> Tic Tac Toe to the point where you
                never lose and also never miss a chance to win when you opponent slips up?  Does the bot still get the best of you at the 15 game
                occasionally? Well you know by now that these two games are the same, make yourself a visual aide!
            </Typography>
            <Typography paragraph align='justify' component='p' variant='body1' gutterBottom >
                Magic Squares are an ancient mathematical curiosity. They can be made in many sizes but here is what you will be trying to create:
                <br /> &#8226; &nbsp; A three by three grid that has each of the numbers 1 through 9 in it one time each.
                <br /> &#8226; &nbsp; The three digits in each row, column, and diagonal must add up to 15.
                <br /> Start listing combos and put your algebra and logical deduction skills to work! What can you proove as you go?
                There is more than one way to complete this task but ask yourself things like:
                <br /> &#8226; &nbsp; What is special about the center cell? Which numbers can go there?
                <br /> &#8226; &nbsp; What do all the numbers that go in corners have in common?
            </Typography>
        </React.Fragment>
    )
}









// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         minHeight: 'calc(100vh - 4rem)',
//         overflowY: "scroll",
//         display: 'flex',
//         flexDirection: 'column',
//         color: theme.palette.common.white,
//         padding: '1.0rem',
//     },
//     button: {
//         backgroundColor: theme.palette.primary.main,
//         textAlign: 'center',
//         width: '95%',
//     },
// }));

function FifteenRulesPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar pageTitle={"Play Tic Tac Toe"} />
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
                    Both players seek to get a three-in-a-row, to have their mark in all three cells in a any row, column,
                    or diagonal. If the whole grid is filled and neither player has managed to get a three-in-a-row then the game
                    ends a draw.
                </Typography>
                <Box width="100%" mb={3} >
                    <Grid container spacing={2} mb={3} >
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
                <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom >
                    Using Tic Tac Toe in a Math Class
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    All of mathematics is based on Proofs: Written logical arguments that leave no room for doubt.  
                    The art of writing proofs is often introduced in a needlessly confusing way in school. 
                    It is usually mixed into a geometry lesson that also introduces lots of new technical jargon deaing with similar and congruent triangles.
                    I think that kids should be introduced to the art of writing thorough and persuasive mathematical arguments 
                    in a context that is more familiar to them so that the beauty of what a proof is doesn't get lost in a pile of new vocabulary words.
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

                {/* <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    In this app you can play in Human vs. Human mode on a shared device. You can play against my Bot 
                    in threee different difficulty settings. Finally, you can play with a bot that will coach you.  
                    The coach offers verbal commentary for what a player should look out for in a given position. 
                    If you click "Show Hints" the coach will color code the remaining squares to indicate which moves
                     lead to a win, loss, and draw. This is a "complete solution" to the game.
                </Typography>
                <Box p={5} /> */}
            </Container>
        </React.Fragment>
    );
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