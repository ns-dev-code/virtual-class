import React, { useState } from 'react';
import { SnackbarProvider } from 'notistack';
import Register from '../../components/register';
import SEO from '../../components/site-meta-data';
import Footer from '../../components/shared/main/main-footer';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { cloudApi } from '../../config';
import * as _ from 'lodash';
import firebase from '../../lib/firebase';
import { CubeLoader } from '../../lib/loading/cube-loader';
import { EmailVerification } from '../../lib/email-template/email-verification'

const registerationSchema = Yup.object({
    firstName:Yup.string("Enter first name")
        .required('First name is required')
        .min(2,'FirstName must contain more then 2 characters'),
    lastName:Yup.string('Enter last name')
        .required('Last name is required')
        .min(2,'LastName must required more then 2 characters'),
    userType:Yup.string('Select user type')
        .required('User type is required'),
    email:Yup.string('Enter email')
        .email('Enter valid email')
        .required('Email is required'),
    password:Yup.string('Enter password')
        .min(6,'Password must be of 6 characters')
        .required('Password is required'),
});

function RegisterPage() {
    // document.body.style = 'background-color:lightgrey';
    const values ={firstName:'',lastName:'',email:'',password:'',userType:'none'};
    const [load , setLoad ] = useState(false);
    const [response,setRespone] = useState(null);

    const handleSubmit = async (data,actions) =>{
        try{
            setLoad(true)
            const userCredentials = await axios.post(`${cloudApi}/registerUser`,{
                email:data.email,
                password:data.password,
                displayName:`${_.capitalize(data.firstName+" "+ data.lastName)}`
            });
            
            if(userCredentials.status === 200){
               var response = JSON.parse(userCredentials.request.response)
               firebase.db.collection('register').add({
                   firstName:data.firstName,
                   lastName:data.lastName,
                   email:data.email,
                   userType:data.userType,
                   userId:response.id,
                   status:false,
                   createdOn:Date.now()
               })
               .then(async(docRef)=>{
               
                const content = EmailVerification(response.id)
                const responseEmail = await axios.post(`${cloudApi}/sendMail`,{
                    toEmail:data.email,
                    content:content,
                    subject:`Welcome ${data.firstName} , Please verify your email`
                })
                   actions.resetForm();
                   setLoad(false);
                   setRespone(true);
               });
            }
        }catch(err){
            setLoad(false)
           
            actions.resetForm();
        }
    };
    return (
       <React.Fragment>
            <SnackbarProvider maxSnack={2} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
                <CubeLoader load={load}/>
                <SEO />
                <Formik
                    render={props=><Register {...props} response={response}/>}
                    validationSchema={registerationSchema}
                    initialValues={values}
                    onSubmit={handleSubmit}
                />
                <Footer/>
        </SnackbarProvider>
       </React.Fragment>
    )
}


export default RegisterPage;