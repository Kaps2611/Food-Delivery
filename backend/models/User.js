// Formation of schema 

const mongoose = require("mongoose")
//destructuring in js
const { schema } = mongoose; 

const  UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required :true,
  },
  location:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model('user',UserSchema)
