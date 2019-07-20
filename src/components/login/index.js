import React from 'react'
import { Typography, Button, CardContent , Card } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { useStyles } from './login-styles'
import google from '../../images/google.png'

function Login(props){

    const classes = useStyles()

    return(
        <React.Fragment>
            <div className={classes.root}>
            <Grid container spacing={0} >
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.loginImage}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography align="center" variant="h5" className={classes.text}>Sign in to Talent Excel</Typography>
                        <div className={classes.button}>
                           <div>
                                <Button className={classes.googleButton}> 
                                        <img src={google} alt="google" className={classes.googleIcon} />
                                        <span>Sign in with Google</span>
                                </Button>
                           </div>
                        </div>
                         <Typography align="center">OR</Typography>
                    </CardContent>
                </Card>     
            </Grid>
             </Grid>
            </div>
        </React.Fragment>
    )
}

export default Login