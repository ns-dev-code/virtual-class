import React, { useState, useEffect } from 'react'
import firebase from '../../utils/firebase'
import { navigate } from 'gatsby';

export default function auth(props) {
    const [user, setUser] = useState(null)
    useEffect(()=>{
            const currentUser = firebase.auth.currentUser;
            const user = JSON.parse(window.localStorage.getItem("user"))
            console.log(user)
            if(!user)
               navigate('/login')
            else    
                setUser(user)
    },[])
    return (
       <React.Fragment>
            {
               user && props.children
            }
       </React.Fragment>
    )
}
