import React from 'react'
import { Typography , Grid } from '@material-ui/core'
import { useStyles , charPose , textHead } from './front-styles'
import frontImage from '../../../images/main.png'
import Animation from '../../animate/animate-aos'
import SplitPost from 'react-pose-text'

function FrontContent(props){

    const classes = useStyles()

    return(
        <React.Fragment>
           <section className={classes.contentMargin}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6} className={classes.textPadding}>
                        <div >
                        <Typography variant="h3" align="center" className={classes.texthead}>
                        <SplitPost initialPose="exit" pose="enter" charPoses={charPose}>
                            Connecting
                        </SplitPost>
                    </Typography>
                    <Animation direction="fade-up-right">
                        <Typography variant="h3" align="center" className={classes.text} >
                            <SplitPost charPoses={textHead}>
                                Organisation
                            </SplitPost>
                        </Typography>
                        <Typography variant="h3" align="center" className={classes.text}>
                            <SplitPost pose="enter" charPoses={textHead}>
                                with talent
                            </SplitPost>
                        </Typography>
                    </Animation>
                        
                        <div className={classes.getStarted}>
                           <div className={classes.getStartedContent}>
                                <Typography align="center" >
                                        Get Started
                                </Typography>
                           </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={classes.contentImage} >
                    <Animation direction="fade-up-left">
                        <img src={frontImage} alt="frontImage" className={classes.frontImage} />
                    </Animation>
                </Grid>
              </Grid>
           </section>
        </React.Fragment>
    )
}
export default FrontContent