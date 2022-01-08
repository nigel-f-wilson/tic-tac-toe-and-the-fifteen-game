import {
    createTheme,
    responsiveFontSizes,
} from '@material-ui/core/styles';

const white = "#FFF"

const theme = createTheme({
    palette: {
        primary: {
            light: '#669944',
            main: '#2e6b12',
            dark: '#004000',
            contrastText: white
        },
        secondary: {
            light: white,
            main: '#669944',
            dark: '#777777',
            contrastText: white
        },
        text: {
            primary: white,
            secondary: '#000000'
        },
        action: {
            disabledBackground: '#2e6b12',
            disabledOpacity: '0.5'
        },
        playerOne: {
            backgroundColor: '#ffd600',
            text: '#000'
        }, 
        playerTwo: {
            backgroundColor: '#2962ff',
            text: white
        }, 
    },
    typography: {
        h4: {
            lineHeight: 1,
            fontSize: "2.125rem"
        },
        h5: {
            lineHeight: 1,
            fontSize: "1.8rem"

        },
        h6: {
            lineHeight: 1,
            fontSize: "1.6rem",
            fontWeight: 400

        },
        body1: {
            color: white
        }
    },
    status: {
        danger: 'orange',
    },
    shape: {
        borderRadius: 8,
    },
    spacing: 8,

});

export default responsiveFontSizes(theme)