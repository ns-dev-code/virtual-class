import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme=>({
    root: {
        flexGrow: 1,
        marginTop:'4rem',
        [theme.breakpoints.down('xs')]:{
            marginTop:'0rem'
        }
      },
      loginImage:{
          margin:'auto',
      },
      text:{
          color:'#2F2E41',
          marginBottom:'1.0rem'
      },
      card:{
          width:'40%',
          margin:'auto',
          [theme.breakpoints.down('xs')]:{
              width:'100%'
          },
          
      },
      googleIcon:{
          width:'2rem',
      },
      ButtonSections:{
        margin: 'auto',
        display: 'table',
      },
      signin:{
          backgroundColor:'#13A79F',
          color:'white',
          '&:hover':{
              color:'black'
          }
      },
      button:{
          margin:'auto',
          display:'table'
      },
      googleButton:{
          backgroundColor:'#407DF2',
          color:'white',
          '&:hover':{
              backgroundColor:'#407DF2',
              color:'white'
          }
      }
}))

export { useStyles}