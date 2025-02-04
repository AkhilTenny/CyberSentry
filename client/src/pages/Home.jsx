import React from 'react'
import LeftSideLeaderBoard from '../components/LeftSideLeaderBoard'
import TopHeaderBar from '../components/TopHeaderBar'
import TaskThumbnail from '../components/TaskThumbnail'



function Home() {
  return (
    <div className='flex ' >
      <LeftSideLeaderBoard/>
      <div className='flex w-full flex-col'>
      <TopHeaderBar/>
      <div className='grid grid-cols-3 w-full mt-5'>
        <TaskThumbnail module={"module1"} title={"1. Setting Up Kali Linux in a Virtual Machine"}  />
        <TaskThumbnail module={"module2"} title={"2. Learn Linux Commands"}  />
        <TaskThumbnail module={"module3"} title={'3. Master Nmap tool'} />
        

      </div>
      </div>
      
    </div>
  )
}

export default Home
