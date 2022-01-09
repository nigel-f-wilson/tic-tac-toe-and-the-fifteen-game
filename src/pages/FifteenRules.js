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

export default function FifteenRulesPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar pageTitle={"The 15 Game"} />
            <Container className={classes.scrollingContainer} 
                maxWidth='sm' 
                style={{
                    "scrollbarWidth": "none",       /* Firefox */
                    "MsOverflowStyle": "none",      /* IE and Edge */
                    "::WebkitScrollbar": {          /* Hide scrollbar for Chrome, Safari and Opera */
                        display: "none"
                    }}}
            >
                <Title />
                <PlayModeIconGrid />
                {/* <CardGrid /> */}
                <Rules />
                <TeachingTips /> 
            </Container>
        </React.Fragment>
    );
}

function Title() {
    return (
        <Typography align='center' color='textPrimary' variant='h1' gutterBottom style={{ paddingTop: "2rem" }} >
            The Fifteen Game
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
                The Fifteen Game is a two-player turn-based game.
                It is traditionally played with a set of numbered cards but it can easily be adapted for
                paper-and-pencil play. Each turn a player must claim one of the remaining numbered cards. 
            </Typography>
            <Typography align='left' variant="h6" color='textPrimary' gutterBottom >
                Winning
            </Typography>
            <Typography align='justify' variant='body1' color='textPrimary' style={{ paddingBottom: "1rem" }} >
                Both players have the same goal: be first to collect a set of exactly Three cards that adds up to exactly Fifteen.
                You may collect more than three cards, play continues until someone wins or all nine cards are claimed.
                If you do collect more than three cards you will have to ignore any extras when looking for winning combos.
                If all nine cards are claimed and neither player has a three-card subset that sums to 15 then the game ends a draw.
            </Typography>
            <Typography align='left' variant='h6' color='textPrimary' gutterBottom >
                Examples
            </Typography>
            <Typography align='justify' variant='body1' color='textPrimary' gutterBottom >
                &#8226; &nbsp; Taking the 6 and 9 does NOT win. They add to 15, but it is only <u>two</u> cards.
                <br /> &#8226; &nbsp; Taking 1 3 4 7 does NOT win. Though they sum to 15, it is <u>four</u> cards.
                <br /> &#8226; &nbsp; Taking 6 7 8 does NOT win because they add up to <u>more</u> than 15.
                <br /> &#8226; &nbsp; Taking 2 6 7 does WIN even if you have claimed additional cards.
                <br /> &#8226; &nbsp; Other examples of winning combos:&nbsp;&nbsp;2 5 8&nbsp;&nbsp;and&nbsp;&nbsp;1 6 8
            </Typography>
        </React.Fragment>
    )
}

function PlayModeIconGrid() {
    return (
        <Grid container spacing={5} style={{ marginBottom: "2rem" }}  >
            <Grid item xs={1} />
            <Grid item xs={5} >
                <IconCard
                    title="Play vs. Human"
                    to='/fifteen_vs_human'
                    iconClassName="fas fa-user-friends"
                />
                
            </Grid>
            <Grid item xs={5} >
                <IconCard
                    title="Play vs. Bot"
                    to='/fifteen_vs_bot'
                    iconClassName="fas fa-robot"
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
                    variant="h4"
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
            <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom style={{ paddingTop: "1.5rem"}} >
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
            <Typography paragraph align='justify'  component='p' variant='body1'  >
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
