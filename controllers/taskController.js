const taskModel = require('../models/taskModel');

exports.getTasks = (req, res) => {
  res.json(taskModel.getAllTasks());
};

exports.createTask = (req, res) => {
  try {
    const { id, title, description, priority } = req.body;
    const newTask = taskModel.createTask({ id, title, description, priority });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTask = (req, res) => {
  try {
    const updatedTask = taskModel.updateTaskStatus(req.params.id, req.body.completed);
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.deleteTask = (req, res) => {
  try {
    taskModel.deleteTask(req.params.id);
    res.status(200).json({ message: 'La tarea ha sido eliminada' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.getSummary = (req, res) => {
  res.json(taskModel.getSummary());
};
