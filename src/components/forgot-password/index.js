import React , { useState } from 'react'
import { useStyles } from './reset-pass-styles'
import { Fab , Typography , Container , Grid , TextField} from '@material-ui/core'
import { navigate } from 'gatsby'
import classNames from 'classnames'
import { ForgotPassword } from '../../lib/email-template/password-reset'
import { cloudApi } from '../../config/index'
import axios from 'axios'
import firebase from '../../lib/firebase'
import * as _ from 'lodash'
import check from '../../images/icons/check-mark.svg'
import { useTranslation } from 'react-i18next'

function ForgotPass(props){
    const { t } = useTranslation("translation") 
    const classes = useStyles()
    const [email , setEmail ] = useState()
    const [error , setError ] = useState(false)
    const [success , setSuccess ] = useState(false)
    const [message , setMessage] = useState()
    const [resend , setResend ] = useState(false)
    const handleClick = redirect => () =>{
       
        switch(redirect){
            case '/login': navigate(redirect); break;
            case 'submit':
                if(email){
                    setError(false)
                      try{
                        var userData;
                        firebase.db.collection('orgz').where('email','==',email).get()
                        .then(async docRef=>{
                          if(docRef.empty === false){
                                docRef.docs.map(doc=>{
                                    userData= _.pick(doc.data(),['email','uid','firstName'])
                            })
                           
                                const content =  ForgotPassword(userData)
                                const response = await axios.post(`${cloudApi}/sendMail`,{
                                    toEmail:email,
                                    content:content,
                                    subject:`${userData.firstName}, here's the link to reset your password`
                                })
                                
                                setSuccess(true)
                            
                          }else{
                            setError(true)
                            setMessage('No user found')
                          }
                        
                        })
                        .catch(err=>{
                            console.log(err.message)
                        })

                      }catch(err){
                          console.log(err.message)
                      }
                    // setSuccess(true)
                }
                else{
                    setError(true)
                    setMessage('Please enter your email')
                }
            break;
            case 'resend':
                    if(email){
                        setError(false)
                          try{
                            var userData;
                            firebase.db.collection('orgz').where('email','==',email).get()
                            .then(async docRef=>{
                              if(docRef.empty === false){
                                    docRef.docs.map(doc=>{
                                        userData= _.pick(doc.data(),['email','uid','firstName'])
                                })
                               
                                    const content =  ForgotPassword(userData)
                                    const response = await axios.post(`${cloudApi}/sendMail`,{
                                        toEmail:email,
                                        content:content,
                                        subject:`${userData.firstName}, here's the link to reset your password`
                                    })
                                    setResend(true)
                              }else{
                                setError(true)
                                setMessage('No user found')
                              }
                            
                            })
                            .catch(err=>{
                                console.log(err.message)
                            })
    
                          }catch(err){
                              console.log(err.message)
                          }
                        // setSuccess(true)
                    }
                    else{
                        setError(true)
                        setMessage('Please enter your email')
                    }
            break;
            default:navigate('/');break;
        }
    }
    const handleChange = (event) =>{
        setEmail(event.target.value)
    }
    
    if(success === false){
        return(
            <React.Fragment>
               <Container maxWidth="md">
                    <div className={classes.title}>
                        <Typography variant="h5">{t('Forgot Your Password?')}</Typography>
                        <Typography variant="caption">{t('Enter your account email to receive a link allowing you to reset your password.')}</Typography>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                             id="forgot-password"
                             label="Email*"
                             placeholder="Enter your email"
                             variant="outlined"
                             fullWidth
                             name="email"
                             value={email}
                             onChange={handleChange}
                             autoFocus
                             error={error}
                             type="email"
                            />
                            {error == true && <Typography style={{color:'red'}}>{message}</Typography>}
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className={classes.display}>
                                 <Fab
                                    size="large"
                                    variant="extended"
                                    className={classNames(classes.buttons,classes.cancelButton)}
                                    onClick={handleClick('/login')}
                                 >{t('Cancel')}</Fab>
                                <Fab
                                    size="large"
                                    variant="extended"
                                    className={classes.buttons}
                                    onClick={handleClick('submit')}
                                    color="secondary"
                                 >{t('Send Email')}</Fab>
                            </div>
                        </Grid>
                    </Grid>
               </Container>
            </React.Fragment>
        )
    }else{
        return(
            <React.Fragment>
               <Container maxWidth="md">
                    <div className={classes.title}>
                         <Typography variant="h4">We just emailed you a link</Typography>
                         <Typography variant="h6">Please check your email and reset your password</Typography>
                         {resend === true && <Typography variant="caption" style={{color:'green'}}><img src={check} style={{width:'1rem'}} alt="check mark"/> We've sent another email. Please check your email</Typography>}
                    </div>
                    <Fab
                         size="large"
                         variant="extended"
                         className={classNames(classes.buttons,classes.cancelButton)}
                         onClick={handleClick('resend')}
                    >
                        Resend Link
                    </Fab>
                    <Fab
                        size="large"
                        variant="extended"
                        className={classes.buttons}
                        onClick={handleClick('/login')}
                        color="secondary"
                        >Sign In</Fab>
               </Container>
            </React.Fragment>
        )
    }
}
export default ForgotPass