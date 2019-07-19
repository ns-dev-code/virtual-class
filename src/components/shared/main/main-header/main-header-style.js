import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme=>({

    toolbar:{
        position:'relative',
        width:'80%',
        margin:'auto',
        [theme.breakpoints.down('sm')]:{
            width:'auto'
        }
    },
    sectionDesktop:{
        display: 'none',
        [theme.breakpoints.up('md')]: {
        display: 'flex',
        },
    },
    appBar:{
        backgroundColor:'#FFFFFF !important'
    },
    imageStyle:{
        width:'60%',
        cursor:'pointer'
    },
    contentContainer:{
        position:'relative',
        width: '70%',
        display: 'flex',
        flexDirection: 'row-reverse',
        [theme.breakpoints.up('xs')]:{
            width:'60%'
        },
        [theme.breakpoints.up('md')]:{
            width:'70%'
        },
        [theme.breakpoints.down('xs')]:{
            display:'none'
        }
    },
    text:{
        color:'#4AB8B3'
    },
    button:{
         
        '&:hover':{
            borderBottom:'3px solid #4AB8B3'
        }
    }
}))

export { useStyles }