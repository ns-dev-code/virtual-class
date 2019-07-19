import React from "react"
import { Main } from '../components/shared'
import { FrontContent , GettingStarted , Features } from '../components'

function IndexPage(props){

   return(
     <React.Fragment>
          <Main>
              <FrontContent/>
              <Features/>
              <GettingStarted/>
          </Main>
         
     </React.Fragment>
   )
}

export default IndexPage
