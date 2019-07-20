import React , { useEffect , useState } from 'react';
import { makeStyles } from '@material-ui/styles'
import { AppBar , Toolbar , Button } from '@material-ui/core'
import { useStyles } from './main-header-style'
import firebase from '../../../../lib/firebase'

function Header(props){
    const classes = useStyles()
    const [state,setState]  = useState()

    useEffect(()=>{
        
        firebase.db.collection('cms').doc('talentexcel_cms').collection('navbar').get()
        .then(docRef=>{
            docRef.docs.map(value=>{
                setState(value.data())
            })
        })

    },[])
    console.log(state)
    return(
        <React.Fragment>
           
               <AppBar position="static" className={classes.appBar}>
                    <Toolbar className={classes.toolbar} >
                        <div>
                           { state && <img src={state.image} className={classes.imageStyle}/>}
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


