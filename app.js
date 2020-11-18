const express = require('express')
const app = express()

const routes = require('./router')

const port = 8080

app.use(express.static('public'))
app.use(routes)
app.listen(port, () => {
    console.log('Server is Listening at 8080')
})