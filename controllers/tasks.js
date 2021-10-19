// app.get('/api/v1/tasks) - GET all the tasks
// app.post('/api/v1/tasks) - POST a new task
// app.get('/api/v1/tasks/:id') - GET a single task by ID
// app.patch('/api/v1/tasks/:id') - PATCH (edit) a task by ID
// app.delete('/api/v1/tasks/:id') - DELETE a task by ID

const getAllTasks = (req, res) => {
  res.send("All items from the file");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const editTask = (req, res) => {
  res.send("Edit a task based on the id");
};

const deleteTask = (req, res) => {
  res.send("Delete a task based on the id");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  editTask,
  deleteTask,
};
