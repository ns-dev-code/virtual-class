const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/public/`))


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/`)
})


app.get('/authorise/:id', (req, res) => {
    res.sendFile(`${__dirname}/public/authorise/`)
})

app.get('/apply-now/:id', (req, res) => {
    res.sendFile(`${__dirname}/public/apply-now/`)
})
app.listen(8080, () => {
    console.log(`App Listening to port 8080`)
})