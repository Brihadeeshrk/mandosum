import express from 'express';
const app = express()

const routes = require('./router')

const hostname = '127.0.0.1'
const port = 8080

app.use(express.static('public'))
app.use(routes)
app.listen(port, () => {
    console.log('Server is Listening at http://${hostname}:${port}/')
})