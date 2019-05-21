var express = require('express');
var router = express.Router();

var todo_controller = require('../controllers/todo');

router.get('/', todo_controller.test);

router.post('/', todo_controller.todo_create);

router.get('/:id', todo_controller.todo_read);

router.put('/:id', todo_controller.todo_update);

router.delete('/:id', todo_controller.todo_delete);

module.exports = router;