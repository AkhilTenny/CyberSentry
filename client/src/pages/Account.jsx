import React, { useEffect,useState } from 'react'
import { useApi } from '../actions/api/useApi'
import { useToken } from '../context/TokenContext';

import EditButton from '../components/account/EditButton';
import EditUsernameModal from '../components/account/EditUsernameModal';
import EditAvatarModal from '../components/account/EditAvatarModal';



function Account() {
 
  
  const {getUserInfo} = useApi();
  const {userToken,tokenSignOut} = useToken();

  const [usernameEditModal,setUsernameEditModal] = useState(false);
  const [avatarEditModal,setAvatarEditModal] =useState(false);

  const [userInfo,setUserInfo] = useState({
    avatar:1,
    username:null,
    email:null,
    userId:null
  });

  useEffect(()=>{
     getUserInfo(userToken).then(res=>{
       setUserInfo(res)
     }).catch(err=>{
 
     })
   },[])

   function userLogout(){
    tokenSignOut();
   }

   function changeEditModal(item){
    console.log("hai",item)
    switch(item){
      case "username":
        setUsernameEditModal(!usernameEditModal)
        break;
      case "avatar":
        setAvatarEditModal(!avatarEditModal)
        break;
    }
   }

  return (
    <div className='flex w-screen justify-center  mt-10'>
      <div className='w-1/2 bg-gray-100  rounded-3xl px-3 pb-8 pt-4 shadow-lg'>
      <div className='flex justify-center'>
      <h1 className='text-2xl font-bold mb-5'>Your Account</h1>

      </div>

      {/* avatar div */}
        <div className='w-full flex justify-center items-end'>
            <img className='w-32 rounded-full shadow-lg' src={ `/avatar pictures/avatar-${userInfo.avatar}.jpg`} alt="" />
            <EditButton item={"avatar"} openModal={changeEditModal}/>

          

        </div>

        {/* information div */}
        <div className=' mx-10'>
          {/* username */}
          <div className='mb-6'>
            <h1 className='text-gray-500'>Username:</h1>
            <div className='flex'>
              <h1  className='text-2xl underline'>{userInfo.username}</h1>
              <EditButton item={"username"} openModal={changeEditModal}/>
            </div>
           </div>
           
          {/* email */}
          <div className='mb-6'>
             <h1 className='text-gray-500'>Email ID :</h1>
             <div className='flex'>
              <h1  className='text-2xl underline'>{userInfo.email}</h1>

            </div>         
          </div>
          {/* userId */}
          <div className='mb-6'>
            <h1 className='text-gray-500'>User Id:</h1>
            <h1 className='text-2xl underline'>{userInfo.userId}</h1>
         
          </div>
          <button type='button' 
            onClick={userLogout}
            className='text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 '>LOGOUT</button>
        </div>
      </div>
        {
          usernameEditModal &&
          <EditUsernameModal username={userInfo.username} closeModal={changeEditModal}/>
        }{
          avatarEditModal&&
          <EditAvatarModal  closeModal={changeEditModal} avatar={userInfo.avatar}/>
        }
    </div>
  )
}

export default Account
