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
          color:'#2F2E41'
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
      }
}))

export { useStyles}