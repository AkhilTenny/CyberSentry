import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../actions/api/useApi';
import {motion} from "framer-motion"
import { useToken } from '../context/TokenContext';


function SignIn() {

  const {tokenSignIn} = useToken();

  const navigate = useNavigate();
  const [pass,setPass] = useState(false);
  const [loginError,setLoginError] = useState()
  const [details,setDetails] = useState({
    username:null,
    password:null
  })
  const {userSignIn} = useApi();

  function inputChanged(item,value){
    setDetails((previousValue)=>{
      return({
        ...previousValue,
        [item]:value
      })
    })

  }
  function signInAction(){
    userSignIn(details).then(res=>{
      console.log(res)
      loginReturnSuccess(res)
    }).catch(err=>{
      loginReturnError(err)
    })
  }
  function loginReturnSuccess(token){
    setLoginError(false)
    tokenSignIn(token)
    navigate('/')

  }


  function loginReturnError(error){
    setLoginError(error)
  }

  useEffect(()=>{
    setPass(Object.values(details).some(item => item === null || item === '' || item === " " || item === undefined))
  },[details])

  return (
    <div className='flex w-screen h-screen bg-white justify-center items-center'>
      <motion.div
        layout
        className='w-1/2 bg-gray-100  rounded-3xl px-3 py-16 shadow-lg'>
        {/* logo */}
        <div className='flex w-full justify-center items-center'>
          <img className='small-logo mr-3' src="/logo.png" alt="" />
           <h1 className='text-2xl company-font'>CyberSentry</h1>
        </div>

        {/* login text */}

        <div className='flex w-full justify-center '>
          <h1 className='roboto text-lg underline underline-offset-4'>Login</h1>  
        </div>

        {/* error div */}
        { loginError&&
          <div className='w-full flex justify-center'>
          <h1 className='bg-yellow-300 text-red-500 px-4 py-2 mt-4 rounded-lg shadow-md' >{loginError} !</h1>
          </div>
        }

       

        {/* inputs */}

          <div className='w-full flex justify-center'>
            <div className='w-3/4 '>
              <h1 className='roboto mt-4  text-lg underline underline-offset-4'>Username:</h1>
              <input type="text" 
              className='w-3/4 mt-4 bg-gray-100 p-2 border-b-2 focus:outline-none focus:border-b-3' 
              name='username'
              onChange={(e)=>{
                inputChanged(e.target.name,e.target.value)
              }}
              />              <h1 className='roboto mt-4 text-lg underline underline-offset-4'>Password:</h1>
              <input type="text" 
              className='w-3/4 mt-4 bg-gray-100 p-2 border-b-2 focus:outline-none focus:border-b-3' 
              name='password'
              onChange={(e)=>{
                inputChanged(e.target.name,e.target.value)
              }}
              />
        {/* submit buttom */}
              <div className='w-full flex justify-between mt-4'>
               <h1
                onClick={()=>{
                  navigate('/signUp')
                }}
               className='cursor-pointer m-0 text-blue-600 underline'>don't have a account?</h1>


                {
                  pass ?
                  <button className='cursor-not-allowed rounded-full bg-gray-400 text-white hover:bg-gray-600 px-4 py-2'> 
                  Login
                </button>
                :
                <button 
                  onClick={signInAction}
                className='rounded-full shadow-md bg-sky-500 text-white hover:bg-sky-400 px-4 py-2'> 
                Login
              </button>
                }
              </div>
            </div>
            
            
          </div>

      </motion.div>
      
    </div>
  )
}

export default SignIn
