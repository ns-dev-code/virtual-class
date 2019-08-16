import React, { useState } from 'react'
import { navigateTo, Link, navigate } from 'gatsby'
import { Typography, TextField, Paper , Fab} from '@material-ui/core'
import firebase from '../../utils/firebase'
import { connect } from 'react-redux'
import { login } from '../../lib/redux/actions'
import { useStyles } from './login-styles'
import password from '../../images/password.png'
import { withSnackbar } from 'notistack'
import Footer from '../shared/main/main-footer'
import talentExcel from '../../images/talent-excel-logo.png'
import { Formik } from 'formik'
import linkedin from '../../images/icons/linkedin.svg'

import Axios from 'axios';
import { cloudApi } from '../../config'

function Login(props) {

    const classes = useStyles()
    const [error, setError] = useState(false)
    const [state, setState] = useState({
        email: '',
        password: ''
    })
    
    const {
        values:{email , password},
        errors,touched,handleSubmit,handleChange,isValid,setFieldTouched,res
    } = props

    if(res != null){
        props.enqueueSnackbar(res,{variant:'error'})
    }

    const handleNavigate = redirect => () => {
        switch(redirect){
            case 'home':
                navigate('/')
            break;
            case 'register':
                navigate('/register')
            break;
            default:
                navigate('/login')
            break;
        }
    }
    const handlePasswordReset = () => {
        navigate('/forgot-password')
    }

    return (
        <React.Fragment>
            <Paper className={classes.root}>
                <div style={{ margin: 'auto',cursor:'pointer' }} onClick={handleNavigate('home')}>
                    <img src={talentExcel} alt="loginImage" className={classes.image} />
                </div>
                <Typography align="center" variant="h6" className={classes.text}>Login with</Typography>
                <div className={classes.linkedin} >
                    <a href={`${cloudApi}/auth/linkedin`}> <img className={classes.linkedinButton} src={linkedin} /></a>
                </div>
                 <Typography align="center" style={{color: '#766666'}}>OR</Typography>
                 <form onSubmit={handleSubmit}>
                 <TextField
                    name="email"
                    error={Boolean(errors.email)}
                    label="Enter Email"
                    placeholder="Please Enter your email"
                    variant="outlined"
                    onChange={handleChange}
                    value={email}
                    fullWidth
                    type="email"
                    className={classes.textField}
                    helperText={errors.email}
                />
                <TextField
                    name="password"
                    label="Enter Password"
                    placeholder="Please Enter your password"
                    error={Boolean(errors.password)}
                    variant="outlined"
                    onChange={handleChange}
                    fullWidth
                    value={password}
                    type="password"
                    className={classes.textField}
                    helperText={errors.password}
                />

                {/* <div className={classes.button} onClick={handleSubmit}>
                    <Typography align="center" >Sign in</Typography>
                </div> */}
                 <Fab
                    variant="extended"
                    type="submit"
                    size="large"
                    color="secondary"
                    className={classes.button}
                    disabled={!isValid}
                 >
                     Sign in
                 </Fab>
                 </form>
                <Typography align="center" className={classes.forgotPassword} onClick={handlePasswordReset}>Forgot password?</Typography>
                <Typography align="center" className={classes.new}>New to Talent Excel ? <span className={classes.textColor} onClick={handleNavigate('register')}>Join Now</span></Typography>

               
            </Paper>
            <Footer />
        </React.Fragment>
    )
}

export default withSnackbar(connect(null, { login })(Login))