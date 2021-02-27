import React from 'react'
import MaterialTable from 'material-table'
import { Box, Button, Typography } from '@material-ui/core'
import moment from 'moment'
import { data } from './data'
import { upperCase } from 'lodash'

function Table() {
    const columns = [{
        title: 'Title',
        field: 'title', align: 'center',
        render: rowData => <Box bgcolor="gray" p={1} textAlign="center" mb={1}>
            <Typography style={{ color: '#fff', fontWeight: 'medium', textTransform: 'uppercase' }} variant="subtitle1">{rowData?.title || '-'}</Typography>
        </Box>
    }, {
        title: 'Date',
        field: 'date', align: 'center',
        render: rowData => <div>{moment(rowData?.date).format('DD-MM-YYYY') || '-'}</div>
    }, {
        title: 'Time',
        field: 'time', align: 'center',
        render: rowData => <div>{moment(rowData?.date).format('HH:mm:s a') || '-'}</div>
    }, {
        title: 'Code',
        field: 'code', align: 'center',
        render: rowData => <Button variant="outlined">
            {
                upperCase(rowData?.code?.split('-')[0]) || '-'
            }
        </Button>
    }, {
        title: 'Go to Class',
        field: 'goToClass', align: 'center',
        render: rowData => <Button style={{
            borderRadius: 24,
            textTransform: 'none'
        }} variant="outlined" size="medium" color="primary">
            Join Session
        </Button>
    }]
    return (
        <Box width="100%" mt={3}>
            <MaterialTable
                title=""
                options={{
                    search: false,
                    toolbar: false
                }}
                columns={columns}
                data={data}
            />
        </Box>
    )
}

export default Table
