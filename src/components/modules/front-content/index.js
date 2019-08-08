import React , {Suspense} from 'react'
import { Typography , Grid } from '@material-ui/core'
import { useStyles , charPose , textHead } from './front-styles'
import frontImage from '../../../images/main.png'
import Animation from '../../animate/animate-aos'
import SplitPost from 'react-pose-text'
import {  useTranslation } from 'react-i18next'
import { navigate } from 'gatsby'
import Hire from '../../../images/hire.svg'

const Loader = () => <div>Loader ...</div>

function FrontContent(props){

    const classes = useStyles()
    const { t } = useTranslation('translation')
    const handleClick = () =>{
        navigate('/register')
    }
    if(t){
        return(
            <React.Fragment>
              <section className={classes.contentMargin}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} className={classes.textPadding}>
                            <div >
                            <Typography variant="h3" align="center" className={classes.texthead}>
                                    <SplitPost initialPose="exit" pose="enter" charPoses={charPose}>
                                    {t('Talent Development & Discovery Platform')}
                                    </SplitPost>
                                  </Typography>
                            <div className={classes.getStarted} onClick={handleClick}>
                               <div className={classes.getStartedContent}>
                                    <Typography align="center" >
                                           {t('Get Started')}
                                    </Typography>
                               </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} className={classes.contentImage} >
                        <Animation direction="fade-up">
                            <img src={Hire} alt="frontImage" className={classes.frontImage} />
                        </Animation>
                    </Grid>
                  </Grid>
               </section>
            </React.Fragment>
        )
    }else{
        return null
    }
}
export default (FrontContent)