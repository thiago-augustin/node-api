import users from "../models/User.js";

class UserController {

  static listUsers = (req, res) => {
    users.find((err, users) => {
      res.status(200).json(users)
  })
  }
}

export default UserController