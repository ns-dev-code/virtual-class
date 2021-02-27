import React , { useState, useEffect } from 'react'
import ResetPassword from '../../components/forgot-password/reset-password'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { cloudApi } from '../../config'
import _ from 'lodash'
import { navigate } from 'gatsby'
import { SnackbarProvider } from 'notistack'

const validationSchema = Yup.object({
    newPassword:Yup.string("")
    .min(6,"Password must contain atleast 6 characters")
    .required("Enter your password"),
    confirmPassword:Yup.string("")
    .required("Confirm your password")
    .oneOf([Yup.ref("newPassword")],"Password does not match")
})

function Resetpass(props){
     
     const { '*':userId } = props
     const values ={ newPassword:"",confirmPassword:""}
        const [error,setError] = useState(null)

     const handleSubmit = async (data) =>{
          try{
             const response = await axios.post(`${cloudApi}/updatePassword`,{
                 id:userId,
                 password:data.confirmPassword
             })
             if(response.status == 200){
                navigate('/login')
             }

          }catch(err){
              setError(err.response.data.error.code)
          
          }
     }

    return(
        <React.Fragment>
          
           <SnackbarProvider maxSnack={1}  anchorOrigin={{
              vertical:'bottom',
              horizontal:'right'
            }}>
           <Formik
                    render={props=><ResetPassword {...props} res={error} />}
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                />
           </SnackbarProvider>
        </React.Fragment>
    )
}

export default Resetpass