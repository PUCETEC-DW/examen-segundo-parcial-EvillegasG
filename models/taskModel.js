let tasks = [];

function getAllTasks() {
  return tasks;
}

function createTask(task) {
  const exists = tasks.some(t => t.id === task.id);
  if (exists) throw new Error('ID duplicado');
  if (task.priority < 1 || task.priority > 5) throw new Error('La prioridad es inválida');
  const newTask = {
    id: task.id,
    title: task.title,
    description: task.description,
    completed: false,
    priority: task.priority,
  };
  tasks.push(newTask);
  return newTask;
}

function updateTaskStatus(id, completed) {
  const task = tasks.find(t => t.id == id);
  if (!task) throw new Error('La tarea no ha sido encontrada');
  task.completed = completed;
  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex(t => t.id == id);
  if (index === -1) throw new Error('La tarea no ha sido encontrada');
  tasks.splice(index, 1);
}

function getSummary() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pendingTasks = tasks.filter(t => !t.completed);
  const averagePriority = pendingTasks.length
    ? pendingTasks.reduce((sum, t) => sum + t.priority, 0) / pendingTasks.length
    : 0;

  return {
    total,
    completed,
    averagePriority: Number(averagePriority.toFixed(2))
  };
}

module.exports = {
  getAllTasks,
  createTask,
  updateTaskStatus,
  deleteTask,
  getSummary,
};
