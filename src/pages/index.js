import React   from "react"
import { Main } from '../components/shared'
import { FrontContent , GettingStarted , Features } from '../components'
import SEO from '../components/site-meta-data'

global.$ = require('jquery')

function IndexPage(props){
   
   return(
         <React.Fragment>
            <SEO/>
               <Main>
                  <FrontContent/>
                  <Features/>
                  <GettingStarted/>
               </Main>   
         </React.Fragment>
   )
}


export default IndexPage
