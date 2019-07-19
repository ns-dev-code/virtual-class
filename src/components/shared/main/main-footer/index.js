import React from 'react'
import { useStyles } from './main-footer-style'
import { Typography , Container , Grid , Link } from '@material-ui/core'

function Footer(props){

    const classes = useStyles()
    
    const footers = [
        {
          title: 'Company',
          description: ['Team', 'History', 'Contact us', 'Locations'],
        },
        {
          title: 'Features',
          description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
        },
        {
          title: 'Resources',
          description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
        },
        {
          title: 'Legal',
          description: ['Privacy policy', 'Terms of use'],
        },
      ];

    return(
        <React.Fragment>
            <Container maxWidth="lg" component="footer" className={classes.footer}>
                <Grid container spacing={4} justify="space-evenly">
                    {
                        footers.map(footer=>(
                            <Grid item xs={6} sm={3} key={footer.title}>
                                <Typography variant="h6" color="textPrimary">
                                    {footer.title}
                                </Typography>
                                <ul>
                                    {
                                        footer.description.map(item=>(
                                            <li key={item}>
                                                <Link href="#" variant="subtitle1" color="textSecondary" >
                                                    {item}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Footer