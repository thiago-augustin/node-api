import tasks from "../models/Task.js";

class TaskController {

  static listTasks = (req, res) => {
    tasks.find((err, tasks) => {
      if(err) {
        res.status(500).send({message: `${err.message} - Failed to get Tasks.`})
      } else {
        res.status(200).json(tasks)
      }
  })
  }

  static listTaskId = (req, res) => {
    const id = req.params.id;

    tasks.findById(id, (err, tasks) => {
      if(err) {
        res.status(404).send({message: `${err.message} - Task not found.`})
      } else {
        res.status(200).send(tasks);
      }
    })
  }

  static createTask = (req, res) => {
    let Task = new tasks(req.body);
    if (Task){
      if(Task.isValid()){
        Task.save((err) => {
          if(err) {
            res.status(500).send({message: `${err.message} - Failed to register Task.`})
          } else {
            res.status(201).send(Task.toJSON())
          }
        })
      }else{
        res.status(400).send({message: `Failed to register task. Check the information and try again!`})
      }
    }
  }

  static updateTask = (req, res) => {
    const id = req.params.id;
    let Task = new tasks(req.body);

    if (Task){
      if(Task.isValid()){
        tasks.findByIdAndUpdate(id, {$set: req.body}, (err) => {
          if(!err) {
            res.status(200).send({message: 'Task updated successfully'})
          } else {
            res.status(404).send({message: 'Task not found'})
          }
        })
      }else{
        res.status(400).send({message: `Failed to register task. Check the information and try again!`})
      }
    }
  }

  static deleteTask = (req, res) => {
    const id = req.params.id;

    tasks.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(204).send({message: 'Task deleted successfully'})
      } else {
        res.status(404).send({message: 'Task not found'})
      }
    })
  }

}

export default TaskController