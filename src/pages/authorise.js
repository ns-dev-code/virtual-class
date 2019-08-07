import React, { useState, useEffect } from 'react'
import firebase from '../utils/firebase'
import { navigate } from 'gatsby';
import { connect } from 'react-redux'
import { login } from '../lib/redux/actions'
import Progress from '../lib/loading'
import Axios from 'axios';
import { cloudApi } from '../utils/config';
function auth(props) {

   const { '*': id } = props

   console.log(id)
   const [user, setUser] = useState(null)
   useEffect(() => {
      (async () => {
         if (id) {
            try {
               // const response = await Axios.get(`https://us-central1-orgz-app.cloudfunctions.net/api/user/auth`, {
               //    headers: {
               //       "x-auth-token": `Bearer ${id}`
               //    }
               // })

               const user = await firebase.auth.signInWithCustomToken(id.trim())

               console.log(firebase.auth.currentUser, user)
               if (!user) {
                  navigate('/login')
               } else {
                  // console.log(user.user)

                  //const currentUser = firebase.auth.currentUser;
                  setUser(user.user)
                  props.login(user.user)
                  navigate('/dashboard')
                  //const user = JSON.parse(window.localStorage.getItem("user"))
               }
            } catch (error) {
               console.log({ error })
               navigate('/login')
            }
         } else {
            const currentUser = firebase.auth.currentUser;
            const user = JSON.parse(window.localStorage.getItem("user"))

            if (!user)
               navigate('/login')
            else {
               setUser(user)
               props.login(user)
               navigate('/dashboard')
            }
         }

      })()

   }, [])

   console.log('at line 41', user)
   if (user) {
      return user.email && (
         <React.Fragment>
            {
               props.children
            }
         </React.Fragment>
      )
   } else {
      return (
         <Progress loading={true} />
      )
   }

}

export default connect(state => ({ user: state.user }), { login })(auth)