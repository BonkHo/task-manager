console.log("Task Manager App");

const express = require("express");
const app = express();
const PORT = 3000;

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.get('/api/v1/tasks) - GET all the tasks
// app.post('/api/v1/tasks) - POST a new task
// app.get('/api/v1/tasks/:id') - GET a single task by ID
// app.patch('/api/v1/tasks/:id') - PATCH (edit) a task by ID
// app.delete('/api/v1/tasks/:id') - DELETE a task by ID

app.listen(PORT, () => {
  console.log(`Server is listnening at http://localhost:${PORT}`);
});
