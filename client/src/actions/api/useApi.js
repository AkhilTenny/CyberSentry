import axios from "axios"
import { useToken } from "../../context/TokenContext";


axios.defaults.baseURL = 'http://localhost:4000'; 



export const  useApi=()=>{

  const {userToken} = useToken();

  const headers = {
    "Content-Type": "application/json",
    'authorization': userToken,
  }

  function userSignUp(details){
    return new Promise((resolve, reject) => {
      axios.post("users/signUp",{details}).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)

      })
    })
   } 


   function userSignIn(details){
    return new Promise((resolve, reject) => {
      axios.post("users/signIn",{details}).then(res=>{
       
        resolve(res.data)
       }).catch(err=>{
        reject(err.response.data)
       })
    })
    
   }

   function getUserInfo(){
    return new Promise((resolve, reject) => {
      axios.get("/users/getUserInfo",{headers}).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
   }
   function checkDuplicateUsername(username){
    return new Promise(async(resolve, reject) => {
      axios.post('/users/checkDuplicateUsername',{username:username},{headers}).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
    
   }
   function editUsername(username){
    return new Promise((resolve, reject) => {
      axios.post("users/editUsername",{username:username},{headers}).then(res=>{
        console.log(res.data)
      }).catch(err=>{
        console.log(err)
      })
    })
    
   }
   
   function changeUserAvatar(avatar){
    return new Promise((resolve, reject) => {
      axios.post("/users/changeUserAvatar",{avatar:avatar},{headers}).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
    
   }
  
  return {
    userSignUp,
    userSignIn,
    getUserInfo,
    checkDuplicateUsername,
    editUsername,
    changeUserAvatar
  } 
  
 
  
  }