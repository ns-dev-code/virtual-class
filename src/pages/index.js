import React   from "react"
import { Main } from '../components/shared'
import { FrontContent , GettingStarted , Features } from '../components'
import SEO from '../components/site-meta-data'

const Loading = () => <div>Loading ...</div>

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
