import React from 'react'
import Thumbnail from "../../assets/Task Thumbnails/module2.png"
import ThumbnailHeader from '../../components/moduleTasks/ThumbnailHeader'
import TopHeaderBar from '../../components/TopHeaderBar'
import {motion} from "framer-motion"
import SyberSentryTip from '../../components/SyberSentryTip'
import TerminalView from '../../components/moduleTasks/TerminalView'
import DownloadFile from "../../assets/LinuxCommands_Challenge.zip"
import taskfolderShot from "../../assets/screenshots/module2/taskFiles.png"
import Module1Input from '../../components/moduleTasks/Module1Input'


function Module2() {
  return (
    <div className='flex flex-col items-center'>
      <TopHeaderBar/>
      <div className='w-3/4 flex flex-col items-center' >
        <ThumbnailHeader Thumbnail={Thumbnail} title={"Learn Linux Commands"} index={"02"} />
       
          
          <motion.div
            initial={{
              x:200,
              opacity:0
            }}animate={{
              x:0,
              opacity:1
            }}
            className='w-3/4'
          >
            <SyberSentryTip/>
            <div>
              <h1 className='head-1'>&#8226; Why should you learn linux commands</h1>
              <h1 className='content-1'>Learning Linux commands is essential for cybersecurity because most security tools, servers, and hacking environments are built on Linux. Ethical hacking and penetration testing rely on Linux-based tools like Kali Linux, Metasploit, Nmap, and Wireshark, which require command-line usage to automate attacks, scans, and exploitation. Digital forensics and incident response also depend on Linux commands for analyzing logs, investigating failed logins, and monitoring processes. Security professionals use Linux to harden servers, enforce file permissions, and secure networks through firewall configurations and SSH management. Bash scripting helps automate security tasks like log monitoring, brute force detection, and network analysis. Additionally, many privilege escalation techniques involve exploiting Linux misconfigurations using commands like sudo, find, and cron jobs. Linux is also widely used for configuring firewalls, proxies, and intrusion detection systems, making it critical for network security. Capture The Flag (CTF) challenges and cybersecurity competitions heavily depend on Linux for tasks like finding hidden flags, cracking passwords, and exploiting vulnerabilities. Overall, mastering Linux gives you full control over systems, networks, and security tools, making it a crucial skill for any ethical hacker or cybersecurity professional.</h1>
              
              <h1 className='head-1'>&#8226; Before getting started with the tasks Lets learn some basic linux commands</h1>

              <h1 className='content-1'><snap className="bg-yellow-500 p-1">ls</snap> – List files in a directory</h1>
              <TerminalView title="bash" body={["ls -l   # Detailed list with permissions",'ls -a   # Show hidden files']}/>

              <h1 className='content-1'><snap className="bg-yellow-500 p-1">cd</snap> – Change directory</h1>
              <TerminalView title="bash" body={['cd /home/user/Documents  # Navigate to a directory']}/>


              <h1 className='content-1'><snap className="bg-yellow-500 p-1">pwd</snap> – Print current working directory</h1>
              <TerminalView title="bash" body={['pwd']}/>


              <h1 className='content-1'><snap className="bg-yellow-500 p-1">mkdir</snap>  – Create a new directory</h1>
              <TerminalView title="bash" body={['mkdir my_folder']}/>

              <h1 className='head-1'>&#8226; How to get started ?</h1>

              <ul className='list-disc pl-5 content-1' >
                <li>
                  <h1 >Open kali in virtualbox</h1>
                </li>
                <li>
                  <h1 >Download the file given below</h1>
                </li>
                <li>
                  <h1 >Extract the file</h1>
                </li>
                <li>
                  <h1 >Use terminal to do the tasks</h1>
                </li>
                
              </ul>
              <div className='mt-5 mb-5 w-full flex justify-center items-center'>
                <a className='bg-sky-500 px-3 rounded-xl text-white py-2 mt-4' href={DownloadFile} download="LinuxCommands_Challenge">Download File</a>

              </div>
              <div>
                <h1 className='head-1'>How to do Tasks ?</h1>
                
                
                
                <img src={taskfolderShot} alt="" />
                <h1 className="head-3">&#8226; Go to the extracted file and open terminal. Then use the <snap className="bg-yellow-500 p-1">cd</snap> command to change the directory to Task you are currently doing</h1>
                <h1 className="head-3">&#8226; Each task is to find a hidden key inside some file using the command hints given </h1>
                <h1 className='content-1'>eg:</h1>

                <TerminalView title={"bash"} body={['cd "Task 1"']} />

              </div>
              {/* task 1 */}
              <div>

                <h1 className="head-1">Task 1 </h1>
                <h1 className="content-1">&#8226; Go to the Task 1 directory using <snap className="bg-yellow-500 p-1">cd</snap> command </h1>
                <h1 className="head-3">Commands to learn</h1>
                <h1> <snap className="bg-yellow-500 p-1">ls -a</snap> - to show hidden files in the directory </h1>
                <h1> <snap className="bg-yellow-500 p-1">cat </snap> - to open and the text inside a file </h1>

                <h1 className="head-3">Hint:</h1>
                <h1 className='content-1'>&#8226; go to hiddenFolder -> thekeyishere</h1>
                <h1 className="content-1">&#8226;   then open the hidden file inside</h1>
                <Module1Input/>

              </div>

              {/* task 2 */}
              
             



            </div>

          </motion.div>
        
      
      
      </div>
     
    </div>
  )
}

export default Module2
