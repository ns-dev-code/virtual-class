import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import firebase from '../../lib/firebase'
import { Paper, Card } from '@material-ui/core';
import Dash from '../../components/modules/dashboard'
const Application = (props) => {
    const [applications, setapplications] = useState([])
    useEffect(() => {
        (async () => {
            const { docs } = await firebase.db.collection('applications').get()

            setapplications(docs.map(doc => doc.data()))
        })()
    }, [applications.length])

    return (
        <Paper>
            <Dash>
            {
                applications.length > 0 ? applications.map(application => {
                    return (
                        <Card 
                        style={{
                            width:'200px',
                            height:'300px'
                        }}
                        autoCapitalize
                         key={Date.now()}>
                            {
                                application.email
                            }

                            {
                                application.appliedOn
                            }
                            {
                                application.openingId
                            }
                        </Card>
                    )
                }):'No more applications'
            }
            </Dash>
        </Paper>
    )
}

export default connect(state => ({ user: state.user }, {}))(Application)

