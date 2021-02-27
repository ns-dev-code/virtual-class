import { makeStyles } from '@material-ui/styles'
import upload from '../../images/upload.png'

const useStyles = makeStyles(theme=>({
    root:{
        marginTop:'1.0rem'
    },
    text:{
        fontWeight:'larger',
        color:'#2F2E41',
    },
    content:{
        padding:'2.0rem'
    },
    textApply:{
        fontWeight:'larger',
        color:'#2F2E41',
        fontSize:'1.5rem',
    },
    formWrapper:{
        marginTop:'1.0rem',
    },
    inputFields:{
        margin:theme.spacing(2)
    },
    uploadImage:{
        // backgroundImage: `url(${upload})`,
        backgroundSize:'cover',
    },
    jobDescription:{
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }
}))

export { useStyles }