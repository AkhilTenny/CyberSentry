import React from 'react'

function Module1Input() {
  return (
    <div className=' ml-4 p-6 mt-5 mb-4 h-38 bg-purple-800 shadow-xl  w-2/3 items-center justify-between flex rounded-3xl'>      
      <h1 className=" text-white text-2xl font-bold ">Enter the secret key here:</h1>
      <input className='p-1 rounded-lg bg-purple-200 text-black focus:outline-none' placeholder='Enter key' type="text" />
      <button className="text-white bg-green-600 text-lg  px-2 rounded-xl py-1 font-bold ml-3">Check</button>
      
    </div>
  )
}

export default Module1Input
