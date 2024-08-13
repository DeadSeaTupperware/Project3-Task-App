const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["habit", "dailyQuest", "todo", "reward"],
    default: "todo",
    required: true,
  },
  description: {
    type: String,
  },
  priority: {
    type: String,
  },
  difficulty: {
    type: String,
    enum: ["D", "C", "B", "A", "S"],
  },
});

const Task = model("Task", taskSchema);

module.exports = Task;
