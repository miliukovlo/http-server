const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT | 4999

const app = express()

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log('Server started successful ')
})