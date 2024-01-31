const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const UserModel = require('../models/Users')

const protect = asyncHandler(async(req,res,next)=>{
      let token

      if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') ) {
        try {
            // get token from header
            token = req.headers.authorization.split(' ')[1];

            // verify token 
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            // console.log(decoded);
            // get user from the token 
            req.user = await UserModel.findById(decoded._id).select('-password')
            // console.log(req.user)
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not Authorised')
        }
      }
})


module.exports = {protect}