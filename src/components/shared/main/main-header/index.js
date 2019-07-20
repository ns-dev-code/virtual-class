import React , { useEffect , useState } from 'react';
import { AppBar , Toolbar , Button } from '@material-ui/core'
import { useStyles } from './main-header-style'
import talent from '../../../../images/talent-excel-logo.png'

function Header(props){
    const classes = useStyles()

    
    return(
        <React.Fragment>
           
               <AppBar position="static" className={classes.appBar}>
                    <Toolbar className={classes.toolbar} >
                        <div>
                         <img src={talent} className={classes.imageStyle}/>
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


