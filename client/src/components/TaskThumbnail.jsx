import React from 'react'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'

function TaskThumbnail(props) {
  const navigate = useNavigate();
  function Doclick(){
    navigate(`/${props.module}`)
  }
  return (
    <div className='p-2 flex justify-start pt-2 items-center flex-col h-96'>
      <motion.div 
        whileHover={{
          scale:1.01
        }}
        onClick={Doclick}

        >
      <div className='w-full overflow-hidden rounded-2xl shadow-2xl '>
        <img className='w-full h-64' src={`/Task Thumbnails/${props.module}.png`} alt="" />
      </div>
      <div className='w-full mt-2'>
        <h1 className='roboto text-3xl font-bold '>{props.title}</h1>
      </div>
      
      </motion.div>
    
    </div>
  )
}

export default TaskThumbnail
