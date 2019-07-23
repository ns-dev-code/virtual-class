import React from 'react'
import ApplyNow from '../../components/apply-now';
import { Main } from '../../components/shared'
import SEO from '../../components/site-meta-data'
import { SnackbarProvider } from 'notistack'

export default function Application(props) {
    const { '*' : id } = props
  
  return (
        <React.Fragment>
          <SEO/>
          <Main>
            <SnackbarProvider maxSnack={2} anchorOrigin={{
              vertical:'bottom',
              horizontal:'right'
            }}>
              <ApplyNow id={id}/> 
            </SnackbarProvider> 
        </Main>
        </React.Fragment>
    )
}
