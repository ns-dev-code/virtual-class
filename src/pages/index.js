import React from "react"
import { Main } from '../components/shared'
import { FrontContent , GettingStarted } from '../components'

function IndexPage(props){

   return(
     <React.Fragment>
          <Main>
              <FrontContent/>
              <GettingStarted/>
          </Main>
         
     </React.Fragment>
   )
}

export default IndexPage
