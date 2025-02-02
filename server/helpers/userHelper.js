const userConfig = require("../config/user")
const bcrypt =require('bcrypt')
const crypto = require('crypto')
const size = 10
const saltRounds = 10;
const jwt = require('jsonwebtoken')

const userModal = userConfig.userModal

const createUser=(details)=>{
  let hashedPassword
  return new Promise(async(resolve, reject) => {
    const randomBytes = crypto.randomBytes(size);
    const cryptoId = randomBytes.toString('hex');
    try{
      hashedPassword = await bcrypt.hash(details.password,saltRounds)
    }catch(err){
      reject(err)
    }

    const newUser = new userModal({
      username:details.username,
      email:details.email,
      password:hashedPassword,
      userId:cryptoId,
      avatar:1
    })
    await newUser.save()
    resolve({username:newUser.username,email:newUser.email})

    
  })
  
}

const aunthenticateUser=(details)=>{

  return new Promise(async(resolve, reject) => {

    let foundUser;
    let passwordCheck
    try{
      foundUser = await userModal.aggregate([{
        $match: {
          username:details.username
        }
      }])

      if(foundUser.length === 0){
        reject("User Not Found")
      }

      passwordCheck = await bcrypt.compare(details.password,foundUser[0].password)
   
      if(!passwordCheck){
          reject("Invalid Password")
      }

      if(foundUser.length != 0 && passwordCheck){
        resolve({userName:foundUser[0].username,email:foundUser[0].email,userId:foundUser[0].userId})
      }
      
      
    }catch(err){
      reject("Some kind of error from our part ")
    }
   

  
  })
  
 
}

const creatUserToken=(details)=>{
  return new Promise((resolve, reject) => {
    jwt.sign(details,process.env.JWT_TOKEN,(err,token)=>{
      if(err){
        reject(err);
      }
        resolve(token)
    })
  })
}
 
function getUserInfo(userId){
  return new Promise((resolve, reject) => {
    userModal.findOne({userId:userId}).then(res=>{
      res.password = null;
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
  })
}
function checkDuplicateUsername(username){
  return new Promise(async(resolve, reject) => {
    try{
      userFound = await userModal.findOne({username:username})
      resolve(userFound ? false:true)      
    }catch(err){
      reject(err)

    }})
  
}
async function editUsername(userId,username){
  try{
    editedUser = await userModal.findOneAndUpdate(
      { userId: userId },
      { username: username },
      { new: true, runValidators: true } // Important options!
    );
    return editedUser;

  }catch(err){

    return(err)
  }
  
}

function changeUserAvatar(userId,avatar){
  return new Promise((resolve, reject) => {
    const editedUser = userModal.findOneAndUpdate({userId:userId},{avatar:avatar}).then(res=>{
      resolve(editedUser)
    }).catch(err=>{
      reject(err)
    })
  })
  
}
 


module.exports={
  createUser,
  aunthenticateUser,
  creatUserToken,
  getUserInfo,
  checkDuplicateUsername,
  editUsername,
  changeUserAvatar
}