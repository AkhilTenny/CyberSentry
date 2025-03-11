import React, { useEffect, useState } from 'react'
import {useModuleNames}from '../info/moduleNames'
import { useTaskApi } from '../actions/api/useTaskApi';



function ModuleStatus(props) {
  const {module1Name,module2Name,module3Name,module4Name} = useModuleNames();
  const taskCount = props.taskCount;
  const {getOneModuleInfo} = useTaskApi();
  const [moduleInfo,setModuleInfo] = useState({})

  const moduleName={
    1:module1Name,
    2:module2Name,
    3:module3Name,
    4:module4Name
  }
  
  const moduleTile = moduleName[props.module].substring(0,25)

  useEffect(()=>{
    getOneModuleInfo(props.module).then(res=>{
      setModuleInfo(res)
    }).catch(err=>{
      setModuleInfo(err)
    })
  },[])

  console.log(moduleInfo)

 
  const trueTaskCount = moduleInfo && Object.keys(moduleInfo).filter(key => key.startsWith("task")).length;

  const maxScore = taskCount*4;

  const percentage = (trueTaskCount/taskCount)*100; 
  console.log(percentage)


  return (
    <>{
      moduleInfo?
      <div className='w-full h-28 bg-white flex flex-col border-y border-black-200 '>
        <div className='w-full  flex '>
        <div className='w-20 h-16 flex justify-center items-center'>
        <img  className='w-16 mt-2 rounded-full border-2  ' src={`/ModuleIcons/module${props.module}.png`} alt="" />
        </div>
        <div className='w-full h-16 flex flex-col justify-center items-center'>
          <div className='w-full flex items-center justify-between'>
          <h1 className="text-gray-700 text-2xl font-bold">Module-{props.module}</h1>
          <h1 className="text-gray-700 text-l font-bold">score: {moduleInfo.score}/{maxScore}</h1>

          </div>
          <div className='w-full '>
          <h1 className="text-black text-lg break-words  font-bold">{moduleTile}...</h1>

          </div>
        </div>
      </div>
      <div className='w-full h-full flex items-center'>
        <div className='h-full w-full  flex justify-center items-center p-2'>
          <div className='h-2 bg-gradient-to-r from-gray-400 to-gray-200 rounded-xl w-full'>
          <div className="h-full bg-gradient-to-r from-purple-600 to-purple-900 rounded-xl" style={{ width: `${percentage}%` }}></div>
          </div>
        </div>
        <div>
          <p className="content-1">{trueTaskCount}/{taskCount}</p>
        </div>
      </div>
      
    </div>:
    <div></div>
    }
    </>
    
    
  )
}

export default ModuleStatus
