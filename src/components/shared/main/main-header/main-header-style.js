import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme=>({

    toolbar:{
        position:'relative',
        width:'80%',
        margin:'auto',
        [theme.breakpoints.down('sm')]:{
            width:'auto'
        },
        [theme.breakpoints.up('xl')]:{
            width:'55%',
            margin:'auto',
            position:'relative'
        }
    },
    sectionMobile:{
        display: 'flex',
        [theme.breakpoints.up('md')]: {
        display: 'none',
        },
    },
    appBar:{
        backgroundColor:'#FFFFFF !important',
        boxShadow:'none !important'
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
        },
      
    },
    text:{
        color:'#4AB8B3'
    },
    button:{
         
        // '&:hover':{
        //     borderBottom:'3px solid #4AB8B3'
        // }
    },
    body : {
        padding: '0'
    },
    joinNow:{
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid #11958e',
        '&:hover':{
            color:'white'
        }
    }
}))

export { useStyles }