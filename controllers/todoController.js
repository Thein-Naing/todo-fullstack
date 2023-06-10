const Todo = require("../models/Todo");
const mongoose = require("mongoose");

//create todo.
const addTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (error) {
    res.send(error);
  }
};

// fetch todos
    const getTodos = () => async (req, res) => {
      try {
        const todos = await Todo.find();
        res.json(todos);
  } catch (error) {
    res.send(error);
  }
};

// fetch todo.

const getTodo = () => async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
} catch (error) {
res.send(error);
}
};

const updateTodo = () => async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params,
      {
        title: req.body.title,
        description: req.body.description,
      },
      {
        new: true,
        runValidators: true,
      });
} catch (error) {
res.send(error);
}
};




module.exports = {
  addTodo, getTodos, getTodo, updateTodo
};
