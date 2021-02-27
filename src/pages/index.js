import React from "react"
import SEO from '../components/site-meta-data'
import Login from './login/index'

global.$ = require('jquery')

function IndexPage(props) {

   return (
      <React.Fragment>
         <SEO />
         <Login />
      </React.Fragment>
   )
}


export default IndexPage
