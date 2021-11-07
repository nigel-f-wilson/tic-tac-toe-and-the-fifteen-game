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
    button: {
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center',
        width: '95%',
    }, 
}));

export default function WelcomePage() {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <AppBar position='sticky' >
                <Navbar pageTitle={"Welcome"} />
            </AppBar>
            <Container maxWidth='md' >
                <Box p={2} />
                <Typography align='center' color='textPrimary' component='h1' variant='h3' gutterBottom >
                    A Math Lesson in Disguise
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    Mathematical thinking has a playful side. 
                    In fact, there are whole branches of study known as "game theory" and "recreational mathematics". 
                    Sadly, this side of mathematics has been excluded from many primary and secondary school curriculums by folks who
                     think we don't have enough time in the school day to teach anything but the "fundamentals".
                    The result of this approach is that many kids give up on learning math before they get to "the good part". 
               </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    This project seeks to counteract that trend by using two simple strategy games to introduce two of the most important concepts in math.
                    One of these games is likely familiar to you, the other is probably not. 
                    They both have a surprising amount to teach, if you play along.
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    This lesson has something to offer students of all experience levels.
                    Kids of Elementary School age can use it to practice their fluency at mentally computing sums and differences.
                    Middle School aged kids will learn about combinations and permutations as they build their tree diagrams and consider all the
                    possible things that could happen next. 
                    High School aged kids will learn what it means to write a rigorous proof and can apply their algebra skills to create a Magic Square from scratch.
               </Typography>
                <Box width="100%" mb={3} >
                    <Grid container spacing={2} >
                        <Grid item xs={0} sm={2} />
                            
                        <Grid item xs={12} sm={4} >
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                component={RouterLink}
                                to='/tic_tac_toe_rules'
                            >
                                Tic Tac Toe
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                component={RouterLink}
                                to='/fifteen_rules'
                            >
                                The Fifteen Game
                            </Button>
                        </Grid>
                        <Grid item xs={0} sm={2} />

                    </Grid>
                </Box>

                {/* <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom >
                    Tic-Tac-Toe: An Introduction to Proof Writing
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    By the time they have played Tic-Tac-Toe a few dozen times most children have gotten pretty good at the game. 
                    At this point I like to challenge them to find (and write down) a strategy that will guarantee them a win 
                    every time, as long as they get to make the first move. 
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
                    definition of the word "mistake".  Exploring possibilities, finding counterexamples, developing new forms of notation, 
                    and formulating definitions... This IS what doing Math involves.
                </Typography> */}
                
                {/* <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom >
                    The Fifteen Game: Similarity Beneath the Surface
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    Many problems can be solved with less work if, instead of starting from scratch, you look for similarities between the problem 
                    at hand and other problems that have already been solved.
                    Two real-world problems may seem unrelated at first even though at a deeper level they are behaving according to the same 
                    underlying patterns. Being familiar with mathematics makes you better at noticing when this is the case!
                    Experience this for yourself by playing the two game featured here. 
                    Though the two games feel nothing alike when you first play them, the Fifteen Game is startegically identical to Tic-Tac-Toe. 
                    If you have mastered Tic-Tac-Toe but still find yourself losing to my bot ath the Fifteen Game then I suggest looking into "Magic Squares".
                </Typography> */}


                <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom >
                    Behind the Scenes
                </Typography>
                <Typography variant='body1' color='textPrimary' className={classes.paragraph}>
                    This lesson is built with code that is open-source and available on my <a href="https://github.com/nolastemgarden">Github</a> account,
                    so if you have something to add, a bug to report, or simply want to see how it works you are welcome to open an issue or &nbsp;
                    <a href="https://github.com/nolastemgarden/tic-tac-toe-and-the-fifteen-game">clone the repository</a>!
                </Typography>
                <Box p={5} />
            </Container>
        </React.Fragment>
    );
}



// <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
//     Mathematics is not just a bunch of rules to memorize, it is an expression of human creativity that has
//     been added to by every civilization around the world and throughout time.
//     Humans have been doing math for a long time (about 20 thousand years) and yet the subject is still growing.
//     with new theorems being proven every year. Mathematical proofs can be beautiful and elegant, but this
//     can be difficult to pick up on for someone with an untrained eye because proofs are often written in a way
//     that involves a lot of abstraction and formality.
// </Typography>

