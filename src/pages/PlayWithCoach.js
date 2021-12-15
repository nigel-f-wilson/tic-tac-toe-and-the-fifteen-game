import React, { useState } from 'react';

// My Logical Components
// import positionToOutcomeMap from "../pages/positionToOutcomeMap";
import { gameOver, generatePositionToOutcomeMap } from "../logic/GameLogic";

// My React Components
import Navbar from "../components/Navbar/Navbar"
import TicTacToeBoard from "../components/Boards/TicTacToeBoard";
import CoachPanel from "../components/Panels/CoachPanel";

// MUI  components
import Box from '@material-ui/core/Box';

// Custom Styling
import '../styles/TicTacToe.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100vh',
        overflowY: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    },
    navbarArea: {
        // border: 'solid blue 1px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flex: '0 0 5vh',
        maxHeight: '5vh'
    },
    boardArea: {
        // border: 'solid green 1px',
        display: 'flex',
        flex: '0 0 50vh',
        justifyContent: 'center',
        paddingTop: '0.5rem'
    },
    panelArea: {
        // border: 'solid red 1px',
        color: theme.palette.common.white,
        backgroundColor: theme.palette.common.black,
        display: 'flex',
        alignItems: 'center',
        flex: '0 0 35vh',
        // maxHeight: '30vh'

    },
}));

// In Play With Coach mode X always goes first

export default function PlayWithCoach(props) {
    const outcomeMap = generatePositionToOutcomeMap()

    const classes = useStyles();
    // const xGoesFirst = true  // X always goes first in Play with Coach Mode

    let startingPosition = ""  // vs []
    let [moveList, setmoveList] = useState(startingPosition);

    let [showHints, setShowHints] = useState(false);
    // let [showHints, setShowHints] = useState(true);

    return (
        <Box className={classes.root} >
            <Box className={classes.navbarArea}>
                <Navbar pageTitle="Tic Tac Toe Coach" />
            </Box>

            <Box className={classes.boardArea}>
                <TicTacToeBoard
                    moveList={moveList}
                    showHints={showHints}
                    handleBoardClick={handleBoardClick}
                    outcomeMap={outcomeMap}

                />
            </Box>
            <Box className={classes.panelArea}>
                <CoachPanel
                    moveList={moveList}
                    showHints={showHints}
                    toggleShowHints={toggleShowHints}
                    handleUndoClick={handleUndoClick}
                    outcomeMap={outcomeMap}
                />
            </Box>
        </Box>
    )

    
    // CLICK HANDLERS
    function handleBoardClick(squareClicked) {
        if (gameOver(moveList)) {
            console.log("return without effects from handleSquareClick(). The Game is already over.")
            return;
        }
        if (moveList.includes(squareClicked)) {
            console.log("return without effects from handleSquareClick(). That square has already been claimed.")
            return;
        }
        // If we reach this point the clicked square is open and the game is not over yet ... 
        let updatedMoveList = moveList.concat(squareClicked)
        console.log(`MoveList: ${updatedMoveList}`)

        setmoveList(updatedMoveList);
        // This function does not pass along any of its results, it acts thru side-effects. It calls setHistory and use of that hook tells React it needs to re-render all components that depend on the state "history".
    }
    function handleUndoClick() {
        const shortenedMoveList = moveList.slice(0, moveList.length - 1)
        console.log(`handleUndoClick() removed ${moveList[moveList.length - 1]} . New Shortened history: ${shortenedMoveList}`);
        setmoveList(shortenedMoveList);
    }
    // function handleNewGameClick() {
    //     setmoveList(startingPosition);
    // }
    function toggleShowHints() {
        setShowHints(!showHints)
    }
}
