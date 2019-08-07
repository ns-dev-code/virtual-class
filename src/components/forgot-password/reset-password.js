import React , { useState , useEffect } from 'react'
import SEO from '../../components/site-meta-data'
import { Main } from '../../components/shared/index'
import { Container , Typography, Grid , TextField , Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {  withSnackbar } from 'notistack'

function ResetPassword(props){
    // const {  id } = props
    const classes = useStyles()
    //props to get formik functions
    const {
        values:{ newPassword , confirmPassword },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched,
        res
    } = props

    const [state,setState] = useState({
        newPassword:'',
        confirmPassword:''
    })
    if(res != null){
        props.enqueueSnackbar(res,{variant:'error'})
    }
  
   return(
        <React.Fragment>
            <SEO/>
            <Main>
                <Container maxWidth="md">
                   <div className={classes.root}>
                     <Typography variant="h4">Choose a new password</Typography>
                     <Typography variant="h6">Password must include atleast 6 characters.</Typography>
                   </div>
                    <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <TextField
                                        id="newPassword"
                                        name="newPassword"
                                        variant="outlined"
                                        value={newPassword}
                                        label="New password*"
                                        placeholder="Enter new password"
                                        fullWidth
                                        type="password"
                                        onChange={handleChange}
                                        error={Boolean(errors.newPassword)}
                                        helperText={errors.newPassword}
                                    />
                                    {/* <div style={{color:'red'}}>{errors.newPassword}</div> */}
                                </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <TextField
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        variant="outlined"
                                        value={confirmPassword}
                                        label="Retype new password*"
                                        placeholder="Retype new password"
                                        fullWidth
                                        onChange={handleChange}
                                        className={classes.textField}
                                        type="password"
                                        error={Boolean(errors.confirmPassword)}
                                        helperText={errors.confirmPassword}
                                    />
                                    {/* <div style={{color:'red'}}>{errors.confirmPassword}</div> */}
                                </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Fab
                                        variant="extended"
                                        color="secondary"
                                        className={classes.button}
                                        type="submit"
                                        disabled={!isValid}
                                    >
                                        Submit
                                    </Fab>
                                </Grid>
                        </Grid>
                    </form>
                </Container>
            </Main>
        </React.Fragment>
    )
}
const useStyles = makeStyles(theme=>({
    root:{
        margin:'30px 0 30px 0'
    },
    textField:{
        margin:'20px 0 0 0'
    },
    button:{
        margin:'20px auto auto auto',
        [theme.breakpoints.down('sm')]:{
             display:'table',
             margin:'20px auto auto auto'
        }
    }
}))

export default withSnackbar(ResetPassword)