// Just like a musician expresses their creativity in a song, a mathematician expresses their creativity in a
// logical argument.As with songs, there are proofs that are considered classic, there are those that are seen as
//     modern innovations on the classics, and others that are competely novel.
// <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom >
//     Defining Your Terms
// </Typography>
// <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
//     In this lesson we will use certain words that we have and intuitive grasp on: mistake, threat, double-attack. We need to go beyond our intuitive 
//     understanding of these words and define them in a precice way. I leave writing and refining these definitions as an exercise for the student. 
//     Keep in mind, a good definition is an "if and only if" statement, it outlines the conditions which are both necessary and sufficient. 
// </Typography>
// <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom >
//     Proof on Paper
// </Typography>
// <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
//     It may take you several pages, but you can prove using an exhaustive tree-diagram that in classic Tic-Tac-Toe both players worst case scenario
//     if they avoid making any mistakes is a draw. If you get stuck or want to check your answers, take a look at the "Learn Tic Tac Toe Strategy" page.
// </Typography>
// <Typography align='left' color='textPrimary' component='h4' variant='h4' gutterBottom >
//     Taking It Further
// </Typography>
// <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
//     Is it possible for the player who goes first to make a mistake on the first move of the game? 
//     Is is possible for the player who goes second to make a mistake on their first move?
// </Typography> 


{/* <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    1) All Mathematics starts out with a limited set of simple assumptions and builds upon that foundation by putting 
                    those pieces together in creative ways to prove more complex ideas must be true. As Jordan Ellenberg put it, 
                    "Mathematics is the extension of of common sense by other means."
                </Typography>
                <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                    2) Mathematics strips away the messy "real world" parts of problems and looks for
                    patterns in the inner workings of things. We can deepen our understanding of what seems to be an unfamiliar
                    situation by looking for ways that it is similar to a more familiar situation beneath the surface.
                </Typography> */}

{/* <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
    At its core, Mathematics is about looking for patterns and trying to explain with logic why those patterns must be true.  
</Typography>


<Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
    In math class, the art of writing proofs is often introduced in a needlessly confusing way. 
    It is usually mixed into a lesson that also introduces lots of new technical jargon deaing with similar and congruent triangles. 
    I think that kids schould be introduced to the art of writing really thorough and persuasive arguments in a context that is more familiar. 
</Typography> */}




// <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
//     Proof is the foundation that all Mathematics sits upon, but the practice of writing "proofs" is often
//     taught in a needlessly confusing way. In American schools, students are typically asked to write their first
//     proofs in the context of a geometry class, at the same time as they are being introduced to a lot of new
//     concepts and vocabulary dealing with similar and congruent triangles. This results in people never really 
//     coming to understand how a proof is different than a plausible explanation or meerly "showing your work". 
// </Typography>
// <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
//     Proof should be introduced in a context that is simple and familiar. My favorite way to introduce the concept 
//     of proof makes use of the classic game Tic Tac Toe. I challenge you to write down a detailed stategy that 
//     one player or the other can use to win every time. If you think no such winning strategy exists, then prove that 
//     instead, that the best outcome either player can ensure is a draw.
// </Typography>
// <Typography paragraph align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
//     This can be done with nothing more than pencil and paper! It will take several pages and it will challenge your 
//     ability to organize your thoughts. It's going to take more than just playing lots of games and recording the results. 
//     Even if you win a thousand games in a row, that does not prove you have a winning strategy, just that you have an 
//     opponent who doesn't learn their lesson. To actually prove you have a winning strategy you will have to examine every 
//     possibility, not just the ones a particular opponent plays. Making a tree-diagram that maps out all variations will help 
//     you ensure that you have not overlooked any possible moves. There are shortcuts you can take based on symmetry. You may 
//     find it helpful to develop your own shorthand notation for a position. You will certainly need to come up with a precice 
//     definition of the word "mistake".
// </Typography>