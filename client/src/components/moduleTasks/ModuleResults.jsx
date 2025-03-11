import React, { useEffect,useState } from 'react'
import { useTaskApi } from '../../actions/api/useTaskApi'

function ModuleResults(props) {

  const {checkModule2Task,checkModule3Task,checkModule4Task} = useTaskApi();

  const [result,setResult] = useState(false);

  const checkTask = {
    2:checkModule2Task,
    3:checkModule3Task,
    4:checkModule4Task
  }

  useEffect(()=>{
    checkTask[props.moduleNo](props.inputValue,props.taskIndex,props.score).then(res=>{
      setResult(res)

      setTimeout(()=>{
        props.closeModal()
        if(res.result){
          props.status(true)

        }


      },3000)

    }).catch(err=>{
      setResult(false)
    })

  },[])

  
  return (
    <div
      onClick={()=>{
        if(result){
          props.closeModal();
        }
      }}
    className='fixed inset-0 w-screen h-screen bg-gray-300 bg-opacity-50 flex justify-center items-center'>

      {
        result ? 
        <div className='w-80 h-20 justify-center bg-white flex items-center rounded-lg'>
          <div ></div>
          <div className='flex justify-center items-center'>
            <h1 className="text-gray-700 text-2xl font-bold px-6">{result.message}.</h1>
            {
              result.result? 
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#0073ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#0073ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              :
              <svg width="40px" height="40px" viewBox="0 0 1024 1024" fill="#cc0000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#cc0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M332 663.2c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l349.6-356c9.6-9.6 9.6-25.6 0-35.2s-25.6-9.6-35.2 0L332 663.2z" fill=""></path><path d="M681.6 698.4c9.6 9.6 25.6 9.6 35.2 0s9.6-25.6 0-35.2L367.2 307.2c-9.6-9.6-25.6-9.6-35.2 0s-9.6 25.6 0 35.2l349.6 356z" fill=""></path><path d="M516.8 1014.4c-277.6 0-503.2-225.6-503.2-503.2S239.2 7.2 516.8 7.2s503.2 225.6 503.2 503.2-225.6 504-503.2 504z m0-959.2c-251.2 0-455.2 204.8-455.2 456s204 455.2 455.2 455.2 455.2-204 455.2-455.2-204-456-455.2-456z" fill=""></path></g></svg>
              }
          </div>

      </div>:
      <div className='w-80 h-20 justify-center bg-white flex items-center rounded-lg'>
      <div className="loader"></div>
      <div className='flex flex-col justify-center '>
        <h1 className="text-gray-700 text-2xl font-bold px-6">Checking key...</h1>
      </div>

    </div>



      }
      
    
    </div>
  )
}

export default ModuleResults
