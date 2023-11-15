const express = require('express')
const cors = require('cors')
const routes = require('../routes')

const app = express()
const port = 5000

//handle cors, form data and json
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routes API
routes(app)

app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}')
})

module.exports = app