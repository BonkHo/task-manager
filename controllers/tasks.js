const Task = require("../models/task");

// Controllers
// app.get('/api/v1/tasks) - GET all the tasks
// app.post('/api/v1/tasks) - POST a new task
// app.get('/api/v1/tasks/:id') - GET a single task by ID
// app.patch('/api/v1/tasks/:id')  - PATCH (edit) a task by ID
// app.delete('/api/v1/tasks/:id') - DELETE a task by ID

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks });
	} catch (err) {
		res.status(500).json({ msg: err });
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (err) {
		res.status(500).json({ msg: err });
	}
};

const getTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOne({ _id: taskId });
		if (!task) {
			return res
				.status(404)
				.json({ msg: `No task with the id: ${taskId} found.` });
		}
		res.status(200).json({ task });
	} catch (err) {
		res.status(500).json({ msg: err });
	}
};

const editTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
			new: true,
			runValidators: true,
		});
		if (!task) {
			return res
				.status(404)
				.json({ msg: `No task with the id: ${taskId} found.` });
		}
		res.status(200).json({ task });
	} catch (err) {
		res.status(500).json({ msg: err });
	}
};

const deleteTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOneAndDelete({ _id: taskId });
		if (!task) {
			return res
				.status(404)
				.json({ msg: `No task with the id: ${taskId} found.` });
		}
		res.status(200).json({ task: null, status: "Success" });
	} catch (err) {
		res.status(500).json({ msg: err });
	}
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	editTask,
	deleteTask,
};
