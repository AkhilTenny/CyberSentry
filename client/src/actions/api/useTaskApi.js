import axios from "axios"
import { useToken } from '../../context/TokenContext'

export const useTaskApi=()=>{

  const {userToken} = useToken();
   
  const headers = {
    "Content-Type": "application/json",
    'authorization': userToken,
  }


  const checkModule2Task=(inputValue,taskIndex)=>{
    return new Promise((resolve, reject) => {
      axios.post('task/checkModule1',{key:inputValue,taskIndex:taskIndex,moduleNo:2},{headers}).then(res=>{
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

  const checkModule3Task=(inputValue,taskIndex)=>{
    return new Promise((resolve, reject) => {
      console.log(inputValue,taskIndex)
      axios.post('task/checkModule3',{input:inputValue,taskIndex:taskIndex,moduleNo:3},{headers}).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        resolve(false)
      })
    })
    
  }

  return{
    checkModule2Task,
    getTaskInfo,
    checkModule3Task,


  }



}





  
