import React, { useRef, useState } from 'react'
import classnames from "classnames"
import { useNavigate } from "react-router";

import { useApi } from '../../actions/api/useApi';

function EditAvatarModal(props) {
  const {changeUserAvatar} = useApi();
  function closeModal(){
    props.closeModal("avatar")
    
  }
  const navigate = useNavigate();

  
  const avatar1 = useRef(); 
  const avatar2 = useRef(); 
  const avatar3 = useRef(); 
  const avatar4 = useRef(); 
  const avatar5 = useRef(); 
  const avatar6 = useRef(); 

  const [state,setState] = useState(props.avatar);
  function changeAvatarAction(){
    changeUserAvatar(state).then(res=>{
      closeModal()
      navigate(0)
    }).catch(err=>{
      alert("Something went wrong!")
    })
  }
  return (
    <div
      onClick={(e)=>{
        if(e.target == e.currentTarget){
          closeModal()
        }
      }}
     className='fixed inset-0  w-screen h-screen bg-gray-300 bg-opacity-50 flex justify-center items-center'>  
      <div className='p-4 bg-gray-50 h-38 rounded-lg flex justify-around flex-col ' >
      <h1 className='text-3xl border-b-2'>Current avatar:</h1>

        <div className='w-full flex justify-center mt-5'>

            <img className='w-48 rounded-lg ' src={`/avatar pictures/avatar-${props.avatar}.jpg`} alt="" />
         </div>
         <div className='border-b-2'>
        <h1 className='text-3xl '>Choose Your Avatar:</h1>

        </div>
        <div className='flex mt-5'>
          <div onClick={()=>{setState(2)}} ref={avatar1} className={ classnames('p-4 rounded-lg mr-2 ',{'bg-sky-300':state===2})}><img className='w-44 rounded-lg ' src="/avatar pictures/avatar-2.jpg" alt="" /></div>
          <div onClick={()=>{setState(3)}} ref={avatar2} className={ classnames('p-4 rounded-lg mr-2 ',{'bg-sky-300':state===3})}><img className='w-44 rounded-lg' src="/avatar pictures/avatar-3.jpg" alt="" /></div>
          <div onClick={()=>{setState(4)}} ref={avatar3} className={ classnames('p-4 rounded-lg mr-2 ',{'bg-sky-300':state===4})}><img className='w-44 rounded-lg' src="/avatar pictures/avatar-4.jpg" alt="" /></div>
          <div onClick={()=>{setState(5)}} ref={avatar4} className={ classnames('p-4 rounded-lg mr-2 ',{'bg-sky-300':state===5})}><img className='w-44 rounded-lg' src="/avatar pictures/avatar-5.jpg" alt="" /></div>
          <div onClick={()=>{setState(6)}} ref={avatar5} className={ classnames('p-4 rounded-lg mr-2 ',{'bg-sky-300':state===6})}><img className='w-44 rounded-lg' src="/avatar pictures/avatar-6.jpg" alt="" /></div>
          <div onClick={()=>{setState(7)}} ref={avatar6} className={ classnames('p-4 rounded-lg mr-2 ',{'bg-sky-300':state===7})}><img className='w-44 rounded-lg' src="/avatar pictures/avatar-7.jpg" alt="" /></div>

        </div>     
         
        
        <div className='flex justify-between mt-3 text-white'>
       
          <button
          onClick={closeModal}
           className='px-2 py-1 rounded-lg hover:bg-red-500 bg-red-400 '>Cancel</button>
           {
              state == props.avatar?
              <button
              className=' cursor-not-allowed px-2 py-1 rounded-lg hover:bg-gray-500 bg-gray-400 '>Submit</button>
              :
              <button
              onClick={changeAvatarAction}
              className='px-2 py-1 rounded-lg hover:bg-sky-500 bg-sky-400 '>Submit</button>

           }

          

        </div>
      </div>    
    </div>
  )
}

export default EditAvatarModal
