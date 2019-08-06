import { createMuiTheme , colors } from '@material-ui/core'

const theme = createMuiTheme({
    palette:{
        primary:{
            main:`#4AB8B3`
        },
        secondary:{
            main:`#19857b`
        },
        error:{
            main:colors.red.A400
        },
        background:{
            default:`#fff`
        },
    },
    typography:{
        fontFamily:'serif'
    }
    
})

export default theme