import React, { useEffect, useState } from 'react'
import TopHeaderBar from '../../components/TopHeaderBar'
import ThumbnailHeader from '../../components/moduleTasks/ThumbnailHeader'
import Thumbnail from "../../assets/Task Thumbnails/module3.png"
import {motion} from "framer-motion"
import SyberSentryTip from '../../components/SyberSentryTip'
import TerminalView from '../../components/moduleTasks/TerminalView'
import Task1Screenshot from "../../assets/screenshots/module3/task1.1.png"
import TerminalHint from '../../components/moduleTasks/TerminalHint'
import Module3Input from '../../components/moduleTasks/Module3Input'
import { useTaskApi } from '../../actions/api/useTaskApi'
import { useModuleNames } from '../../info/moduleNames'








function Module3() { 
  const {getTaskInfo} = useTaskApi();
  const [taskInfo,setTaskInfo] = useState({})

  const {module3Name} = useModuleNames();

   const [task1Score,settask1Score] = useState(4);
    const [task2Score,settask2Score] = useState(4);
    const [task3Score,settask3Score] = useState(4);
    const [task4Score,settask4Score] = useState(4);
  
  

 useEffect(()=>{
    getTaskInfo(3).then(res=>{
      setTaskInfo(res)

    }).catch(err=>{
      setTaskInfo({err:"err"})
    })
    
  },[])

  //function to reduce the taskscore if user used the hint of a specefic task
  function reduceScore(taskIndex){

    const task={
      1:settask1Score,
      2:settask2Score,
      3:settask3Score,
      4:settask4Score
    }
    //reduce the taskscore or appropriate task
    task[taskIndex](2);
    
  }
  
  return (
    <div className='flex flex-col items-center'>
      <TopHeaderBar/>
      <div className='w-3/4 flex flex-col items-center'>
        <ThumbnailHeader Thumbnail={Thumbnail} title={module3Name} index={"03"}/>
        <motion.div
          initial={{
            x:200,
            opacity:0
          }}
          animate={{
            x:0,
            opacity:1
          }}
          className='w-3/4 mb-10'
        > 
          <SyberSentryTip/>
          <div className='w-full'>
            <h1 className="head-1"> &#8226; What is IP address</h1>
            <h1 className='content-1'>
            An IP address (Internet Protocol address) is a unique number assigned to every device connected to a network. It acts like a home address for devices, allowing them to communicate with each other over the internet or a local network.
            </h1>
            <h1 className="head-3">Types of IP Addresses:</h1>
            <ul className='content-1 list-disc pl-5'>
              <li>Public IP: Used on the internet, assigned by ISPs (e.g., 203.0.113.5).</li>
              <li>Private IP: Used within local networks (e.g., 192.168.1.1).</li>
              <li className='font-bold'>IPv4 vs IPv6:</li>
                <ul className='content-1 list-disc pl-5'>
                  <li>IPv4: Most common, uses 32-bit numbers (192.168.0.1).</li>
                  <li>IPv6: Newer, uses 128-bit numbers (2001:db8::ff00:42:8329).</li>
                </ul>
            </ul>
            <h1 className='head-1'>&#8226; What is Nmap</h1>
            <p className='content-1'>Nmap (Network Mapper) is a powerful tool used for network scanning, security auditing, and penetration testing. It helps cybersecurity professionals and ethical hackers gather information about networks and devices.</p>
            
            <h2  className='head-3'>Key Uses of Nmap:</h2>
            <h3 className='content-1 '>Network Discovery </h3>
            <ul className='content-1 list-disc pl-5'>
                <li>Find active devices on a network.</li>
                <li>Identify IP addresses and hostnames.</li>
            </ul>
            
            <h3 className='content-1 '>Port Scanning </h3>
            <ul className='content-1 list-disc pl-5'>
                <li>Detect open ports on a target machine.</li>
                <li>Helps in finding vulnerable entry points.</li>
            </ul>

            <h1 className="head-1">&#8226; Install Nmap</h1>
            <h1 className="content-1">Enter the below command in your Kali Linux teminal to install Nmap</h1>
            <TerminalView title={"bash"} body={["apt-get install nmap"]}/>

            <h1 className="head-1">&#8226; Nmap syntax:</h1>
            <TerminalView title={"bash"} body={["nmap [options] [target]"]}/>

            <h1 className="head-3">[target]</h1>
            <h1 className="content-1">a target refers to the system, device, or network that you want to scan. It can be specified in different ways, such as an IP address, domain name, or subnet.</h1>

            <h1 className="head-3">[options]</h1>
            <h1 className="content-1"> <snap className="bg-yellow-500 p-1">-p</snap> Checks which ports are open on a target.</h1>
            <TerminalView title={"bash"} body={["nmap -p 1-1000 192.188.1.1"]}/>

            <h1 className="content-1"> <snap className="bg-yellow-500 p-1">-sV</snap> Finds the version of services running on open ports.</h1>
            <TerminalView title={"bash"} body={["nmap -sV 192.188.1.1"]}/>

            <h1 className="content-1"> <snap className="bg-yellow-500 p-1">-O</snap> Attempts to determine the OS of the target.</h1>
            <TerminalView title={"bash"} body={["nmap -O 192.188.1.1"]}/>

            

            <h1 className="head-1">&#8226; How to do Tasks</h1>
            <h1 className="content-1">While doing task use <snap className="font-bold bg-red-200">scanme.nmap.org</snap> as target.  <snap className="font-bold bg-red-200">Scanme.nmap.org</snap> is a free service provided by the Nmap Security Scanner Project. This machine was setup for testing purposes, specifically to help students learn about Nmap, test Nmap and their Nmap installation. </h1>

            <h1 className="content-1">And try googling for the options in nmap for the needed task</h1>

            <h1 className="content-1 mt-4 mb-3"> eg:</h1>
            <TerminalView title={"bash"} body={["nmap scame.nmap.org"]}/>

            {/* task1 */}

            <div className='task'>

              <h1 className="head-1">Task 1: Check if a Host is Online</h1>
              <h1 className="head-3">Task Instructions:</h1>
              <ul className='list-disc pl-5 content-1'>
                <li>Scan the IP scanme.nmap.org to check if it's online.</li>
                <li>Copy and paste the number appered in the below output from your teminal</li>
                <h1 className="content-1 font-bold">Output:</h1>
                <img src={Task1Screenshot} alt="" />
              </ul>
              <TerminalHint reduceScore={reduceScore} taskIndex={1}  body={["nmap -sn scanme.nmap.org"]}/>
              <Module3Input score={task1Score} taskIndex={1} status={taskInfo.task1 || null} item={"result"}/>


            </div>


            {/* task2 */}
            <div className='task'>

            <h1 className="head-1">Task 2: Find Open Ports on a Target</h1>
              <h1 className="head-3">Task Instructions:</h1>
              <ul className='list-disc pl-5 content-1'>
                <li>Scan the IP scanme.nmap.org and find open ports.</li>
                <li>Submit the list of open ports as the answer.</li>
               
              </ul>
              <TerminalHint reduceScore={reduceScore} taskIndex={2}  body={["nmap scanme.nmap.org"]}/>
              <Module3Input score={task2Score} taskIndex={2} status={taskInfo.task2 || null} item={"result"}/>

 

            </div>

            {/* task3 */}
            <div className='task'>

            <h1 className="head-1">Task 3: Perform a Service Scan</h1>
              <h1 className="head-3">Task Instructions:</h1>
              <ul className='list-disc pl-5 content-1'>
                <li>Browse and Find the [option] in nmap to perform a service scan on an ip.</li>
                <li>Enter the option below.</li>
               
              </ul>
              <TerminalHint reduceScore={reduceScore} taskIndex={3}  body={["nmap -sV scanme.nmap.org"]}/>
              <Module3Input score={task3Score} taskIndex={3} status={taskInfo.task3 || null} item={"option"}/>



            </div>
           
            {/* task4 */}
            <div className='task'>

              <h1 className="head-1"> Task 4: Detect OS of a Target</h1>
                <h1 className="head-3">Task Instructions:</h1>
                <ul className='list-disc pl-5 content-1'>
                <li>Browse and Find the [option] in nmap to perform a os (operating system) scan on an ip.</li>
                <li>Enter the option below.</li>
                
                </ul>
                <TerminalHint reduceScore={reduceScore} taskIndex={4} body={["nmap -O scanme.nmap.org"]}/>
                <Module3Input score={task4Score} taskIndex={4} status={taskInfo.task4 || null} item={"option"}/>



             </div>

          </div>

        </motion.div>
      </div>
      

      
    </div>
  )
}

export default Module3
