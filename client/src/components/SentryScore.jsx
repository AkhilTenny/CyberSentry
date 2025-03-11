import React, { useEffect, useState } from 'react'
import { useTaskApi } from '../actions/api/useTaskApi';


function SentryScore() {
  const {getSentryScore} = useTaskApi();
  const [sentryScore,setSentryScore] = useState();
  

  useEffect(()=>{
    getSentryScore().then(res=>{
      setSentryScore(res.sentryScore)
    }).catch(err=>{
      console.log(err)
    })
  })
  return (
    <div className='w-full  h-60 bg-white flex flex-col justify-center items-center'>
      <div className='shadow-2xl flex w-40 h-40 rounded-full bg-gradient-to-t from-indigo-600 to-indigo-400 justify-center items-center'>
        <h1 className='anton text-8xl text-yellow-400 '>{sentryScore?sentryScore:0}</h1>
      </div>
      <div className='w-full flex mt-2 justify-center anton text-xl'>
        <h1 >SentryScore</h1>
      </div>
      <div></div>
    </div>

  )
}

export default SentryScore
