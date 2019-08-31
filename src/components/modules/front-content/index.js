import React  from 'react';
import { Typography , Grid } from '@material-ui/core';
import { useStyles , charPose , textHead } from './front-styles';
import frontImage from '../../../images/main.png';
import Animation from '../../animate/animate-aos';
import SplitPost from 'react-pose-text';
import {  useTranslation } from 'react-i18next';
import Img from 'gatsby-image';
import { navigate , StaticQuery , graphql } from 'gatsby';
import Hire from '../../../images/hire.svg';


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
                                    {/* <SplitPost initialPose="exit" pose="enter" charPoses={charPose}> */}
                                    {t('Talent Development & Discovery Platform')}
                                    {/* </SplitPost> */}
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
                        {/* <Animation direction="fade-up"> */}
                            {/* <img src={Hire} alt="frontImage" className={classes.frontImage} /> */}
                        {/* </Animation> */}
                        <StaticQuery
                            query={graphql`
                                {
                                hireAssist:file(relativePath:{eq:"main.png"}){
                                    childImageSharp{
                                    fluid(maxWidth:1600){
                                        ...GatsbyImageSharpFluid
                                    }
                                    }
                                }
                                }
                            `}
                             render={(data)=>(
                                <Grid item xs={12} sm={6} md={6} className={classes.contentImage} >
                                   
                                     {/* <img src={Hire} alt="frontImage" className={classes.frontImage} /> */}
                                     <Img fluid={data.hireAssist.childImageSharp.fluid} alt="Hire" className={classes.frontImage}/>
                                </Grid>
                             )}
                        />
                  </Grid>
               </section>
            </React.Fragment>
        )
    }else{
        return null
    }
}
export default (FrontContent)