import React, { useEffect, useState } from 'react'
import { useStyles } from './overview-styles'
import { Typography, Card, CardContent, Divider, CardActions, CardActionArea, Grid } from '@material-ui/core';
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
import { Bar } from 'react-chartjs-2';
import moment from 'moment';
import ApplicationChart from '../../chart'

function Overview(props) {
    const classes = useStyles()
    const { user } = props
    const [applicationsCount, setApplicationsCount] = useState(null)
    const [openingsCount, setOpeningsCount] = useState(null)
    const [openings, setOpenings] = useState([])
    const [applications, setApplications] = useState([])
    const [data, setData] = useState();
    const [dataLabel, setDataLabel] = useState([])
    const dataa = {
        labels: dataLabel,
        datasets: [{
            label: 'Weekly Applications',
            data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }


    const data1 = {
        categories: ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
        series: [
            {
                name: 'Application',
                data: [12, 52, 5, 88, 123, 57]
            }
        ]
    };

    const options = {
        chart: {
            width: 600,
            height: 350,
            title: 'Monthly Applications',
            format: '1'
        },
        xAxis: {
            title: 'Applications',
            min: 0,
            max: 200,
            suffix: ''
        },
        yAxis: {
            title: 'Month'
        },
        series: {
            showLabel: true
        }
    };

    useEffect(() => {

        getApplications()
        console.log(moment(Date.now()).subtract(30, 'days'))
        let array = []
        let i = 0;
        while (i <= 7) {
            array.push(i)
            i++;
        }
        // setTimeout(() => {
        setDataLabel(array.map((item, index) => moment(Date.now()).subtract(index, 'days').format('ll')))

        //}, 5000);
    }, [])
    const getApplications = () => {
        if (user) {
            firebase.db.collection('openings').where('createdBy', '==', user.email).get()
                .then(docRef => {
                    if (docRef.empty == true) {
                        setOpeningsCount(0)
                    }
                    else {
                        docRef.docs.map(opening => {
                            setOpeningsCount(docRef.size)

                            firebase.db.collection('applications').where('opening_id', '==', opening.id).get()
                                .then(appl => {
                                    setOpenings(openin => openin.concat(opening.data()))
                                    if (appl.empty === false) {
                                        appl.docs.map(applied => {
                                            setApplications(doc => doc.concat(applied.data()))
                                        })
                                    }
                                })
                        })
                    }
                })
        }

    }

    const refresh = () => {
        setApplicationsCount(null)
        setOpeningsCount(null)
        setApplications([])
        getApplications()
    }
    const handleClick = redirect => () => {
        navigate(redirect)
    }

    console.log(applications)

    return (
        <Dash>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    {/* Openings */}
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <div className={classes.divIcon}>
                                <div className={classes.iconImage}>
                                    <img src={interview} alt="openings" />
                                </div>
                                <div>
                                    <Typography variant="h5" align="right">Openings</Typography>
                                    <Typography variant="h6" align="right">{openingsCount == null ? `0` : openingsCount}</Typography>
                                </div>
                            </div>
                        </CardContent>
                        <Divider variant="middle" />
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
                                    <img src={resume} alt="applications" />
                                </div>
                                <div>
                                    <Typography variant="h5">Applications</Typography>
                                    <Typography variant="h6" align="right">{applications.length ? applications.length : `0`}</Typography>
                                </div>
                            </div>
                        </CardContent>
                        <Divider variant="middle" />
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
                                    <img src={calendar} alt="calendar" />
                                </div>
                                <div>
                                    <Typography variant="h5" align="right">Events</Typography>
                                    <Typography variant="h6" align="right">0</Typography>
                                </div>
                            </div>
                        </CardContent>
                        <Divider variant="middle" />
                        <CardActionArea classname={classes.cardActions}>
                            <CardActions >
                                <Typography className={classes.typography}><IoIosRefresh />Scheduled</Typography>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.applications}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    {
                        applications &&
                        <Applications
                            title='Recently Applied'
                            overview={true}
                        />

                    }
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Bar
                        data={dataa}
                        width={100}
                        height={50}
                        options={{ maintainAspectRatio: false }}
                    ></Bar>
                </Grid>

            </Grid>
            <ApplicationChart />
        </Dash>
    )
}
export default connect(state => ({ user: state.user }))(Overview)