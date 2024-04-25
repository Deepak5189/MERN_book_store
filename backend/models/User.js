const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const userSchema=Schema({
  username:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  gmail:{
    type:String,
    required:true,
    unique:true,
  }
})

const User = mongoose.models.User || mongoose.model('User',userSchema)
module.exports=User