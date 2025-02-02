const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  username:String,
  email:String,
  password:String,
  userId:String,
  avatar:Number
  
})


const userModal = mongoose.model("User",userSchema);


module.exports={
  userModal
}