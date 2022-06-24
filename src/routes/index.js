import express from "express";
import users from "./userRoutes.js"
//import tasks from "./tasksRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "API com NodeJS"})
  })

  app.use(
    express.json(),
    users,
    //tasks
  )
}

export default routes