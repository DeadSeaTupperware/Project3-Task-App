const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  key: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["habit", "dailyQuest", "todo", "reward"],
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
});

const Task = model("Task", taskSchema);

module.exports = Task;
