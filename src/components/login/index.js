import React, { useState } from 'react'
import { navigateTo, Link } from 'gatsby'
import {  Typography, TextField, Paper  } from '@material-ui/core'
import firebase from '../../utils/firebase'
import {connect}  from 'react-redux'
import { login } from '../../lib/redux/actions'
import {useStyles} from './login-styles'
import password from '../../images/password.png'
import { withSnackbar } from 'notistack'

function Login(props){
    
    const classes = useStyles()
    const [error,setError] = useState(false)
    const [state,setState] = useState({
        email:'',
        password:''
    })
    const handleChange = (event) =>{
            setState({
                ...state,
                [event.target.name]:event.target.value
            })
    }

    const handleSubmit = async() =>{
        const { email , password } = state
        if(!email || !password)
        {
            setError(true)
            props.enqueueSnackbar('All Fields are required',{variant:'warning'})
        }
        else{
            setError(false)
            try{
                const useCredentials = await firebase.auth.signInWithEmailAndPassword(email,password)

                props.login(useCredentials.user)

                navigateTo('/dashboard')
            }
            catch(error){
                props.enqueueSnackbar(error.message,{variant:'error'})
                setError(false)
            }
        }
    }

    return(
        <React.Fragment>
            <Paper className={classes.root}>
                <div style={{margin:'auto'}}>
                    <img src={password} alt="loginImage" className={classes.image}/>
                </div>
               <Typography align="center" variant="h6" className={classes.text}>Login Here</Typography>
                <TextField
                    name="email"
                    error={error}
                    label="Enter Email"
                    placeholder="Please Enter your email"
                    variant="outlined"
                    onChange={handleChange}
                    value={state.email}
                    fullWidth
                    type="email" 
                    className={classes.textField}
                />
                <TextField
                    name="password"
                    label="Enter Password"
                    placeholder="Please Enter your password"
                    error={error}
                    variant="outlined"
                    onChange={handleChange}
                    fullWidth
                    value={state.password}
                    type="password" 
                    className={classes.textField}
                />
               
                 <div className={classes.button} onClick={handleSubmit}>
                     <Typography align="center" >Sign in</Typography>
                 </div>
            </Paper>
        </React.Fragment>
    )
}
export default withSnackbar(connect(null,{login})(Login))