import React from 'react'
import { SnackbarProvider } from 'notistack'
import Register from '../../components/register'
import SEO from '../../components/site-meta-data'

function LoginPage() {
    return (
        <SnackbarProvider maxSnack={2} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
            <SEO />
            <Register />
        </SnackbarProvider>
    )
}
export default LoginPage