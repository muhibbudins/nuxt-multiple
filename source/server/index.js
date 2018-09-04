import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import bodyParser from 'body-parser'

/**
 * Import any Routes on API folder
 */
import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || {{ port }}

/**
 * Set port
 */
app.set('port', port)

/**
 * Use body parser for handling POST method
 */
app.use(bodyParser.json())

/**
 * Use given APIs
 */
app.use('/api', api)

/**
 * Import and use Nuxt.js configuration
 */
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

/**
 * Create new instance of Nuxt
 */
const nuxt = new Nuxt(config)

/**
 * Set build only on development mode
 */
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

/**
 * Use Nuxt renderer on Express
 */
app.use(nuxt.render)

/**
 * Start App
 */
app.listen(port, host)

/**
 * Show listen port
 */
console.log(`Server listening on ${host}:${port}`)
