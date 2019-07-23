import { makeStyles  } from '@material-ui/styles'
import newsImage from '../../../images/news.png'

const useStyles = makeStyles(theme=>({
    contentMargin:{
        margin:'1.0rem',
        [theme.breakpoints.up('xl')]:{
                margin:'2rem auto',
                width:'100%'
        }
    },
    frontImage:{
        width:'100%',
    },
    text:{
        margin:'auto',
        lineHeight:'4rem',
        color:'#3F3D56',
        
    },
    texthead:{
        fontSize:'4rem',
        color:'#3F3D56',
        textShadow: '2px 2px 5px #F2F2F2',
        [theme.breakpoints.down('md')]:{
            fontSize:'3rem'
        }  
    },
    textPadding:{
        padding:'4rem !important',
        backgroundImage: `url(${newsImage})`,
        backgroundSize:'cover',
        [theme.breakpoints.down('md')]:{
            padding:'0rem !important',
            marginTop:'2.0rem', 
        },
        [theme.breakpoints.down('xs')]:{
            borderBottom: '2px solid #4AB8B3',
            borderBottomRightRadius: '10rem',
            boxShadow: '2px 10px #eaf2f1'
        }
    },
    
    getStarted:{
        margin:'4rem'
    },
    getStartedContent:{
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
    }
}))

//Animaiton Effect

const charPose={
    exit:{opacity:0 , y: 20},
    enter:{
        opacity : 1,
        y : 0,
        delay:({charIndex})=>charIndex*30,
    },
    hoverable:true,
    pressable:true,
    init:{
        scale:1,
    },
    hover:{
        scale:1.2
    },
   
}

const textHead ={
    hoverable:true,
    pressable:true,
    init:{
        scale:1
    },
    hover:{
        scale:1.2
    }
}

export {useStyles , charPose , textHead }