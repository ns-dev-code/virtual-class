import React , { useEffect , useState } from 'react'
import { useStyles } from './overview-styles'
import { Typography , Card , CardContent , Divider, CardActions, CardActionArea , Grid} from '@material-ui/core';
import Dash from '../'
import firebase from '../../../../lib/firebase'
import resume from '../../../../images/resume.png'
import interview from '../../../../images/interview.png'
import calendar from '../../../../images/calendar.png'
import { IoIosRefresh , IoMdTime} from 'react-icons/io'
import Applications from '../applications'
import { navigate } from 'gatsby'

function Overview(){
    const classes = useStyles()
    const [applications,setApplications] = useState(null)
    const [openings,setOpenings] = useState(null)

    useEffect(()=>{
        firebase.db.collection('applications').onSnapshot(snapshot=>{
            setApplications(snapshot.docs.length)
        })
        firebase.db.collection('openings').onSnapshot(snapshot=>{
            setOpenings(snapshot.docs.length)
        })
    },[])
    const handleClick = redirect => () =>{
            navigate(redirect)
    }
    return(
        <Dash>
           <Grid container spacing={3}>
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
                                <Typography variant="h6" align="right">{applications == null?`0`:applications}</Typography>
                            </div>
                        </div>
                        </CardContent>
                        <Divider variant="middle"/>
                        <CardActionArea classname={classes.cardActions}>
                            <CardActions >
                                <Typography className={classes.typography}><IoIosRefresh />Updated Now</Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
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
                                <Typography variant="h6" align="right">{openings == null?`0`:openings}</Typography>
                            </div>
                        </div>
                        </CardContent>
                        <Divider variant="middle"/>
                        <CardActionArea classname={classes.cardActions}>
                            <CardActions >
                                <Typography className={classes.typography}><IoIosRefresh />in the last hour</Typography>
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
                    <Applications />
                </Grid>
           </Grid>
        </Dash>
    )
}
export default Overview