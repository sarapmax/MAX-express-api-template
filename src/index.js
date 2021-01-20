import express from 'express'
import bodyParser from 'body-parser'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
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

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '0.0.1',
      description: 'an API made with Express and documented with Swagger',
    },
    servers: [
      {
        url: process.env.API_URL,
      },
    ],
  },
  apis: [],
}

const specs = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))

const port = process.env.PORT || 3000

app.get('/', (req, res) =>
  res.status(CREATED).send({
    message: 'Hello Awesome Express',
  })
)

app.listen(port, () => console.log(`Server is running on PORT ${port}`))
