import React from 'react' 
import { useStyles } from './section-style'
import { Typography , Container , Grid } from '@material-ui/core'
import Animation from '../../animate/animate-aos'
import signIn from '../../../images/signIn.png'
import { navigate } from 'gatsby'
import google from '../../../images/google.png'
import { useTranslation } from 'react-i18next'

function GettingStarted(props){

    const classes= useStyles()
    const { t } = useTranslation('translation')

    const handleSignInCLick = () =>{
        navigate('/login')
    }

    return(
        <React.Fragment>
                <Container  className={classes.content}>
                    <Grid container spacing={2} >
                       <Grid item xs={12} sm={6} md={6}>
                            <Animation direction="fade-in">
                            <Typography variant="h4" className={classes.text} align="center">
                                {t('Transform Your Business')}
                            </Typography><br/>
                            <Typography className={classes. captionText} align="center">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                            </Typography>
                            </Animation>
                       </Grid>
                       <Grid item xs={12} sm={6} md={6} style={{margin:'auto'}}>
                            <Animation direction="fade-in">
                                <img src={signIn} className={classes.signImage} alt="signIn" />
                                <div className={classes.signIn} onClick={handleSignInCLick}>
                                    <Typography  align="center" >
                                         {t('SignIn')}
                                     </Typography>
                                </div>
                            </Animation>
                       </Grid>
                    </Grid>
                </Container>
        </React.Fragment>
    )
}
export default GettingStarted

