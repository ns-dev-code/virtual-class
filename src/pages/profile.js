

import React, { useState, useEffect } from 'react'
import Auth from '../components/auth'
import { Paper, Typography } from '@material-ui/core';
import firebase from '../utils/firebase'
export default function Profile() {

    const [user, setuser] = useState(null)

    useEffect(() => {
        const currentUser = firebase.auth.currentUser
        if (currentUser !== null)
            setuser(currentUser)

    }, [user])
    return (
        <Auth>
            {
                user && <React.Fragment>
                    <Paper
                        style={{
                            width: '300px',
                            margin: '0 auto',
                            padding: '10px'
                        }}
                    >
                        <h3>
                            {
                                user.email
                            }
                        </h3>
                        <h5>
                            {
                                user.displayName
                            }
                        </h5>
                    </Paper>
                </React.Fragment>
            }
        </Auth>

    )
}
