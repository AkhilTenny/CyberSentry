import React, { useEffect, useState } from 'react'
import { useApi } from '../actions/api/useApi'
import { useToken } from '../context/TokenContext';
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';

 



function TopHeaderBar() {
  const {userToken} = useToken();
  const [userInfo,setUserInfo] = useState({});
  const navigate = useNavigate()


  const {getUserInfo} = useApi();

  function accountClickAction(){
    navigate('/account')
  }

  useEffect(()=>{
    getUserInfo(userToken).then(res=>{
      setUserInfo(res)
    }).catch(err=>{

    })
  },[])

  return (
    <div className='flex w-full h-28 border-b-2 justify-between items-center z-12'>
     <div className='flex ml-5 justify-center items-center'>
          <img className='small-logo mr-3' src="/logo.png" alt="" />
           <h1 className='text-2xl company-font'>CyberSentry</h1>
      </div>
     
      <div
        className='flex hover:text-sky-400 hover:underline flex-col w-14 cursor-pointer items-center mr-10'
        onClick={accountClickAction}
      >
        <img className='w-full rounded-full border-2  ' src={`/avatar pictures/avatar-${userInfo.avatar}.jpg`} alt=""/>
        <h1 className='roboto  px-2  mt-1'>{userInfo.username}</h1>
      </div>
    </div>
  )
}

export default TopHeaderBar
