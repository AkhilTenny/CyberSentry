import React from 'react'
import LeftSideLeaderBoard from '../components/LeftSideLeaderBoard'
import TopHeaderBar from '../components/TopHeaderBar'
import TaskThumbnail from '../components/TaskThumbnail'
import { useModuleNames } from '../info/moduleNames'




function Home() {

  const {module1Name,module2Name,module3Name,module4Name} = useModuleNames();
  return (
    <div className='flex ' >
      <LeftSideLeaderBoard/>
      <div className='flex w-full flex-col'>
      <TopHeaderBar/>
      <div className='grid grid-cols-3 w-full mt-5'>
        <TaskThumbnail module={"module1"} title={module1Name}  />
        <TaskThumbnail module={"module2"} title={module2Name}  />
        <TaskThumbnail module={"module3"} title={module3Name} />
        <TaskThumbnail module={"module4"} title={module4Name} />

        

      </div>
      </div>
      
    </div>
  )
}

export default Home
