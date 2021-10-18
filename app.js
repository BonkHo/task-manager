console.log("Task Manager App");

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.get('/api/v1/tasks) - GET all the tasks
app.use("/api/v1/tasks", tasks);
// app.post('/api/v1/tasks) - POST a new task
// app.get('/api/v1/tasks/:id') - GET a single task by ID
// app.patch('/api/v1/tasks/:id') - PATCH (edit) a task by ID
// app.delete('/api/v1/tasks/:id') - DELETE a task by ID

// Server port
PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listnening at http://localhost:${PORT}`);
});
