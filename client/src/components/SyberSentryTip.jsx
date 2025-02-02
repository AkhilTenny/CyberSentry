import React, { useState } from 'react'
import {motion} from 'framer-motion'

function SyberSentryTip() {
  const [expand,setExpand] = useState(false);
  function expandDivAction(){
    setExpand(!expand)
  }

  
  return (
    <motion.div
      layout 
      
     className='  p-4 mt-5 mb-4 bg-yellow-500 shadow-xl w-full rounded-3xl'>
      <div className='flex w-full justify-between items-center'>
       <h1 className=' head-1'>How This Works ?</h1>
        <button className='bg-white py-1 rounded-xl mr-5 px-2 hover:bg-gray-100 font-bold' onClick={expandDivAction}>Read more</button>
      </div>
      {
        expand&&
        <div>
        <h1 className='head-3'>Way you learn Cyber Security in CyberSentry:</h1>
        <h1 className='content-1'>Welcome to our cybersecurity learning platform! Here, you’ll learn by doing tasks that challenge you to find answers on your own. Hints are available, but try your best to solve them through research, Google, and ethical methods. This hands-on approach helps you develop real skills in a self-taught way.</h1>
      
      </div>
      }
     
     
    </motion.div>
  )
}

export default SyberSentryTip
