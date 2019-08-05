import React , { useEffect , useState } from 'react'
import { useStyles , settings } from './features-styles'
import { Container , Typography, CardContent , Card , Fab , Button} from '@material-ui/core'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import firebase from '../../../lib/firebase'
import JobDetails from './job-details'
import {  navigate } from 'gatsby'
import { useTranslation } from 'react-i18next'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as _ from 'lodash'
import world from '../../../images/icons/world.svg'
import job from '../../../images/icons/job.svg'
import location from '../../../images/icons/location.svg'
import Progress from '../../../lib/loading'

function Features() {

    const classes = useStyles()
    const [open,setOpen] = useState(false)
    const [openings,setOpenings ] = useState([])
    const [viewDetails, setDetails] = useState(null)
    const { t } = useTranslation('translation')
    
    useEffect(()=>{
                if(process.browser) {
                    firebase.db.collection('openings').get()
                    .then(docRef=>{
                        docRef.docs.map(data=>{
                            setOpenings(value=>value.concat(data.data()))
                        })
                    })
                    .catch(error=>{
                        alert(error.message)
                    })
                }
            },[])
    const handleViewMore = index => () =>{
         try{   
            if(index >= 0){
                var data = null
                data = openings[index]
                setDetails(data)
                setOpen(true)
            }
         }catch(error){
             alert(error)
         }
    }

    const handleClose = () =>{
        setOpen(false)
        setDetails(null)
    }
    const handleApply = applId => () =>{
        navigate(`/apply-now/${applId.trim()}`)
    }

    if(openings.length > 0){
       
        var Convertor =  require('react-showdown').Converter;
        var convertor =  new Convertor();
        var opening = []
      
        openings.forEach((data,index)=>{
                var convert = convertor.convert(data.description)
                // console.log(Object.values(convert.props.children[0]))
                opening.push(convert)
                // console.log(opening)
        })
        
        return (
            <Container  className={classes.container} >
                <div style={{margin:'1.0rem'}}>
                 <Typography variant="h4" align="center" className={classes.text}>{t('Featured Jobs')}</Typography>
    
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            openings.length > 0 && openings.map((data,index)=>(
                                
                                     <Card className={classes.card}>
                                        <CardContent  >
                                                <div className={classes.contentHead}>
                                                    <Typography align="center" variant="h6" className={classes.featuresText}>{data.title}</Typography>
                                                </div>
                                                <hr className={classes.borderBottom}/>
                                                <div className={classes.jobDescription} onClick={handleViewMore(index)}>
                                                    <table>
                                                        <tbody>
                                                           <tr style={{margin:'1.0rem'}} >
                                                               <td><img src={world} alt="job" className={classes.icons}/></td>
                                                               <td><Typography align="inherit" className={classes.contentext} style={{marginLeft:'1.0rem'}}>{data.company?_.capitalize(data.company):`Talent Excel`}</Typography></td>
                                                           </tr>
                                                           <tr style={{margin:'1.0rem'}}>
                                                               <td><img src={location} alt="location"  className={classes.icons}/></td>
                                                               <td><Typography align="inherit" style={{marginLeft:'1.0rem'}}>{data.location}</Typography></td>
                                                           </tr>
                                                           {/* <tr style={{margin:'1.0rem'}}>
                                                               <td><img src={job} alt="jobDescription"  className={classes.icons}/></td>
                                                               <td style={{marginLeft:'1.0rem'}}>
                                                                       {(openings && opening.length > 0)  && <Typography align="justify" variant="caption" >{opening[index].props.children[0]}...</Typography> }
                                                                        <a onClick={handleViewMore(index)} style={{color:'blue'}}>More</a>  
                                                                </td>
                                                           </tr> */}
                                                          
                                                        </tbody>
                                                    </table>
                                                </div>
                                            <div className={classes.div}>
                                                 
                                                <Fab 
                                                    variant="extended"
                                                    size="small"
                                                    aria-label="apply"
                                                    onClick={handleApply(data.id)}
                                                    color="secondary"
                                                    key="apply Now"
                                                >
                                                  {t('Apply Now')}
                                                </Fab>
                                            </div>
                                        </CardContent>
                                 </Card>
                            ))
                        }
                    </Slider>
                   
                </div>
                { 
                    (open == true && viewDetails) && 
                                    <JobDetails open={open} details={viewDetails}>
                                        <Button onClick={handleClose} color="primary">Cancel</Button>
                                    </JobDetails> 
                }
            </Container>
        )
    }else{
        return (
            <div>
                <Progress loading={true}/>
            </div>
        )
    }
    
}

export default Features