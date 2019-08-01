import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import firebase from '../../lib/firebase'
import { Paper, Card } from '@material-ui/core';
import Dash from '../../components/modules/dashboard'
import Applications from '../../components/modules/dashboard/applications'

const Application = (props) => {
   
    return (
       
            <Dash>
                <Applications/>
            </Dash>
       
    )
}

export default connect(state => ({ user: state.user }, {}))(Application)

