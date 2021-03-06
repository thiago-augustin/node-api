import users from "../models/User.js";

class UserController {

  static listUsers = (req, res) => {
    users.find((err, users) => {
      if(err) {
        res.status(500).send({message: `${err.message} - Failed to get Users.`})
      } else {
        res.status(200).json(users)
      }
  })
  }

  static listUserId = (req, res) => {
    const id = req.params.id;

    users.findById(id, (err, users) => {
      console.log(res.status)
      if(err) {
          res.status(404).send({message: `${err.message} - User not found.`})
      } else {
        res.status(200).send(users);
      }
    })
  }

  static createUser = (req, res) => {
    let user = new users(req.body);
    if (user){
      if(user.isValid()){
          user.save((err) => {
            if(err) {
              res.status(400).send({message: `${err.message} - Failed to register user.`})
            } else {
              res.status(201).send(user.toJSON())
            }
          })
      }else{
          res.status(400).send({message: `Failed to register user. Check the information and try again!`})
      }
    }

  }

  static updateUser = (req, res) => {
    const id = req.params.id;
    let user = new users(req.body);
    
    if (user){
      if(user.isValid()){
          users.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
              res.status(200).send({message: 'User updated successfully'})
            } else {
              res.status(404).send({message: `${err.message} 'User not found'`})
            }
          })
        }else{
          res.status(400).send({message: `Failed to update user. Check the information and try again!`})
      }
    }
  }

  static deleteUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(204).send({message: 'User deleted successfully'})
      } else {
        res.status(404).send({message: 'User not found'})
      }
    })
  }

}

export default UserController