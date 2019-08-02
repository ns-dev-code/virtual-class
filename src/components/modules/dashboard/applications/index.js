import React , { useEffect , useState , useContext } from 'react'
import {  Grid } from '@material-ui/core'
import { useStyles } from './applications-styles'
import firebase from '../../../../lib/firebase'
import * as _ from 'lodash'
import MaterialTable from 'material-table'
import download from '../../../../images/download.png'
import UserContext from '../../../../lib/contextApi'
import { connect } from 'react-redux'
import moment from 'moment'

 function Applications(props) {
    const { overview , title , user , applicationProps} = props
    const classes = useStyles()
    const contextType = useContext(UserContext)
    const [applications,setApplications] = useState([])
    const [state , setState ] = useState([
        {title:'Name',field:'firstName'},
        {title:'Surname',field:'lastName'},
        {title:'Email',field:'email'},
    ])
    useEffect(()=>{
          if(overview === true){
             
            firebase.db.collection('openings').where('createdBy','==',user.email).get()
            .then(docRef=>{
                if(docRef.empty == false){
                    docRef.docs.map(opening=>{
                        firebase.db.collection('applications').where('opening_id','==',opening.id).limit(6)
                        .onSnapshot(snapshot=>{
                            if(snapshot.empty == false){
                                const application = []
                        
                                snapshot.forEach(doc=>{
                                    application.push(doc.data())
                                })
                                const appObj = _.sortBy(application,function(dateObj){
                                    return new Date(dateObj.appliedOn)
                                })
                                 //using moment js to change timestamp to date
                                //  if(appObj.length > 0){

                                //     appObj.forEach(format=>{
                                        
                                //     })
                                    
                                //  }
                                setApplications(appObj)
                            }
                        })
                       
                    })
                }
            })
           
          }else{
            firebase.db.collection('openings').where('createdBy','==',user.email).get()
            .then(docRef=>{
                if(docRef.empty == false){
                    docRef.docs.map(opening=>{
                        firebase.db.collection('applications').where('opening_id','==',opening.id)
                        .onSnapshot(snapshot=>{
                            if(snapshot.empty == false){
                                const application = []
                                snapshot.forEach(doc=>{
                                    application.push(doc.data())
                                })
                                const appObj = _.sortBy(application,function(dateObj){
                                    return new Date(dateObj.appliedOn)
                                })
                                setApplications(appObj)
                            }
                        })
                       
                    })
                }
            })
          }
    },[])
    
    return (
       <Grid container spacing={2}>
           <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <MaterialTable
                    title={title}
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
           </Grid>
       </Grid>
    )
}

export default connect(state=>({user:state.user}))(Applications)