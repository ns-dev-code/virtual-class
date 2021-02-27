import { createMuiTheme, colors } from '@material-ui/core'
const globalTheme = createMuiTheme();

const theme = createMuiTheme({
    palette: {
        primary: {
            main: `#3F51B5`, dark: '#5C6BC0'
        },
        secondary: {
            main: `#FFC107`,
            dark: '#FFC107'
        },
        error: {
            main: colors.red.A400
        },
        background: {
            default: `#fff`
        },
    },
    typography: {
        fontFamily: 'serif'
    },
    overrides: {
        MuiTextField: {
            root: {
                borderRadius: globalTheme.spacing(2.5) + '!important',
                height: '1.5rem'
            }
        }
    }

})

export default theme