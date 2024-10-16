const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const dashboardStudents = require('./Router/studentRoutes')
const allStudents = require('./Router/generateRoutes')
const loginRoute = require('./Router/loginRoute')
dotenv.config()

const PORT = process.env.PORT | 4999

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', dashboardStudents)
app.use('/api', allStudents)
app.use('/api', loginRoute)

app.listen(PORT, () => {
    console.log(`Server started successful on ${PORT} port`)
})