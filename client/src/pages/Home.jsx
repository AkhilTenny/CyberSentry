import React from 'react'
import LeftSideLeaderBoard from '../components/LeftSideLeaderBoard'
import TopHeaderBar from '../components/TopHeaderBar'
import Task1 from '../components/taskThumbnails/Task1'



function Home() {
  return (
    <div className='flex ' >
      <LeftSideLeaderBoard/>
      <div className='flex w-full flex-col'>
      <TopHeaderBar/>
      <div className='grid grid-cols-3 w-full mt-5'>
        <Task1/>
        
      </div>
      </div>
      
    </div>
  )
}

export default Home
