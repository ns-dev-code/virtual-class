import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import firebase from '../../lib/firebase'
import { Grid  } from '@material-ui/core';
import Dash from '../../components/modules/dashboard'
import Applications from '../../components/modules/dashboard/applications'
import Auth from '../../components/auth'
import SEO from '../../components/site-meta-data'
import { makeStyles } from '@material-ui/styles'

const Application = (props) => {
    const classes = useStyles()
    return (
       <Auth>
           <SEO/>
           <Dash>
               <div className={classes.root}>
                <Applications title="Applications" overview={false}/>
               </div>
            </Dash>
       </Auth>
    )
}
const useStyles = makeStyles(theme=>({
    root:{
        marginTop:'1rem'
    }
}))
export default connect(state => ({ user: state.user }, {}))(Application)

