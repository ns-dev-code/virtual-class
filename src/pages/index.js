import React from "react"
import { Main } from '../components/shared'
import { FrontContent , GettingStarted , Features } from '../components'
import SEO from '../components/site-meta-data'

function IndexPage(props){

   return(
     <React.Fragment>
          <Main>
              <SEO/>
              <FrontContent/>
              <Features/>
              <GettingStarted/>
          </Main>
         
     </React.Fragment>
   )
}

export default IndexPage
