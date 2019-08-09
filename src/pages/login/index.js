import React, { useState , useEffect } from 'react'
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
    email:Yup.string("Enter Email")
    .email("Enter a valid email")
    .required("Email is required"),
    password:Yup.string("")
    .required('Password is required')
})

function LoginPage(props){
    const [error,setError] = useState(null)
    const [loading ,setLoading] = useState(true)
    const { '*' : id} = props;

    useEffect(()=>{
       (async()=>{
            if(id){
                try{
                    const verifyEmail = await axios.post(`${cloudApi}/verifyEmail`,{
                        uid:id
                    })
                }catch(err){
                    console.log(err)
                }
            }
       })()
    },[])

    const handleSubmit = async(data,actions) =>{
       try{
        const useCredentials = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
                    console.log(useCredentials)
                    props.login(useCredentials.user)
    
                    navigate('/dashboard')
       }
       catch(error){
           setError(error.message)
            actions.resetForm()
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