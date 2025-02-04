import React, { useState } from 'react'
import TerminalView from './TerminalView';
import {motion} from 'framer-motion'


function TerminalHint(props) {
  const [state,setState] = useState(true);
  function changeState(){
    setState(!state)
  }
  return (
    <>
    {
      state?
      <div onClick={changeState} className='mt-5 mb-5'>
      <button className="text-white bg-red-600 text-lg  px-2 rounded-xl py-1 font-bold ">Show hint</button>

  
      
    </div>
      :
      <div className='bg-red-500 text-lg  pb-4 pl-3 rounded-xl py-1 font-bold  mt-5 shadow-xl'>
        <button className='px-2 mt-2 bg-white rounded-lg' onClick={changeState}>x</button>
        
        <TerminalView title={"bash"}  body={[props.body]}/>
      </div>

    }
      
    </>
  )
}

export default TerminalHint
