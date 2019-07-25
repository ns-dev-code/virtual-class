import React, { useState, useEffect } from 'react'
import firebase from '../../utils/firebase'
import { navigate } from 'gatsby';
export default function auth(props) {
    const [user, setUser] = useState(null)
    useEffect(()=>{
            const currentUser = firebase.auth.currentUser;
            if(currentUser==null)
               navigate('/login')
            else    
                setUser(currentUser)
    },[])
    return (
       <React.Fragment>
            {
               user && props.children
            }
       </React.Fragment>
    )
}
