const express = require('express');
const router = express.Router();

const { addTodo, getTodos, getTodo, updateTodo } = require('../controllers/todoController')



router.post('/', addTodo);
router.get('/', getTodos);
router.get('/:id', getTodo);
router.get('/:id', updateTodo);






module.exports = router;
