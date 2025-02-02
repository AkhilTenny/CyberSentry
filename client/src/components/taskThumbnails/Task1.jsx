import React from 'react'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'

function Task1() {
  const navigate = useNavigate();
  function Doclick(){
    navigate('/module1')
  }
  return (
    <div className='p-2 flex justify-center items-center flex-col h-96'>
      <motion.div 
        whileHover={{
          scale:1.01
        }}
        className='cursor-pointer'
        onClick={Doclick}
        >
      <div className='w-full overflow-hidden rounded-2xl  '>
        <img className='w-full h-64' src="/Task Thumbnails/task1.png" alt="" />
      </div>
      <div className='w-full mt-2'>
        <h1 className='roboto text-3xl font-bold '><snap className="font-bold">1.</snap> Setting Up Kali Linux in a Virtual Machine</h1>
      </div>
      <div className='w-full mt-2 flex justify-end'>
        
        <button className='rounded-lg bg-gray-500 text-white font-bold text-xl hover: px-2 py-1'>Not completed</button>
      </div>
      </motion.div>
    
    </div>
  )
}

export default Task1
