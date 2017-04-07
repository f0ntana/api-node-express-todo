const express = require('express')

module.exports = (server) => {
  //API Routes
  const router = express.Router()
  server.use('/api', router)
  //TODO
  const todoService = require('../api/todo/todoService')
  todoService.register(router, '/todos')
}