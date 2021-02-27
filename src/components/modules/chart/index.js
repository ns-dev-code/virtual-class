// import React, { Component, useState, useEffect } from 'react'
// import { Bar } from 'react-chartjs-2';
// import moment from 'moment';
// import 'tui-chart/dist/tui-chart.css'
// import { BarChart, LineChart } from '@toast-ui/react-chart'
// import { Grid, Select, MenuItem } from '@material-ui/core';
// import firebase from '../../../lib/firebase'
// import * as _ from 'lodash'
// const Chart = () => {
//     const [dataLabel, setDataLabel] = useState([])
//     const [chartLabel, setChartLabel] = useState('')
//     const [size, setSize] = useState(7)
//     const [dataSet, setDataSet] = useState(null)

//     console.log({ dataSet })

//     const data1 = dataSet ? {
//         categories: dataSet.labels,
//         series: [
//             {
//                 name: 'Application',
//                 data: dataSet.counts
//             }
//         ]
//     } : {

//         };

//     const options = dataSet ? {
//         chart: {
//             width: 600,
//             height: 350,
//             title: `${chartLabel} Applications`,
//             format: '10'
//         },
//         xAxis: {
//             title: 'Applications',
//             min: 0,
//             max: dataSet.counts + dataSet.labels,
//             suffix: ''
//         },
//         yAxis: {
//             title: 'Month'
//         },
//         series: {
//             showLabel: true
//         }
//     } : {};

//     useEffect(() => {

//         console.log(moment(Date.now()).subtract(30, 'days'))
//         let array = []
//         let i = 1;
//         while (i <= 8) {
//             array.push(i)
//             i++;
//         }
//         const estimatedDates = array.map((item, index) => moment(moment(Date.now()).add(0, 'days')).subtract(index, 'days').format('ll')).reverse()
//         setDataLabel(estimatedDates)

//         const data = [
//             1563804949822,
//             1564410757135,
//             1564411044591,
//             1563804383357,
//             1564202208253,
//             1564203662759,
//             1564203477144,
//             1564559005384
//         ]


//         const actualDates = data.map(date => moment(date).format('ll'))
//         console.log({ estimatedDates }, { actualDates })
//         // const intersectedDates = _.intersectionWith(estimatedDates, actualDates, _.isEqual)
//         // console.log({ intersectedDates })
//         // const filteredData = actualDates.map(actual => {
//         //     return {
//         //         count: _.size(intersectedDates.filter(act => act == actual)),
//         //         date: actual
//         //     }
//         // })

//         // // console.log()

//         // const ddd = intersectedDates.map(inter => {
//         //     return {
//         //         count: _.size(actualDates.filter(act => act == inter)),
//         //         date: inter
//         //     }
//         // })

//         const finaldataset = estimatedDates.map(est => {
//             return {
//                 count: _.size(actualDates.filter(actualdate => actualdate === est)),
//                 date: est
//             }
//         })

//         setDataSet({
//             labels: finaldataset.map(fnd => fnd.date),
//             counts: finaldataset.map(fnd => fnd.count)
//         })


//         console.log()

//     }, [])

//     console.log(dataSet)

//     return (
//         <React.Fragment>
//             <Grid container spacing={3} >
//                 <Grid item xs sm md={12} lg={6} xl={6}>
//                     <BarChart
//                         data={data1}
//                         options={options}
//                     ></BarChart>
//                 </Grid>
//             </Grid>
//             {/* <Select value={chartLabel} onChange={(event) => {
//                 //console.log(event)
//                 console.log(event.target.value)
//                 setChartLabel(event.target.value)
//                 setSize(30)
//             }}>
//                 <MenuItem value={'Weekly'}>Weekly</MenuItem>
//                 <MenuItem value={'Monthly'}>Monthly</MenuItem>
//                 <MenuItem value={'Yearly'}>Yearly</MenuItem>
//             </Select> */}
//         </React.Fragment>
//     )

// }

// export default Chart
