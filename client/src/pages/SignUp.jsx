import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../actions/api/useApi';


function SignUp() {

  const navigate = useNavigate()

  const {userSignUp} = useApi();

  const [pass,setPass] = useState(false);
  const [password,setPassword] = useState(false)
  const[finalPass,setFinalPass] = useState(false)
  const [details,setDetails] = useState({
    email:null,
    username:null,
    password:null,
    confirmPassword:null
  })


  function inputChanged(item,value){
    setDetails((previousValue)=>{
      return({
        ...previousValue,
        [item]:value
      })
    })
  }

  function signUpComplete(data){
    alert("signUp Complete!. now try to login")
    navigate('/signIn')
  }

  function signUpAction(){
    userSignUp(details).then(res=>{
      signUpComplete(res);
    }).catch(err=>{
      alert("something went Wrong")
    })
  }

  useEffect(()=>{
    setPass(Object.values(details).some(item => item == null || item == '' || item == " " || item == undefined))

    if(details.password == details.confirmPassword && details.confirmPassword != ""  && details.confirmPassword != null&& details.confirmPassword != undefined ) {
      setPassword(true)
    }else{
      setPassword(false)
    }
    setFinalPass(!pass && password)
    
  },[details,pass,finalPass,password])

  return (
    <div className='flex w-screen h-screen bg-white justify-center items-center'>
      <div iv className='w-1/2 bg-gray-100  rounded-3xl px-3 py-16 shadow-lg'>
        {/* logo */}
        <div className='flex w-full justify-center items-center'>
          <img className='small-logo mr-3' src="/logo.png" alt="" />
           <h1 className='text-2xl company-font'>CyberSentry</h1>
        </div>

        {/* signUp text */}

        <div className='flex w-full justify-center '>
          <h1 className='roboto text-lg underline underline-offset-4 mt-2'>Sign Up</h1>  
        </div>

        {/* inputs */}

          <div className='w-full flex justify-center'>
            <div className='w-3/4 '>
              <h1 className='roboto mt-4  text-lg underline underline-offset-4'>Email id:</h1>
              <input type="email" 
              className='w-3/4 mt-4 bg-gray-100 p-2 border-b-2 focus:outline-none focus:border-b-3' 
              name='email'
              onChange={(e)=>{
                inputChanged(e.target.name,e.target.value)
              }}
              />    


              <h1 className='roboto mt-4  text-lg underline underline-offset-4'>Username:</h1>
              <input type="text" 
              className='w-3/4 mt-4 bg-gray-100 p-2 border-b-2 focus:outline-none focus:border-b-3' 
              name='username'
              onChange={(e)=>{
                inputChanged(e.target.name,e.target.value)
              }}
              />  


              <h1 className='roboto mt-4 text-lg underline underline-offset-4'>Password:</h1>
              <input type="password" 
              className='w-3/4 mt-4 bg-gray-100 p-2 border-b-2 focus:outline-none focus:border-b-3' 
              name='password'
              onChange={(e)=>{
                inputChanged(e.target.name,e.target.value)
              }}
              />
               <h1 className='roboto mt-4 text-lg underline underline-offset-4'>Confirm Password:</h1>
              <input type="password" 
              className='w-3/4 mt-4 bg-gray-100 p-2 border-b-2 focus:outline-none focus:border-b-3' 
              name='confirmPassword'
              onChange={(e)=>{
                inputChanged(e.target.name,e.target.value)
              }}
              />
        {/* submit buttom */}
              <div className='w-full flex justify-between mt-4'>
              <h1
                onClick={()=>{
                  navigate('/signIn')
                }}
               className='cursor-pointer m-0 text-blue-600 underline'>already have an account?</h1>

                {
                  finalPass ?
                  <button className='rounded-full bg-sky-500 text-white hover:bg-sky-400 px-4 py-2'
                    onClick={signUpAction}
                  > 
                    Login
                  </button>:
                  <button className='cursor-not-allowed rounded-full bg-gray-400 text-white hover:bg-gray-500 px-4 py-2'> 
                   Login
                   </button>
                
                }
              </div>
            </div>
            
            
          </div>

      </div>
      
    </div>
  )
}

export default SignUp;
