import React, { useState, useEffect } from 'react'
import { SnackbarProvider } from 'notistack'
import Login from '../../components/login'
import SEO from '../../components/site-meta-data'
import { Formik } from 'formik'
import * as Yup from 'yup'
import firebase from '../../lib/firebase'
import { connect } from 'react-redux'
import { login } from '../../lib/redux/actions'
import { navigate } from 'gatsby'
import loader from '../../images/icons/loader.svg'
import LoadingOverlay from 'react-loading-overlay'
import { cloudApi } from '../../config/index';
import axios from 'axios';

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
    password: Yup.string()
        .required('Password is required')
})


function LoginPage(props) {
    var flag = null;
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const { '*': id } = props;
    if (typeof window !== 'undefined') {
        if (window.history.state) {
            flag = window.history.state.message;
        }
    }
    const [emailVerified, setEmailVerified] = useState(flag)

    useEffect(() => {
        (async () => {
            if (id) {
                try {
                    const verifyEmail = await axios.post(`${cloudApi}/verifyEmail`, {
                        uid: id
                    })
                } catch (err) {
                    console.log(err)
                }
            }
        })()
        setTimeout(() => {
            setEmailVerified(null)
        }, 2000)
    }, [])


    const handleSubmit = async (data, actions) => {

        try {
            const useCredentials = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
            console.log(data)
            const userData = await firebase.db.collection('register').where('email', '==', data.email).get();

            console.log(userData.docs.map(data => data.data())[0])
            props.login(userData.docs.map(data => data.data())[0])
            navigate('/dashboard')
        }
        catch (error) {

            if (error.code === 'auth/user-not-found') {
                actions.setStatus({ message: 'Invalid email id or password!' })
            } else {
                actions.setStatus({ message: 'The password is invalid!' })
            }
            setTimeout(() => {
                actions.setSubmitting(false)
                actions.resetForm()
            }, 3000);

        }

    }

    const values = { email: '', password: '' }

    return (

        <SnackbarProvider maxSnack={1} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
            <SEO />

            <Formik
                render={props => <Login {...props} res={error} verifiedEmail={false} />}
                validationSchema={validationSchema}
                initialValues={values}
                onSubmit={handleSubmit}
            />

        </SnackbarProvider>
    )
}
export default connect(null, { login })(LoginPage)