import React , { useEffect , useState } from 'react'
import { useStyles , settings } from './features-styles'
import { Container , Typography, CardContent , Card , Fab} from '@material-ui/core'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import firebase from '../../../lib/firebase'

function Features() {

    const classes = useStyles()
    const [openings , setOpenings ] = useState([])

    useEffect(()=>{
            if(process.browser){
                firebase.db.collection('openings').limit(6).get()
                .then(docRef=>{
                    docRef.docs.map(data=>{
                        setOpenings(value=>value.concat(data.data()))
                    })
                })
            }
    },[])
    return (
        <Container maxWidth="md" >
            <div style={{margin:'1.0rem'}}>
             <Typography variant="h4" align="center" className={classes.text}>Featured Jobs</Typography>

            </div>
            <div>
                <Slider {...settings}>
                    {
                        openings.map((data,index)=>(
                            <div key={index}>
                                 <Card className={classes.card}>
                                    <CardContent >
                                        <div>
                                            <Typography align="center" variant="h6" className={classes.featuresText}>{data.title}</Typography>
                                            <div className={classes.jobDescription}>
                                                <Typography align="center">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className={classes.div}>
                                            <Fab 
                                            variant="extended"
                                            size="small"
                                            aria-label="apply"
                                            className={classes.applyButton}
                                        >
                                            Apply Now
                                        </Fab>
                                        </div>
                                    </CardContent>
                             </Card>
                            </div>
                        ))
                    }
                </Slider>
               
            </div>
        </Container>
    )
}

export default Features