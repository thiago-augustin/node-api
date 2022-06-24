import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    cpf: {type: Number, required: true},
    birthDate: {type: Date, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    number: {type: Number, required: true},
    complement: {type: String, required: true},
    city: {type: String, required: true},
    status: {type: String, required: true},
    country: {type: String, required: true}
  },
  {
    versionKey: false
  }
)

const users = mongoose.model("users", userSchema)

export default users;