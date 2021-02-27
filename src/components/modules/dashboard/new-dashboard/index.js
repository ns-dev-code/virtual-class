import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core'
import { data } from './data'
import MediaCard from './Card'
import Table from './Table'
import PrimarySearchAppBar from './AppBar'

export const NewDashboard = (props) => {
    console.log(props.user)
    const [user, setUser] = useState();

    useEffect(() => {
        if (props.user)
            setUser(props.user)
    }, [props.user])

    return (
        <div>
            <PrimarySearchAppBar />
            <Grid container justify="center">
                <Box mt={3} width="100%" display="flex" justifyContent="center">
                    <Grid item xs={11} container direction="row" justifyContent="center"
                        spacing={3}
                    >
                        {
                            data.map(value => (
                                <Grid item xs={3}>
                                    <Box bgcolor="gray" p={1} textAlign="center" mb={1}>
                                        <Typography style={{ color: '#fff', fontWeight: 'medium', textTransform: 'uppercase' }} variant="subtitle1">{value.title}</Typography>
                                    </Box>
                                    <MediaCard />
                                    <Box mt={2} display="flex" justifyContent="center">
                                        <Button style={{
                                            borderRadius: 24,
                                            textTransform: 'none'
                                        }} variant="outlined" size="medium" color="primary">

                                            {
                                                user?.userType === 'student' ? 'Share Session' : ' + Create Session'
                                            }
                                        </Button>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
                <Box width="90%">
                    <Table />
                </Box>
            </Grid>
        </div>
    )
}


const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NewDashboard)
