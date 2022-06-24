import mongoose from "mongoose"

mongoose.connect("mongodb+srv://root:123@node.uxznkns.mongodb.net/node");

let db = mongoose.connection;

export default db;