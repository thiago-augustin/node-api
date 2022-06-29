import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    id: {type: String},
    description: {type: String, required: true},
    date: {type: String, require: true}, 
    user: {type: String, required: true}, 
  },
  {
    versionKey: false
  }
)

TaskSchema.methods.isValid = function(){
  return validateDate(this.date);
}

function validateDate(date) {
    return /([0-9]{2}[\/]?[0-9]{2}[\/]?[0-9]{4}[ X][0-9]{2}[\:]?[0-9]{2})/.test(date); 
}

const tasks = mongoose.model("tasks", TaskSchema)

export default tasks;