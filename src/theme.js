import {
    createTheme,
    responsiveFontSizes,
} from '@material-ui/core/styles';

// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';

const theme = createTheme({
    palette: {
        primary: {
            light: '#669944',
            main: '#2e6b12',
            dark: '#004000',
            contrastText: '#FFFFFF'
        },
        secondary: {
            light: '#FFFFF',
            main: '#669944',
            dark: '#777777',
            contrastText: '#FFFFFF'
        },
        text: {
            primary: '#FFFFFF',
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
            text: '#FFF'
        }, 
    },
    typography: {
        h4: {
            lineHeight: 1.0,
            fontSize: "1.8rem"
        },
        h5: {
            lineHeight: 1.2
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


export default responsiveFontSizes(theme);

