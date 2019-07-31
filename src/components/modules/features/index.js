// import React , { useEffect , useState } from 'react'
// import { useStyles , settings } from './features-styles'
// import { Container , Typography, CardContent , Card , Fab , Divider, Button} from '@material-ui/core'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import firebase from '../../../utils/firebase'
// import JobDetails from './job-details'

// function Features() {

//     const classes = useStyles()
//     const [open,setOpen] = useState(false)
//     const [openings,setOpenings ] = useState([])
//     const [viewDetails, setDetails] = useState(null)

//     useEffect(()=>{
//         if(process.browser) {
//             firebase.db.collection('openings').limit(6).get()
//             .then(docRef=>{
//                 docRef.docs.map(data=>{
//                     setOpenings(value=>value.concat(data.data()))
//                 })
//             })
//         }
//     },[])

//     const handleViewMore = index => () =>{
//           var data = null
//           data = openings[index]
//           setDetails(data)
//           setOpen(true)
//     }

//     const handleClose = () =>{
//         setOpen(false)
//         setDetails(null)
//     }

//     return (
//         <Container maxWidth="md" >
//             <div style={{margin:'1.0rem'}}>
//              <Typography variant="h4" align="center" className={classes.text}>Featured Jobs</Typography>

//             </div>
//             <div>
//                 <Slider {...settings}>
//                     {
//                         openings.map((data,index)=>(
//                                  <Card key={index}  >
//                                     <CardContent >
//                                         <div>
//                                             <Typography align="center" variant="h6" className={classes.featuresText}>{data.title}</Typography>
//                                             <div className={classes.jobDescription}>
//                                                 <Typography align="center">
//                                             {data.description}      
//                                                 </Typography>
//                                             </div>
//                                         <div className={classes.div}>
//                                             <Fab 
//                                             variant="extended"
//                                             size="small"
//                                             aria-label="apply"
//                                             className={classes.applyButton}
//                                         >
//                                             Apply Now
//                                         </Fab>
//                                         </div>
//                                         </div>
//                                     </CardContent>
//                              </Card>
//                         ))
//                     }
//                 </Slider>
               
//             </div>
//             { 
//                 (open == true && viewDetails != null )&& 
//                                 <JobDetails open={open} details={viewDetails}>
//                                     <Button onClick={handleClose} color="primary">Cancel</Button>
//                                 </JobDetails> 
//             }
//         </Container>
//     )
// }

// export default Features



import React , { useEffect , useState } from 'react'
import { useStyles , settings } from './features-styles'
import { Container , Typography, CardContent , Card , Fab , Button} from '@material-ui/core'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import firebase from '../../../lib/firebase'
import {  IoMdLocate , IoIosList  , IoIosGlobe} from 'react-icons/io'
import JobDetails from './job-details'
import {  navigate } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { Markdown } from 'react-showdown'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as _ from 'lodash'

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
            console.log(openings)
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
    return (
        <Container  className={classes.container} >
            <div style={{margin:'1.0rem'}}>
             <Typography variant="h4" align="center" className={classes.text}>{t('Featured Jobs')}</Typography>

            </div>
            <div>
                <Slider {...settings}>
                    {
                        openings.length > 0 && openings.map((data,index)=>(
                                 <Card >
                                    <CardContent  >
                                            <div className={classes.contentHead}>
                                                <Typography align="center" variant="h6" className={classes.featuresText}>{data.title}</Typography>
                                            </div>
                                            <div className={classes.jobDescription} onClick={handleViewMore(index)}>
                                                <table>
                                                    <tbody>
                                                       <tr style={{margin:'1.0rem'}}>
                                                           <td><IoIosGlobe color="#2F2E41" size="15"/></td>
                                                           <td><Typography align="inherit" className={classes.contentext} style={{marginLeft:'1.0rem'}}>{data.company?_.capitalize(data.company):`Talent Excel`}</Typography></td>
                                                       </tr>
                                                       <tr style={{margin:'1.0rem'}}>
                                                           <td><IoMdLocate color="#2F2E41" size="15"/></td>
                                                           <td><Typography align="inherit" style={{marginLeft:'1.0rem'}}>{data.location}</Typography></td>
                                                       </tr>
                                                       <tr style={{margin:'1.0rem'}}>
                                                           <td><IoIosList color="#2F2E41" size="15"/></td>
                                                           <td style={{marginLeft:'1.0rem'}}><Typography align="justify" variant="caption" >{<Markdown markup={data.description.substr(0,50)}/>}...</Typography>
                                                                    <a onClick={handleViewMore(index)} style={{color:'blue'}}>More</a>
                                                            </td>
                                                       </tr>
                                                      
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
}

export default Features