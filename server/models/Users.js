const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
     googleId: {
          type: String,
          unique: true,
          sparse: true, // Allows null or duplicate values (useful for users who sign up with both Google and email/password)
      },
      email: {
          type: String,
          unique: true,
          sparse: true,
          lowercase: true,
          required:[true,'please add a email']
      },
      password: {
          type: String,
          required: function() {
              // Password is required only for email/password authentication
              return this.googleId ? false : true;
          },
      },
      displayName: String,
      image:String,
      name:String,
      
},{
    timestamps:true
}
)

const UserModel = mongoose.model("users",UserSchema);
module.exports=UserModel;