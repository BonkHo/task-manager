const mongoose = require("mongoose");

// Schema: Sets up the structure of database documents
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provided."],
    trim: true,
    maxlength: [20, "Name can not be more that 20 characters."],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
