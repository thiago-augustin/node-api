import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    "id": {type: String},
    "description": {type: Date}, required: true,
    "user": {type: String}, required: true
  },
  {
    versionKey: false
  }
)

const tasks = mongoose.model("tasks", TaskSchema)

export default tasks;