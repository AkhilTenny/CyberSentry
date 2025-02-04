import React from 'react'
import {motion} from "framer-motion"

function ThumbnailHeader(props) {
  return (
    <motion.div 
          initial={{
            x:-200,
            opacity:0
          }}
          animate={{
            x:0,opacity:1
          }}
          className={ `overflow-hidden w-full h-64 flex justify-center items-center bg-center bg-cover rounded-b-3xl shadow-2xl`} 
          style={{backgroundImage: `url(${props.Thumbnail})`}}>
            <div className='w-full h-full flex  bg-black bg-opacity-55 '>
              <h1 className='text-white text-2xl font-bold mt-2 ml-3'>Module: {props.index}</h1>
              <div className='h-full flex items-center'>
               <h1 className='text-white text-5xl font-bold roboto '>{props.title}</h1>

              </div>
            </div>
          
        </motion.div>
  )
}

export default ThumbnailHeader
