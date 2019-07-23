import React from "react"
import { Main } from '../components/shared'
import { FrontContent , GettingStarted , Features } from '../components'
import SEO from '../components/site-meta-data'
import { makeStyles } from '@material-ui/styles'

function IndexPage(props){
   const classes = useStyles()
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

const useStyles = makeStyles(theme=>({
  root:{
    [theme.breakpoints.up('xl')]:{
      margin:'auto',
      width:'85%'
    }
  }
}))

export default IndexPage
