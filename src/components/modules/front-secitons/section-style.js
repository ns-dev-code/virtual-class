import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme=>({
    content:{
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
          },
        [theme.breakpoints.up('xl')]:{
                  width:'80%',
        },
        '@media (max-width: 960px)':{
            maxWidth:"960px"
        }
    },
    text:{
        color:'#2F2E41',
        lineHeight:'2.0rem'
    },
    captionText:{
        // fontWeight:'larger',
        color:'#2F2E41',
        lineHeight:'2.0rem',
        [theme.breakpoints.up('md')]:{
            fontSize:"x-large",
        },  
        [theme.breakpoints.down('sm')]:{
            fontSize:'1rem !important'
          }
    },
    signIn:{
        backgroundColor: '#2E827D',
        borderRadius: '2rem',
        padding: '1.0rem',
        width: '11rem',
        cursor: 'pointer',
        color: 'white',
        position: 'relative',
        margin: 'auto',
        transition:'transform .5s ease',
        '&:hover':{
            backgroundColor:'#4AB8B3',
            transform:'scale(1.1)'
        }
    },
    signImage:{
        width:'100%'
    }
}))

export { useStyles }