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
        // boxShadow:'none !important'
    },
    imageStyle:{
        width:'20%',
        cursor:'pointer'
    },
    contentContainer:{
     
      
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