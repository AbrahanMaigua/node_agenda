// filepath: /home/abrahan/Projetos/agenda/app/controller/task.js
const Task = require('../models/shema/task');


// Example: Create a new task
const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.render('task/create');

    // res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Example: Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
    res.render('task/list');

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Example: Update a task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.render('task/create');

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Example: Delete a task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.render('task/delete');
    // res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};