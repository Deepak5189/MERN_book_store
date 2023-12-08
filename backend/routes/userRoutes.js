import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router()

router.post('/', async (request, response)=>{
  const{username, password, gmail}=request.body;
  try {
    if(!username || !password || !gmail) return response.status(400).send({message: "please fill all the required fields"})

    const hashedPassword= await bcrypt.hash(password, 10);

    const newUser=User({username, password: hashedPassword, gmail});
    await newUser.save()
    return response.status(201).send({message: "user has been created"});
    
  } catch (err) {
    return response.status(500).json({message: `Internal server error: ${err}`})
  }
})

router.get('/', async (request, response)=>{
  try {
    const{gmail, password}=request.body;
    if(!gmail || !password){
      return response.status(500).send({message:"please fill all the fields!"});
    }
    const user= await User.findOne({gmail});
    const authenticated=bcrypt.compareSync(password, user.password)
    if(authenticated){
      return response.status(200).send(user)
    }
    else{
      return response.status(500).send({message:"please use correct credentials!"});
    }
    
  } catch (err) {
    return response.status(500).json({message: `internal server error :${err}`});
  }
})

// router.get

export default router