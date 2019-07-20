import React from 'react'
import { Card , CardContent , Dialog, DialogContent, DialogActions , Typography } from '@material-ui/core'
import { useStyles } from './features-styles'
import { IoIosGlobe , IoMdLocate , IoMdBriefcase , IoIosList } from 'react-icons/io'
import { Markdown } from 'react-showdown'

export default function JobDetails(props) {

    const classes =  useStyles()
    const { open , details } = props 

        return (
            <Dialog open={open} maxWidth="xs" fullWidth>
                <DialogContent>
                     <Typography variant="h6" className={classes.featuresText}>
                         {details.title}
                     </Typography>
                     <div className={classes.viewDetails}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><IoIosGlobe size="20" color="black" /></td>
                                    <td><Typography variant="body1">{details.company}</Typography></td>
                                </tr>
                                <tr>
                                    <td><IoMdLocate color="black" size="20"/></td>
                                    <td><Typography variant="body1">{details.location}</Typography></td>
                                </tr>
                                <tr>
                                    <td><IoMdBriefcase color="black" size="20"/></td>
                                    <td><Typography variant="body1">{details.salary}</Typography></td>
                                </tr>
                                <tr>
                                    <td><IoIosList color="black" size="20"/></td>
                                    <td><div>
                                    <Markdown markup={details.description}/>    
                                    </div></td>
                                </tr>
                            </tbody>
                        </table>
                     </div>
                </DialogContent>
                <DialogActions>
                    {props.children}
                </DialogActions>
            </Dialog>
        )
}
