import mongoose, { Schema } from "mongoose";
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
export default mongoose.models.User || mongoose.model('User',userSchema)