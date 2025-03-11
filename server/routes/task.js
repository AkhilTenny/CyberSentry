var express = require("express");
var router = express.Router();
var taskHelper = require("../helpers/taskHelper")
const jwt = require('jsonwebtoken')


async function checkUserToken(req,res,next){
  
  const userToken = req.headers.authorization;
  try{
    const decodedToken = await jwt.verify(userToken,process.env.JWT_TOKEN)
    req.decodedToken = decodedToken;
    next();
  }catch(err){
    res.status(401).json({message:"Don't mess with the token"})
  }
 
}




router.get("/getTaskInfo/:moduleNo",checkUserToken,async(req,res)=>{
  const moduleNo = req.params.moduleNo;
  const userId = req.decodedToken.userId
  const taskInfo = await taskHelper.getTaskInfo(userId,moduleNo);
  if(taskInfo){
    res.status(200).json(taskInfo)
  }else{
    res.status(400).json({message:"failed fetching task data from db"})
  }
  
})

router.post("/completeModule1",checkUserToken,(req,res)=>{
  const userId = req.decodedToken.userId;
  const moduleNo = req.body.moduleNo;
  const score = req.body.score;
  const taskIndex = req.body.taskIndex;

  taskHelper.addTaskDone(userId,moduleNo,taskIndex,score);
  res.status(200).json({message:"Okay done. Added to DB "})

})

router.post("/checkModule2",checkUserToken,(req,res)=>{
  const userId = req.decodedToken.userId
  const key = req.body.key
  const moduleNo = req.body.moduleNo;
  const score = req.body.score;
  const taskIndex = req.body.taskIndex;
  if(taskHelper.module2CheckKey(taskIndex,key)){
    taskHelper.addTaskDone(userId,moduleNo,taskIndex,score);
    setTimeout(()=>{    res.status(200).json({message:"Correct Key",result:true})},800)

  }else{
    setTimeout(()=>{    res.status(200).json({message:"Wrong Key",result:false})},800)
  }
})

router.post("/checkModule3",checkUserToken,(req,res)=>{

  const userId = req.decodedToken.userId
  const input = req.body.input
  const moduleNo = req.body.moduleNo;
  const score = req.body.score;
  const taskIndex = req.body.taskIndex; 

  if(taskHelper.module3CheckKey(taskIndex,input)){
    taskHelper.addTaskDone(userId,moduleNo,taskIndex,score);
    setTimeout(()=>{    res.status(200).json({message:"Correct Input",result:true})},800)
  }else{
    setTimeout(()=>{    res.status(200).json({message:"Wrong Input",result:false})},800)

  }

  
})

router.post("/checkModule4",checkUserToken,(req,res)=>{

  const userId = req.decodedToken.userId
  const input = req.body.input
  const moduleNo = req.body.moduleNo;
  const score = req.body.score;
  const taskIndex = req.body.taskIndex; 

  if(taskHelper.module4CheckKey(taskIndex,input)){
    taskHelper.addTaskDone(userId,moduleNo,taskIndex,score);
    setTimeout(()=>{    res.status(200).json({message:"Correct Input",result:true})},800)
  }else{
    setTimeout(()=>{    res.status(200).json({message:"Wrong Input",result:false})},800)

  }
})




router.post("/getOneModuleInfo",checkUserToken,async(req,res)=>{
  const userId = req.decodedToken.userId;
  const moduleNo = req.body.moduleNo

  const moduleInfo = await taskHelper.getOneTaskInfo(userId,moduleNo)
  res.status(200).json({moduleInfo})

})

router.get("/getSentryscore",checkUserToken,async(req,res)=>{
  const userId = req.decodedToken.userId;
  
  const sentryScore =  await taskHelper.findTotalSentryScore(userId)

  res.status(200).json({sentryScore:sentryScore})
})


module.exports = router