import React, { useState } from 'react'
import { navigateTo, Link, navigate } from 'gatsby'
import { Typography, TextField, Paper, Fab, Fade, Button } from '@material-ui/core'
import firebase from '../../utils/firebase'
import { connect } from 'react-redux'
import { login } from '../../lib/redux/actions'
import { useStyles } from './login-styles'
import password from '../../images/password.png'
import { withSnackbar } from 'notistack'
import Footer from '../shared/main/main-footer'
import talentExcel from '../../images/talent-excel-logo.png'
import { ErrorMessage } from 'formik'
import linkedin from '../../images/icons/linkedin.svg'
import { IoIosInformationCircleOutline } from 'react-icons/io';

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
        values: { email, password },
        errors, touched, handleSubmit, handleChange, isValid, setFieldTouched, res, status, isSubmitting, verifiedEmail
    } = props

    const handleNavigate = redirect => () => {
        switch (redirect) {
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
    const change = (name, e) => {

        handleChange(e);
        setFieldTouched(name, true, false);
    }
    return (
        <React.Fragment>
            <Paper className={classes.root}>
                <div style={{ margin: 'auto', cursor: 'pointer' }}>
                    <img src={'https://alexwebdevelop.com/wp-content/uploads/2019/08/php-login-and-authentication-the-definitive-guide.png'} alt="loginImage" className={classes.image} />
                </div>
                {
                    status || verifiedEmail ?
                        <div id="notification">
                            {status && <Typography color="error">
                                {status.message}
                            </Typography>}
                            {verifiedEmail !== null && <Typography variant="h6" style={{ fontSize: '0.875rem' }} align="center">{verifiedEmail}</Typography>}
                        </div>
                        :
                        <Typography align="center" style={{ color: '#766666' }}></Typography>
                }
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="email"
                        error={touched.email && Boolean(errors.email)}
                        label="Enter Email"
                        placeholder="Please Enter your email"
                        variant="outlined"
                        onChange={change.bind(null, "email")}
                        value={email}
                        fullWidth
                        aria-label="email"
                        type="email"
                        className={classes.textField}
                        helperText={touched.email ? errors.email : ""}
                    >
                    </TextField>
                    <TextField
                        name="password"
                        label="Enter Password"
                        placeholder="Please Enter your password"
                        error={touched.password && Boolean(errors.password)}
                        variant="outlined"
                        onChange={change.bind(null, "password")}
                        fullWidth
                        value={password}
                        type="password"
                        className={classes.textField}
                        helperText={touched.password ? errors.password : ""}
                    />

                    {/* <div className={classes.button} onClick={handleSubmit}>
                    <Typography align="center" >Sign in</Typography>
                </div> */}
                    <Button
                        variant="contained"
                        type="submit"
                        size="large"
                        color="primary"
                        className={classes.button}
                        disabled={!isValid || isSubmitting}
                    >
                        Sign in
                 </Button>
                </form>
                <Typography align="center" className={classes.new}>New User? <span className={classes.textColor} onClick={handleNavigate('register')}>Join Now</span></Typography>
            </Paper>
        </React.Fragment >
    )
}

export default withSnackbar(connect(null, { login })(Login))