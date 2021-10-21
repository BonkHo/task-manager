console.log("Task Manager App");

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.get("/", (req, res) => {
	res.send("Hello World");
});

app.use("/api/v1/tasks", tasks);

// Server port
PORT = 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, () => {
			console.log(`Server is listnening at: http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
