import React from 'react'

function TerminalView(props) {
  return (
    <div className=' w-full flex justify-center mt-5 mb-5 font-mono'>
      <div className='text-white w-3/4 rounded-xl overflow-hidden '>
        <div className='bg-gray-600 pl-4 pt-1'>
          <h1>{props.title}</h1>
        </div>
        <div className='bg-gray-900 p-4 '>
          <h1>
            {props.body}
          </h1>
        </div>
      </div>
      
       
    </div>
  )
}

export default TerminalView
