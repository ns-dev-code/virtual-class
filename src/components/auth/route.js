import { Dashboard, SettingsApplications, Notes } from '@material-ui/icons'
import React from 'react';
import firebase from '../../lib/firebase'


(async() => {
   // console.log(firebase.auth.currentUser)
        if (firebase.auth.currentUser) {
            const uid = firebase.auth.currentUser.uid;
            const generateRoute = await firebase.db.collection('orgz_users').doc(uid).get()
        }
})()



const routes = [
    {
        icon:<Dashboard/>,
        text:'Dashboard'
    },
    {
        icon: <SettingsApplications />,
        text: 'Applications',
    }
]
export { routes }