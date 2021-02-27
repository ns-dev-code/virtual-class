import React from 'react'
import loader from '../../images/icons/loader.svg'
import { makeStyles } from '@material-ui/styles'

function CubeLoader(props){
    const { load } = props
    const classes = useStyles()

    return(
        <React.Fragment>
            {
                load == true &&
                <div>
                    <div className={classes.background}>
                    <img src={loader} alt="loading" className={classes.loader}/>
                    </div>
                 </div>
            }
        </React.Fragment>
    )
}

export { CubeLoader }

const useStyles = makeStyles(theme=>({

    loader:{
        position:'fixed',
        backgroundColor:'transparent',
        top:'35%',
        left:'45%',
        zIndex:'10000',
        [theme.breakpoints.down('sm')]:{
            top:'35%',
            left:'35%',
            position:'fixed',
            backgroundColor:'transparent',
        }
     },
     background:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: '900',
        backgroundColor: '#3333334d',
        top: '0'
     },
}))