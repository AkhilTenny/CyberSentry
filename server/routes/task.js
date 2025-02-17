var express = require("express");
var router = express.Router();
var taskHelper = require("../helpers/taskHelper")
const jwt = require('jsonwebtoken')


async function checkUserToken(req,res,next){
  
  const userToken = req.headers['authorization'];
  console.log("dds",userToken)
  try{
    const decodedToken = jwt.verify(userToken,process.env.JWT_TOKEN)
    req.decodedToken = decodedToken;
    next();
  }catch(err){
    res.status(400).json({message:"Don't mess with the token"})
  }
 
}


router.post("/checkModule1",checkUserToken,(req,res)=>{
  const userId = req.decodedToken.userId
  const key = req.body.key
  const moduleNo = req.body.moduleNo;
  const taskIndex = req.body.taskIndex;
  if(taskHelper.module1CheckKey(taskIndex,key)){
    taskHelper.addTaskDone(userId,moduleNo,taskIndex);
    setTimeout(()=>{    res.status(200).json({message:"Correct Key",result:true})},800)

  }else{
    setTimeout(()=>{    res.status(200).json({message:"Wrong Key",result:false})},800)
  }
})

router.get("/getTaskInfo/:moduleNo",checkUserToken,async(req,res)=>{
  const moduleNo = req.params.moduleNo;
  const userId = req.decodedToken.userId
  const taskInfo = await taskHelper.getTaskInfo(userId,moduleNo);
  console.log(taskInfo)
  if(taskInfo){
    res.status(200).json(taskInfo)
  }else{
    res.status(400).json({message:"failed fetching task data from db"})
  }
  
})


module.exports = router