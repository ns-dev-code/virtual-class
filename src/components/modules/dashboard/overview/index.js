import React , { useEffect , useState } from 'react'
import { useStyles } from './overview-styles'
import { Typography , Card , CardContent , Divider, CardActions, CardActionArea , Grid} from '@material-ui/core';
import Dash from '../'
import firebase from '../../../../lib/firebase'
import resume from '../../../../images/resume.png'
import interview from '../../../../images/interview.png'
import calendar from '../../../../images/calendar.png'
import { IoIosRefresh } from 'react-icons/io'
import Applications from '../applications'
import { navigate } from 'gatsby'
import { connect } from 'react-redux'
import { UserProvider } from '../../../../lib/contextApi'

function Overview(props){
    const classes = useStyles()
    const { user } = props
    const [applicationsCount,setApplicationsCount] = useState(null)
    const [openingsCount,setOpeningsCount] = useState(null)
    const [openings,setOpenings] = useState([])
    const [applications,setApplications] = useState([])

    useEffect(()=>{
      
        getApplications()
    },[])
    const getApplications = () =>{
            firebase.db.collection('openings').where('createdBy','==',user.email).get()
            .then(docRef=>{
                    if(docRef.empty == true){
                        setOpeningsCount(0)
                    }
                    else{
                            docRef.docs.map(opening=>{
                                setOpeningsCount(docRef.size)
                              
                                 firebase.db.collection('applications').where('opening_id','==',opening.id).get()
                                 .then(appl=>{
                                    setOpenings(openin=>openin.concat(opening.data()))
                                     if(appl.empty === false){
                                        appl.docs.map(applied=>{
                                            setApplications(doc=>doc.concat(applied.data()))
                                        })
                                     }
                                 })
                            })
                    }
            })
           
    }
    
    const refresh =  () =>{
       setApplicationsCount(null)
       setOpeningsCount(null)
       setApplications([])
        getApplications()
    }
    const handleClick = redirect => () =>{
            navigate(redirect)
    }
    return(
        <Dash>
           <Grid container spacing={3}>
           <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                          {/* Openings */}
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                        <div className={classes.divIcon}>
                            <div className={classes.iconImage}> 
                                <img src={interview} alt="openings"/>
                            </div>
                            <div>
                                <Typography variant="h5" align="right">Openings</Typography>
                                <Typography variant="h6" align="right">{openingsCount == null?`0`:openingsCount}</Typography>
                            </div>
                        </div>
                        </CardContent>
                        <Divider variant="middle"/>
                        <CardActionArea classname={classes.cardActions}>
                            <CardActions onClick={refresh}>
                                <Typography className={classes.typography}><IoIosRefresh />in the last hour</Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    {/* Applications */}
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent} onClick={handleClick('/applications')}>
                        <div className={classes.divIcon}>
                            <div className={classes.iconImage}> 
                                <img src={resume} alt="applications"/>
                            </div>
                            <div>
                                <Typography variant="h5">Applications</Typography>
                                <Typography variant="h6" align="right">{applications.length ? applications.length:`0`}</Typography>
                            </div>
                        </div>
                        </CardContent>
                        <Divider variant="middle"/>
                        <CardActionArea classname={classes.cardActions}>
                            <CardActions onClick={refresh} >
                                <Typography className={classes.typography}><IoIosRefresh />Updated Now</Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                          {/* Events */}
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                        <div className={classes.divIcon}>
                            <div className={classes.iconImage}> 
                                <img src={calendar} alt="calendar"/>
                            </div>
                            <div>
                                <Typography variant="h5" align="right">Events</Typography>
                                <Typography variant="h6" align="right">0</Typography>
                            </div>
                        </div>
                        </CardContent>
                        <Divider variant="middle"/>
                        <CardActionArea classname={classes.cardActions}>
                            <CardActions >
                                <Typography className={classes.typography}><IoIosRefresh />Scheduled</Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
           </Grid>
           <Grid container spacing={3} className={classes.applications}>
                <Grid  item xs={12} sm={12} md={6} lg={6} xl={6}> 
                  {
                      applications &&  
                        <Applications 
                                title='Recently Applied'
                                overview={true}
                            />
                   
                  }
                </Grid>
           </Grid>
        </Dash>
    )
}
export default connect(state=>({user:state.user}))(Overview)