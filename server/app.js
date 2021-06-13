const express = require('express')
const app = express()
const Port = 3000

app.get('/', (req, res) => {
    res.send("HELLO")
})

app.listen(Port, ()=> {
    console.log(`App is listening to PORT ${Port}`)
})