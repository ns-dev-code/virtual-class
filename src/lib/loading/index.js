import React from 'react'
import {  CircularProgress, withStyles } from '@material-ui/core';

function Progress(props){
     const {loading,classes} =props
    return(
        <>
          {
              loading &&
                  <CircularProgress size={24} className={classes.buttonProgress}/>
          }
        </>
    )    
}
const styles={
    buttonProgress: {
        color: 'green',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },
}
export default  withStyles(styles)(Progress)
