import React , { useState }from 'react'
import {  navigate } from 'gatsby'
import { Typography, TextField, Paper , Fab , InputAdornment, IconButton} from '@material-ui/core'
import talentExcel from '../../images/talent-excel-logo.png'
import { useStyles } from './register-styles'
import { withSnackbar } from 'notistack'
import * as _ from 'lodash'
import { Visibility , VisibilityOff } from '@material-ui/icons'

function Register(props) {
    const {
        values:{firstName,lastName,email,password,confirmPassword},
        handleChange,
        handleSubmit,
        errors,
        touched,
        isValid,
       
    } = props
    const classes = useStyles() 
    const [showPassword , setShowPassword ]= useState(false)


    const handleShowPassword = () =>{
        setShowPassword(!showPassword)
    }
   
    // const handleSubmit = async () => {
    //     const { email, password, firstname, lastname } = state
    //     if (!email || !password || !firebase || !lastname) {
    //         setError(true)
    //         props.enqueueSnackbar('All Fields are required', { variant: 'warning' })
    //     }
    //     else {
    //         setError(false)
    //         try {
    //             const useCredentials = await Axios.post(`${cloudApi}/registerUser`, {
    //                 email: email,
    //                 password: password,
    //                 displaName: `${_.capitalize(firstname + " " + lastname)}`
    //             })

    //             //props.login(useCredentials.user)
    //             props.enqueueSnackbar('Registered Successfully', { variant: 'success' })
    //             // navigateTo('/dashboard')
    //         }
    //         catch (error) {
    //             props.enqueueSnackbar(error.message, { variant: 'error' })
    //             setError(false)
    //         }
    //     }
    // }
    const handleClick = redirect => () =>{
        switch(redirect){
            case 'home':navigate('/');break;
            case 'login':navigate('/login');break;
            default:navigate('/register');break;
        }
    }

    return (
        <React.Fragment>
            <Paper className={classes.root}>
                <div style={{ margin: 'auto',cursor:'pointer' }} onClick={handleClick('home')}>
                    <img src={talentExcel} alt="loginImage" className={classes.image} />
                </div>
                <Typography align="center" variant="h6" className={classes.text}>Register Here</Typography>
                <form onSubmit={handleSubmit} autoComplete="off">
                        <TextField
                            name="firstName"
                            error={Boolean(errors.firstName)}
                            label="First Name"
                            placeholder="Enter first name"
                            variant="outlined"
                            onChange={handleChange}
                            value={firstName}
                            fullWidth
                            type="text"
                            className={classes.textField}
                            helperText={errors.firstName}
                        />
                        <TextField
                            name="lastName"
                            error={Boolean(errors.lastName)}
                            label="Last Name"
                            placeholder="Enter your last name"
                            variant="outlined"
                            onChange={handleChange}
                            value={lastName}
                            fullWidth
                            type="text"
                            className={classes.textField}
                            helperText={errors.lastName}
                        />
                        <TextField
                            name="email"
                            error={Boolean(errors.email)}
                            label="Email"
                            placeholder="Enter email"
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
                            label="Password"
                            placeholder="Enter password"
                            error={Boolean(errors.password)}
                            variant="outlined"
                            onChange={handleChange}
                            fullWidth
                            value={password}
                            type={showPassword?'text':'password'}
                            className={classes.textField}
                            helperText={errors.password}
                            InputProps={{
                                endAdornment:(
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            aria-label="toggle password"
                                            onClick={handleShowPassword}
                                        >
                                            { showPassword ? <VisibilityOff/>:<Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    <Fab
                        variant="extended"
                        color="secondary"
                        size="medium"
                        className={classes.fabButton}
                        disabled={!isValid}
                        type="submit"
                    >
                        Sign up
                    </Fab>

                </form>
                <div className={classes.alreadyMember}>
                    <Typography align="center">Already on Talent Excel ? <span className={classes.signIn} onClick={handleClick('login')}>Sign in</span></Typography>
                </div>
            </Paper>
        </React.Fragment>
    )
}
export default withSnackbar(Register)