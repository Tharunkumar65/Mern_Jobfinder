const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const UserModel = require('../models/Users')
const { ObjectId } = require('mongoose').Types;

// @ desc  register new user
// @route  post /api/users
// @access public
const registerUser = asyncHandler(async(req,res)=>{
 
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if user exists
  const userExists = await UserModel.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await UserModel.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
  //   const{name,email,password}= req.body;
  // try{
  //   if(!name || !email || !password){
  //       res.status(400)
  //       throw new Error('please add all fields')
  //   }
  //   const userExist= await UserModel.findOne({email:email});
  //   if(userExist){
  //     return res.status(422).json({error:"Email already Exist"});
  //   }
  //   bcrypt.hash(password,10)
  // .then(hash=>{
  //   UserModel.create({name:name,email:email,password:hash})
  //   .then(user=>
  //       {      
  //           const id = new ObjectId(user._id)
  //           res.status(201).json({message:"Registered Successfully",user ,token:generateToken(id)})
  //       })
  //   .catch(err=>console.log(err))
  // }).catch(err=>console.log(err.message));   
  // }
  // catch(err){
  //     console.log(err);
  // }
     
    
})
// @ desc  Authenicate a user
// @route  post /api/users/login
// @access public
const loginUser = asyncHandler(async(req,res)=>{
    const {email,password}= req.body;
    try {
      // Find the user with the provided email
      const user = await UserModel.findOne({ email });
    //   console.log(user);

      if (user) {
          // Compare the provided password with the hashed password stored in the database
          bcrypt.compare(password, user.password, (err, result) => {
              if (err) {
                 return  res.status(500).json({ message: 'Internal Server Error' });
              } else if (result) {
                  const id = new ObjectId(user._id)
                res.status(200).json({ message: 'Login successful', user,status:true ,token:generateToken(id)});
              } else {
                  res.status(401).json({ message: 'Incorrect password',status:false});
              }
          });
      } else {
          res.status(404).json({ message: 'User not found' });
      }
  } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
  }
})
// @ desc  get user data
// @route  get /api/users/me
// @access  private
const getMe= asyncHandler(async(req,res)=>{
    // console.log(req.user.id)
       res.status(200).json(
        req.user
        )
})

// generate jwt token 
const generateToken =(id)=>{
    // console.log(id);
      return jwt.sign({ _id: id},process.env.JWT_SECRET,{expiresIn:'1d'})
}

module.exports ={
    registerUser,
    loginUser,
    getMe
}