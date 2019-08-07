import React, { useState } from 'react'
import { navigateTo, Link, navigate } from 'gatsby'
import { Typography, TextField, Paper } from '@material-ui/core'
import firebase from '../../utils/firebase'

import { useStyles } from './register-styles'
import password from '../../images/password.png'
import linkedin from '../../images/linkedin.png'
import { withSnackbar } from 'notistack'
import Axios from 'axios';
import { cloudApi } from '../../config'
import * as _ from 'lodash'
function Register(props) {

    const classes = useStyles()
    const [error, setError] = useState(false)
    const [state, setState] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    })
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleLinkedIn = () => {
        // Axios.get(`http://localhost:8080/auth/linkedIn`, {

        // }).then(response => {
        //     console.log(response.data)
        // })

        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
                        width=400,height=700,left=300,top=100`;

        const opener = window.open('http://localhost:8080/auth/linkedin', 'test', params);
        console.log(opener.parent)

    }

    const handleSubmit = async () => {
        const { email, password, firstname, lastname } = state
        if (!email || !password || !firebase || !lastname) {
            setError(true)
            props.enqueueSnackbar('All Fields are required', { variant: 'warning' })
        }
        else {
            setError(false)
            try {
                const useCredentials = await Axios.post(`${cloudApi}/registerUser`, {
                    email: email,
                    password: password,
                    displaName: `${_.capitalize(firstname + " " + lastname)}`
                })

                //props.login(useCredentials.user)
                props.enqueueSnackbar('Registered Successfully', { variant: 'success' })
                // navigateTo('/dashboard')
            }
            catch (error) {
                props.enqueueSnackbar(error.message, { variant: 'error' })
                setError(false)
            }
        }
    }

    return (
        <React.Fragment>
            <Paper className={classes.root}>
                <div style={{ margin: 'auto' }}>
                    <img src={password} alt="loginImage" className={classes.image} />
                </div>
                <Typography align="center" variant="h6" className={classes.text}>Register Here</Typography>
                <TextField
                    name="firstname"
                    error={error}
                    label="Enter Firstname"
                    placeholder="Please Enter your firstname"
                    variant="outlined"
                    onChange={handleChange}
                    value={state.firstname}
                    fullWidth
                    type="text"
                    className={classes.textField}
                />
                <TextField
                    name="lastname"
                    error={error}
                    label="Enter Lastname"
                    placeholder="Please Enter your lastname"
                    variant="outlined"
                    onChange={handleChange}
                    value={state.lastname}
                    fullWidth
                    type="text"
                    className={classes.textField}
                />
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
                    <Typography align="center" >Sign Up</Typography>
                </div>

            </Paper>
        </React.Fragment>
    )
}
export default withSnackbar(Register)