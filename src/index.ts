import AdminJS from 'adminjs'
import { locales as AdminJSLocales } from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import * as AdminJSMongoose from '@adminjs/mongoose'

import mongoose from 'mongoose'
import { Produto } from './models/Produto.model.js'
import { Cliente } from './models/Cliente.model.js'
import { Pedido } from './models/Pedido.model.js'
import { Marca } from './models/Marca.model.js'
const PORT = 3000

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

const start = async () => {
  const mongooseDB = await mongoose.connect("mongodb://127.0.0.1:27017/storage-system")
  const app = express()


  const admin = new AdminJS({
    databases: [mongooseDB],
    resources: [Produto,Cliente,Pedido,Marca],
    locale: {
      language: 'pt-BR',
      availableLanguages: Object.keys(AdminJSLocales)
    },
  })

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()