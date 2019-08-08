import React , { useEffect , useState } from 'react';
import { AppBar , Toolbar , Button , Fab } from '@material-ui/core'
import { useStyles } from './main-header-style'
import talent from '../../../../images/talent-excel-logo.png'
import { navigate } from 'gatsby'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../../lang-switch'

function Header(props){
    const classes = useStyles()
    const { t } = useTranslation("translation")
    const handleClick = redirect => () =>{
       switch(redirect){
           case 'home':
                navigate('/')
            break;
            case 'login':
                navigate('/login')
            break;
            default: 
                navigate('/register')
            break;
       }
    }
    return(
        <React.Fragment>
           
               <AppBar position="static" className={classes.appBar}>
                    <Toolbar className={classes.toolbar} >
                        <div onClick={handleClick('home')}>
                         <img src={talent} className={classes.imageStyle}/>
                        </div>
                        <div className={classes.contentContainer}>
                        {/* <LanguageSwitcher/> */}
                        {/* <Button size="large" className={classes.button}>
                           <span >{t('About Us')}</span>
                        </Button> */}
                        <Fab 
                            color="secondary"
                            size="medium"
                            variant="extended"
                            className={classes.joinNow}
                            onClick={handleClick('login')}
                         >
                            Sign in
                        </Fab>
                        </div>
                        <div className={classes.sectionMobile}>
                         {/* <LanguageSwitcher/> */}
                         {/* <Fab 
                            color="secondary"
                            size="small"
                            variant="extended"
                         >
                            Join Now
                        </Fab> */}
                        </div>
                    </Toolbar>
               </AppBar>
          
        </React.Fragment>
    )
}


export default Header


