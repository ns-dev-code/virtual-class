import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme=>({
    root:{
        width: "30%",
        margin: '5rem auto',
        padding: '20px',
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            margin:'1rem auto'
        }
   },
   text:{
       fontWeight:'600',
       marginBottom:'1rem',
       color:'#3F3D56'
   },
   textField:{
       margin:'1rem auto 1rem auto'
   },
   button:{
    backgroundColor: '#13a79f',
    margin: 'auto',
    width: '10rem',
    padding: '0.5rem',
    color: 'white',
    borderRadius: '2rem',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]:{
        padding:'1.0rem !important'
    },
    '&:hover':{
        backgroundColor:'#b3d6d4',
        color:'#3F3D56'
    }
   },
   image:{
       width:'60%',
       margin:'auto',
       display:'table'
   }
}))

export { useStyles }