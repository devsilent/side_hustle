const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Jobs")
})

router.get('/:id', (req, res) => {
    res.send("Get job info")
})

router.post('/post', (req, res) => {
    res.send("Create job")
})

module.exports = router