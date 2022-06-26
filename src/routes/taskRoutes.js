import express from "express";
import TaskController from "../controllers/taskController.js";

const router = express.Router();

router
  .get("/api/v1/tasks", TaskController.listTasks)
  .get("/api/v1/tasks/:id", TaskController.listTaskId)
  .post("/api/v1/tasks", TaskController.createTask)
  .put("/api/v1/tasks/:id", TaskController.updateTask)
  .delete("/api/v1/tasks/:id", TaskController.deleteTask)

  
export default router;   