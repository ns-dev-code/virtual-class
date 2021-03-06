import React, { useEffect, useState } from 'react'
import firebase from '../../utils/firebase'
import { Button } from '@material-ui/core'
import { navigateTo, Link } from 'gatsby';
import Auth from '../../components/auth'
import Dash from '../../components/modules/dashboard/'
import SEO from '../../components/site-meta-data'
import Overview from '../../components/modules/dashboard/overview'

const Dashboard = (props) => {

    console.log(props)
    const [user, setUser] = useState('');

    return (
        <Auth {...props}>
            <SEO/>
            <React.Fragment>
                {
                   <Overview />
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