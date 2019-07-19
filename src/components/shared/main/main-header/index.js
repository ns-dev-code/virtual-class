import React from 'react';
import { makeStyles } from '@material-ui/styles'
import { AppBar , Toolbar , Button } from '@material-ui/core'
import logo from '../../../../images/talent-excel-logo.png'
import { useStyles } from './main-header-style'

function Header(props){
    const classes = useStyles()
    
    return(
        <React.Fragment>
           
               <AppBar position="static" className={classes.appBar}>
                    <Toolbar className={classes.toolbar} >
                        <div>
                           <img src={logo} className={classes.imageStyle}/>
                        </div>
                        <div className={classes.contentContainer}>
                        <Button size="large" className={classes.button}>
                           <span >About Us</span>
                        </Button>
                        <Button size="large" className={classes.button}>
                           <span >Contact Us</span>
                        </Button>
                        </div>
                    </Toolbar>
               </AppBar>
          
        </React.Fragment>
    )
}


export default Header


