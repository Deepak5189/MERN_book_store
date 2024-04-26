const bcrypt = require('bcryptjs/dist/bcrypt');
const User=require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const signToken = (userId) => jwt.sign({userId, signInTime:Date.now()}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRE || '15d'})

////create request///////////
exports.createUser=async (req, res)=>{
  const {username, gmail, password}=req.body;
  try{
    if(!username || !gmail || !password){
      return(res.status(400).send({message:'Please fill all the required fields!'}))
    }
    
    // check if email already exists/////////////////////////////////////
    const user=await User.findOne({gmail})
    if(gmail===user.gmail){
      return res.status(400).send({message:'user already exist! please login instead.'})
    }
    ///////////////////////////////////////////////////////////
    const hashedPassword= await bcrypt.hash(password,10);
    const newUser=new User({
      username,
      gmail,
      password:hashedPassword
    })
  await newUser.save()
  return res.status(201).send({message:"User created successfully!"});
  }catch(err){
    return res.status(500).send({message:err.message});
  }
};

///////get request////////////////////
exports.getUser=async (req, res)=>{
  const{gmail, password}=req.body;
  // const jwt_secret=process.env.JWT_SECRET;
  // const jwt_expire=process.env.JWT_expire;
  if(!gmail || !password){
    return res.status(400).send({message:'Please fill all the required fields!'})
  }
  try{
    const user=await User.findOne({gmail})
    if(!user){
      return res.status(400).send({message:'User not found!'})
    }
    const authenticated=bcrypt.compareSync(password, user.password);
    if(!authenticated){
      res.status(400).send({message:'Wrong Credentails! Please check once again.'});
    }
     // **Error Handling for Missing Secret Key:**
    //  if (!jwt_secret) {
    //   return res.status(500).send({ message: 'JWT secret key (JWT_SECRET) is not defined!' });
    // }
    const token= signToken(user._id);
    const data={user, token};
    return res.status(200).send({message:'logged in successfully!',data});
  }catch(err){
    return res.status(500).send({message:err.message});
  }
}

//////////////update user request//////////////////////////
exports.updateUser=async (req, res)=>{
  //
}
exports.deleteUser=async (req, res)=>{
  //
}