const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
      email: {
          type: String,
          unique: true,
          sparse: true,
          lowercase: true,
          required:[true,'please add a email']
      },
      password: {
          type: String,
          required: true,
      },
      name:String,
      
},{
    timestamps:true
}
)

const UserModel = mongoose.model("users",UserSchema);
module.exports=UserModel;