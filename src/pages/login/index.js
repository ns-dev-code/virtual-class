import React, { useState } from 'react'
import { navigateTo, Link } from 'gatsby'
import { Button, Input, TextField, Paper } from '@material-ui/core'
import firebase from '../../utils/firebase'
import {connect}  from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import { login } from '../../lib/redux/actions'
const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.root}>
                <h3 >Login Here</h3>
                <TextField
                    name="email"
                    label="Enter Email"
                    placeholder="Please Enter your email"
                    variant={"outlined"}
                    onChange={
                        (event) => {
                            setEmail(event.target.value)
                        }
                    }
                    fullWidth
                    type="email" />
                <br />
                <br />
                <TextField
                    name="password"
                    label="Enter Password"
                    placeholder="Please Enter your password"
                    variant={"outlined"}
                    onChange={
                        (event) => {
                            setPassword(event.target.value)
                        }
                    }
                    fullWidth
                    type="password" />
                <br />
                <br />
                <Button
                    onClick={
                        async () => {
                            if (!email && !password)
                                return alert('Please enter your email and password')

                            try {
                                const userCredentials = await firebase.auth.signInWithEmailAndPassword(email, password)
                                // console.log(">>>>>: Login -> userCredentials", userCredentials)
                                // console.log(">>>>>: Login -> login", props.login)
                                props.login(userCredentials.user)
                              
                                navigateTo('/dashboard')
                            } catch (err) {
                                alert(err)
                            }
                        }
                    }
                >Sign in</Button>

                <Link to="/">
                    <a>Back to Home</a>
                </Link>
            </Paper>
        </div>
    )
}

const useStyles = makeStyles(theme=>({
    root:{
         width: "400px",
         margin: '0 auto',
         padding: '20px'
    }
}))

export default connect(null, {login})(Login)