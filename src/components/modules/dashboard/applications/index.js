import React , { useEffect , useState } from 'react'
import { Card , Typography, CardActions, CardContent } from '@material-ui/core'
import { useStyles } from './applications-styles'
import firebase from '../../../../lib/firebase'
import * as _ from 'lodash'
import MaterialTable from 'material-table'
import download from '../../../../images/download.png'

export default function Applications() {
    const classes = useStyles()
    const [applications,setApplications] = useState()
    const [state , setState ] = useState([
        {title:'Name',field:'firstName'},
        {title:'Surname',field:'lastName'},
        {title:'Email',field:'email'},
    ])
    useEffect(()=>{
         firebase.db.collection('applications').onSnapshot(snapshot=>{
            const application = []
            snapshot.forEach(doc=>{
                application.push(doc.data())
            })
            const appObject = _.sortBy(application,function(dateObj){
                return new Date(dateObj.appliedOn)
            })
            setApplications(appObject)
         })
    },[])
    
    return (
        // <Card className={classes.root}>
        //    <CardContent>
        //        <MaterialTable
        //            title="Applicatoins Received"
        //        />
        //    </CardContent>
        // </Card>
        <MaterialTable
            title="Recently Applied"
            columns={state}
            data={applications}
           
            actions={[
                {
                    icon:'save',
                    tooltip:'Download Resume',
                    onClick:(event,rowData)=>{
                        return window.open(rowData.fileUrl)
                    }
                        
                }
            ]}
            components={{
                Action:props=>(
                    <div className={classes.tableActions} onClick={(event)=>props.action.onClick(event,props.data)}>
                        <img src={download} alt="download" style={{width:'2rem'}}/>
                    </div>
                )
            }}
        />
    )
}
