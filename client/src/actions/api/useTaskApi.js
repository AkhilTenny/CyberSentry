import axios from "axios"
import { useToken } from '../../context/TokenContext'

export const useTaskApi=()=>{

  const {userToken} = useToken();
   
  const headers = {
    "Content-Type": "application/json",
    'authorization': userToken,
  }

  const completeModule1Task=(taskIndex,score)=>{
    return new Promise((resolve, reject) => {
      axios.post("task/completeModule1",{taskIndex:taskIndex,moduleNo:1,score:score},{headers}).then(res=>{
        resolve(res.data);
      }).catch(err=>{
        resolve(false);
      })
    })
    
    
  }

  const checkModule2Task=(inputValue,taskIndex,score)=>{
    return new Promise((resolve, reject) => {
      axios.post('task/checkModule2',{key:inputValue,taskIndex:taskIndex,moduleNo:2,score:score},{headers}).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        resolve(false)
      })
    })
    
  }


  const checkModule3Task=(inputValue,taskIndex,score)=>{
    return new Promise((resolve, reject) => {
      console.log(inputValue,taskIndex)
      axios.post('task/checkModule3',{input:inputValue,taskIndex:taskIndex,moduleNo:3,score:score},{headers}).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        resolve(false)
      })
    })
    
  }
  
  const checkModule4Task=(inputValue,taskIndex,score)=>{
    return new Promise((resolve, reject) => {
      console.log("score",inputValue,score)
      axios.post('task/checkModule4',{input:inputValue,taskIndex:taskIndex,moduleNo:4,score:score},{headers}).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        resolve(false)
      })
    })
    
  }


  const getTaskInfo=(moduleNo)=>{
    return new Promise((resolve, reject) => {
      axios.get(`task/getTaskInfo/${moduleNo}`,{headers}).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        resolve(err)
      })
    })
    
  }
  const getOneModuleInfo=(moduleNo)=>{
    return new Promise((resolve, reject) => {
      axios.post('task/getOneModuleInfo',{moduleNo:moduleNo},{headers}).then(res=>{
        resolve(res.data.moduleInfo[0])
      }).catch(err=>{
        console.log(err)
        reject(err)
      })
    })
  }
  const getSentryScore=()=>{
    return new Promise((resolve, reject) => {
      axios.get('task/getSentryscore',{headers}).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
    
  }



  return{
    checkModule2Task,
    getTaskInfo,
    checkModule3Task,
    checkModule4Task,
    getSentryScore,
    getOneModuleInfo,
    completeModule1Task


  }



}





  
