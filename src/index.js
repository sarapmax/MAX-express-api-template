import express from 'express'
import bodyParser from 'body-parser'
import './config/env.config'
import routes from './routes'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes)

const port = process.env.PORT || 3000

app.get('/', (req, res) =>
  res.status(200).send({
    message: 'Hello Awesome Express',
  })
)

app.listen(port, () => console.log(`Server is running on PORT ${port}`))
