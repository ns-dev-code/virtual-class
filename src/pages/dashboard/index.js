import React, { useEffect, useState } from 'react'
import firebase from '../../utils/firebase'
import { Button } from '@material-ui/core'
import { navigateTo, Link } from 'gatsby';
import Auth from '../../components/auth'
import Dash from '../../components/modules/dashboard/'
const Dashboard = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
        const currentUsr = firebase.auth.currentUser;
        if (currentUsr !== null)
            setUser(currentUsr)

    }, [user])

    return (
        <Auth>
            <React.Fragment>
                {
                    user && <Dash user/>
                   /* { user && (
                        <React.Fragment>
                            <h2>
                                Hello,

                            </h2>
                            <Link to={'/profile'}>
                                <a>
                                    {user.email}
                                </a>
                            </Link>
                            <Button
                                onClick={
                                    () => {

                                        firebase.auth.signOut()
                                        navigateTo('/login')
                                    }
                                }
                            >
                                Logout
                        </Button>
                        </React.Fragment>
                      
                    ) }*/
                }
            </React.Fragment>
        </Auth>

    )
}

export default Dashboard