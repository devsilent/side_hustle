const express = require('express')
const app = express()
const Port = 3000

// Routers
const jobs = require('./routers/Jobs')

app.use('/jobs', jobs)

app.listen(Port, ()=> {
    console.log(`App is listening to PORT ${Port}`)
})