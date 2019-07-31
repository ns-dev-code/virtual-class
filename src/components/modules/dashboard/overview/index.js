import React , { useEffect , useState } from 'react'
import { useStyles } from './overview-styles'
import { Typography } from '@material-ui/core';
import Dash from '../'
import firebase from '../../../../lib/firebase'

function Overview(){
    const classes = useStyles()
    const [openings,setOpenings] = useState()

    return(
        <Dash>
            <Typography>Content will go here</Typography>
        </Dash>
    )
}
export default Overview