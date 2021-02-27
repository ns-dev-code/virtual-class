import React from 'react'
import { useStyles } from './section-style'
import { Typography, Container, Grid } from '@material-ui/core'
import Animation from '../../animate'
import signIn from '../../../images/signIn.png'
import Img from 'gatsby-image';
import { navigate, StaticQuery, graphql } from 'gatsby'
import google from '../../../images/google.png'
import { useTranslation } from 'react-i18next'

function GettingStarted(props) {

    const classes = useStyles()
    const { t } = useTranslation('translation')

    const handleSignInCLick = () => {
        navigate('/login')
    }

    return (
        <React.Fragment>
            <StaticQuery
                query={graphql`
                    query{
                        signIn:file(relativePath:{eq:"signIn.png"}){
                            childImageSharp{
                            fluid(maxWidth:1600){
                                ...GatsbyImageSharpFluid
                            }
                            }
                        }
                    }
                `}
                render={(data) => (
                    <Container className={classes.content}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={6} md={6}>
                                <Animation direction="fade-in">
                                    <Typography variant="h4" className={classes.text} align="center">
                                        {t('Transform Your Business')}
                                    </Typography><br />
                                    <Typography className={classes.captionText} align="center">
                                        The Talent Excel enables teams to work together in one system,
                                        across every phase of the talent lifecycle. Manage relationships, not applicants.
                                </Typography>
                                </Animation>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} style={{ margin: 'auto' }}>
                                {/* <Animation direction="fade-in"> */}
                                <Img fluid={data.signIn.childImageSharp.fluid} alt="Signin" className={classes.signImage} />
                                {/* <img src={signIn} className={classes.signImage} alt="signIn" /> */}
                                <div className={classes.signIn} onClick={handleSignInCLick}>
                                    <Typography align="center" >
                                        {t('SignIn')}
                                    </Typography>
                                </div>
                                {/* </Animation> */}
                            </Grid>
                        </Grid>
                    </Container>
                )}
            />
        </React.Fragment>
    )
}
export default GettingStarted

