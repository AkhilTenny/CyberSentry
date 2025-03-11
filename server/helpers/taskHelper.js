const mongoose = require("mongoose")
const { moduleModal } = require("../config/module")

const m2t1 = "G3%ZaP1X8tLFqUKJsd9RuY*D4EMwxT1k";
const m2t2 = "L1XsdK4FDeZEG9Uzqu%PRJ8PA9T1XwK";
const m2t3 = "T1K9Uzqu%GxFDeZEG4YJPRJL8P1XsdA";
const m2t4 = "XsdL8P1T4K9Uzqu%FDeZEGJPRJA9XwK";

const m3t1 = "45.33.32.156";
const m3t2 = ['http','nping-echo','Elite'];
const m3t3 = "-sV";
const m3t4 = "-O";

const m4t1 = "monitor";
const m4t2 = "starwars";
const m4t3 = ["superuser","superman"];
const m4t4 = "iloveyou";





const createNewModule=(userId,moduleNo)=>{

  const moduleDocument = new moduleModal({
    moduleNo:moduleNo,
    userId:userId,
  } )
}

const addTaskDone = async(userId,moduleNo,taskIndex,score)=>{
  console.log('addTask',userId,moduleNo,taskIndex,score)
  const task = "task";
  const taskName = task.concat(taskIndex)
  let currentScore = await moduleModal.aggregate([{
    $match: {
      userId:userId,
      moduleNo:moduleNo
    }
  },{
    $project: {
      _id:0,
      "score":1
    }
  }])
  console.log(userId,moduleNo,taskIndex,score)

  currentScore = currentScore.length > 0 ? currentScore[0].score : null;

  const newScore = currentScore + score;



  try{
    await moduleModal.findOneAndUpdate(
      {moduleNo:moduleNo,userId:userId},
      {$set: {  [taskName]:true,score:newScore }
      },
      {upsert:true}
    );
    return true;
  }catch{
    return false;
  }
    
 
}

const module2CheckKey=(taskIndex,key)=>{
  console.log(taskIndex,key)
  switch(taskIndex){
    case 1:
      if(key==m2t1){
        return true;
      }else{
        return false
      }
      break;
    case 2:
      if(key==m2t2){
        return true;
      }else{
        return false
      }
      break;
    case 3:
      if(key==m2t3){
        return true;
      }else{
        return false
      }
      break;
    case 4:
      if(key==m2t4){
        return true;
      }else{
        return false
      }
      break;
      default:
        return false;
  }

}

const   module4CheckKey=(taskIndex,input)=>{
  switch(taskIndex){
    case 1:
      if(input == m4t1){
        return true;
      }else{
        return false
      }
      break;
    case 2:
      if(input == m4t2 ){
        return true;
      }else{
        return false
      }
      break;
    case 3:
      if(input.username == m4t3[0] && input.password == m4t3[1]){
        return true;
      }else{
        return false
      }
      break;
    case 4:
      if(input == m4t4){

        return true;
      }else{
        return false
      }
      break;
      default:
        return false;
  }

}


const module3CheckKey=(taskIndex,input)=>{
  switch(taskIndex){
    case 1:
      if(input.includes(m3t1)){
        return true;
      }else{
        return false
      }
      break;
    case 2:
      if(input.includes(m3t2[0]) || input.includes(m3t2[1]) || input.includes(m3t2[2])){
        console.log("kitti")
        return true;
      }else{
        return false
      }
      break;
    case 3:
      if(input.includes(m3t3)){
        return true;
      }else{
        return false
      }
      break;
    case 4:
      if(input.includes(m3t4)){
        return true;
      }else{
        return false
      }
      break;
      default:
        return false;
  }

}

const getTaskInfo=async(userId,moduleNo)=>{
 
    const taskInfo = moduleModal.findOne({
      userId:userId,
      moduleNo:moduleNo
    })
    return taskInfo;
  
 

}
const getAllModuleInfo=async(userId)=>{

  const allModuleInfo = await moduleModal.aggregate([{
    $match: {
      userId:userId
    }
  }])
  return allModuleInfo
}

const getOneTaskInfo=async(userId,moduleNo)=>{
  const moduleInfo = await moduleModal.aggregate([{
    $match: {
      userId:userId,
      moduleNo,moduleNo
    }
  }])

  return moduleInfo
}


const findTotalSentryScore=async(userId)=>{
  const sentryScore = await moduleModal.aggregate([
    {
      $match: {
        userId: userId,
      },
    },
    {
      $group: {
        _id: userId,
        sentryScore: {
          $sum: "$score",
        },
      },
    },
  ])
  if(sentryScore.length != 0 ){
    return sentryScore[0].sentryScore;
  }else{
    return 0 ;
  }
}


module.exports={
  createNewModule,
  addTaskDone,
  module2CheckKey,
  getTaskInfo,
  module3CheckKey,
  module4CheckKey,
  getAllModuleInfo,
  getOneTaskInfo,
  findTotalSentryScore

}