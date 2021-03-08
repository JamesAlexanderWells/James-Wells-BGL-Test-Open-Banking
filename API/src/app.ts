import express from 'express'
import * as routes from './route-index'

import config = require('config')
const port: number = config.get('server.port') as number
const app = express()
const apiDocsPath = config.get('apiDocsPath')


const base: string = config.get('server.baseAddress')

app.use(base, routes.indexRouter)

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`)
})
