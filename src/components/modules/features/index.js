import React , { useEffect , useState } from 'react'
import { useStyles , settings } from './features-styles'
import { Container , Typography, CardContent , Card , Fab , Button, CardHeader} from '@material-ui/core'
import firebase from '../../../lib/firebase'
import JobDetails from './job-details'
import {  navigate } from 'gatsby'
import { useTranslation } from 'react-i18next'
import * as _ from 'lodash'
import world from '../../../images/icons/world.svg'
import job from '../../../images/icons/job.svg'
import location from '../../../images/icons/location.svg'
import Progress from '../../../lib/loading'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery'
import Loadable from '@loadable/component'
const OwlCarousel  = Loadable(()=>import('react-owl-carousel'))

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
                <OwlCarousel
                    className="owl-theme"
                    loop="true"
                    margin={10}
                    items={4}
                    responsiveClass="true"
                    center="true"
                    responsive={{
                        0: {
                            items: 1,
                            dots:false,
                            center:true
                        },
                        600: {
                            items: 3,
                            center:true,
                            nav:true,
                            dots:false
                        },
                        1000: {
                            items: 4,
                            center:true,
                            loop:true,
                            dots:true,
                            nav:false,
                            autoplay:true,
                            autoplayTimeout:2000,
                            autoplayHoverPause:true
                        },
                    }}
                >
                  {
                      openings.length > 0 && openings.map((data,index)=>(
                        <Card className={classes.card}>
                            <CardHeader
                                title={data.title}
                                titleTypographyProps={{align:"center"}}
        
                            />
                            <CardContent >
                                <table  onClick={handleViewMore(index)}>
                                    <tbody>
                                    <tr style={{margin:'1.0rem'}} >
                                        <td><img src={world} alt="job" className={classes.icons}/></td>
                                        <td><Typography align="inherit" className={classes.contentext} style={{marginLeft:'1.0rem'}}>{data.company?_.capitalize(data.company):`Talent Excel`}</Typography></td>
                                    </tr>
                                    <tr style={{margin:'1.0rem'}}>
                                        <td><img src={location} alt="location"  className={classes.icons}/></td>
                                        <td><Typography align="inherit" style={{marginLeft:'1.0rem'}}>{data.location}</Typography></td>
                                    </tr>
                                    </tbody>
                                </table>
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
                </OwlCarousel>
                
                   
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