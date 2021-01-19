import express from 'express'
import bodyParser from 'body-parser'
import './config/env.config'
import { ValidationError } from 'express-validation'
import routes from './routes'
import { CREATED, INTERNAL_SERVER_ERROR } from './constants/http-status'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes)

// Validation error response
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  return res.status(INTERNAL_SERVER_ERROR).json(err)
})

const port = process.env.PORT || 3000

app.get('/', (req, res) =>
  res.status(CREATED).send({
    message: 'Hello Awesome Express',
  })
)

app.listen(port, () => console.log(`Server is running on PORT ${port}`))
