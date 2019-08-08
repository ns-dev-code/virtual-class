import React, { useState } from 'react'
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

const validationSchema = Yup.object({
    email:Yup.string("Enter Email")
    .email("Enter a valid email")
    .required("Email is required"),
    password:Yup.string("")
    .required('Password is required')
})

function LoginPage(props){
    const [error,setError] = useState(null)
    const [loading ,setLoading] = useState(true)
   
    const handleSubmit = async(data) =>{
       try{
        const useCredentials = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)

                    props.login(useCredentials.user)
    
                    navigate('/dashboard')
       }
       catch(error){
           setError(error.message)
          
       }
    }
    const values = {email:'',password:''}
 
    return(
           
                <SnackbarProvider maxSnack={1} anchorOrigin={{horizontal:'right',vertical:'top'}}>
                 <SEO/>
            
                    <Formik
                        render={props=> <Login {...props} res={error}/>}
                        validationSchema={validationSchema}
                        initialValues={values}
                        onSubmit={handleSubmit}
                    />
            
            </SnackbarProvider> 
    )
}
export default connect(null,{ login })(LoginPage)