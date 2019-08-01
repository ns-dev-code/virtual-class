import React, { useState, useEffect } from 'react'
import firebase from '../../utils/firebase'
import { navigate } from 'gatsby';
import { connect } from 'react-redux'
import { login } from '../../lib/redux/actions'

 function auth(props) {
    const [user, setUser] = useState(null)
    useEffect(()=>{
            const currentUser = firebase.auth.currentUser;
            const user = JSON.parse(window.localStorage.getItem("user"))
            
            if(!user)
               navigate('/login')
            else    
               {
                  setUser(user)
                  props.login(user)
               }
    },[])
    return (
       <React.Fragment>
            {
               user && props.children
            }
       </React.Fragment>
    )
}

export default connect(state=>({user:state.user}),{login})(auth)