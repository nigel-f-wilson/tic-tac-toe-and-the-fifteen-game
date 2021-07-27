import React from 'react';

import { gameOverUsingStatus } from "../../../logic/GameLogic";

// MUI Components
import Typography from '@material-ui/core/Typography';

export default function StatusHeader(props) {
    const gameOver = gameOverUsingStatus(props.status)
    const gameNumber = props.gameNumber
    return gameOver ? "":
        <Typography color = "textPrimary" align = 'center' component = 'h1' variant = 'h4' noWrap gutterBottom>
            Game&nbsp;{ gameNumber }:
        </Typography>
    
}
