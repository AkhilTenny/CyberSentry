import React, { useEffect } from 'react'
import ModuleStatus from './ModuleStatus'
import { useTaskApi } from '../actions/api/useTaskApi'
import SentryScore from './SentryScore';
import { useModuleTaskCount } from '../info/moduleTaskCount';




function LeftSideLeaderBoard() {

  const {module1TaskCount,module3TaskCount,module2TaskCount,module4TaskCount} = useModuleTaskCount();

  return (
    <div className='flex flex-col w-96 bg-gray-200 h-screen'>
      <SentryScore/>
      <ModuleStatus module={1} taskCount={module1TaskCount} />
      <ModuleStatus module={2} taskCount={module2TaskCount}/>
      <ModuleStatus module={3} taskCount={module3TaskCount}/>
      <ModuleStatus module={4} taskCount={module4TaskCount}/>

      


    </div>
  )
}

export default LeftSideLeaderBoard
