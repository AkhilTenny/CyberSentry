import React, { useEffect, useRef, useState } from 'react'
import ModuleResults from './ModuleResults';


function Module4Input(props) {
  const [status,setStatus] = useState(props.status) ;
  const [input,setInput] = useState(null)
  const [modal,setModal] = useState(false);
  const keyInput = useRef();
  

  useEffect(()=>{
    setStatus(props.status);
  },[props.status])

  function checkInput(){
    setInput(keyInput.current.value);
    setModal(!modal)
    
  }
  function changeCheckModal(){
    setModal(!modal)
  }


  function changeStatus(){
    setStatus(!status)
  }

  return (
    <div className=' ml-4 p-6 mt-5 mb-4 h-38 bg-purple-800 shadow-xl  w-2/3 items-center justify-between flex rounded-3xl'>   
    {
      status?
      <div className='flex w-full h-full justify-center bg-white rounded-2xl  items-center'>
        <h1 className="head-1">Compeleted</h1>
                      <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#0073ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#0073ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

      </div>
      :
      <div>
          <h1 className=" text-white text-2xl font-bold ">Enter {props.item} here:</h1>
          <input ref={keyInput} className='p-1 rounded-lg bg-purple-200 text-black focus:outline-none' placeholder='Enter key' type="text" />
          <button 
            onClick={checkInput}
            className="text-white bg-green-600 text-lg  px-2 rounded-xl py-1 font-bold ml-3">Check</button>
            {
            modal&&
              <ModuleResults score={props.score} closeModal={changeCheckModal} moduleNo={4} inputValue={input} taskIndex={props.taskIndex} status={changeStatus}/>
           }
      </div>
    }
     
      
    </div>
  )
}

export default Module4Input
