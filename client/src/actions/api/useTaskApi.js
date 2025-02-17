import axios from "axios"
import { useToken } from '../../context/TokenContext'

export const useTaskApi=()=>{

  const {userToken} = useToken();
   
  const headers = {
    "Content-Type": "application/json",
    'authorization': userToken,
  }


  const checkModule1Task=(inputValue,taskIndex)=>{
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

  return{
    checkModule1Task,
    getTaskInfo

  }



}





  
