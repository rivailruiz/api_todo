const express = require('express');


module.exports = function(server){
  //API ROTAS

  const router = express.Router();
  server.use('/api', router);

  //ROTAS ToDo

  const todoService = require('../api/todo/todoService');
  todoService.register(router, '/todos');
}
