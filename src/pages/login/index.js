import React from 'react'
import { SnackbarProvider } from 'notistack'
import Login from '../../components/login'
import SEO from '../../components/site-meta-data'

function LoginPage(){
    return(
        <SnackbarProvider maxSnack={2} anchorOrigin={{horizontal:'right',vertical:'top'}}>
            <SEO/>
            <Login/>
        </SnackbarProvider>
    )
}
export default LoginPage