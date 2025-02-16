import React from 'react'
import TopHeaderBar from '../../components/TopHeaderBar'
import ThumbnailHeader from '../../components/moduleTasks/ThumbnailHeader'
import Thumbnail from "../../assets/Task Thumbnails/module4.png"
import {motion} from "framer-motion"
import SyberSentryTip from '../../components/SyberSentryTip'
import TerminalView from '../../components/moduleTasks/TerminalView'
import usernames from '../../assets/usernames.txt'
import TerminalHint from '../../components/moduleTasks/TerminalHint'
import passwords from '../../assets/passwords.txt'




function Module4() {
  return (
    <div className='flex flex-col items-center'>
      <TopHeaderBar/>
      <div className='w-3/4  flex flex-col items-center'>
      <ThumbnailHeader Thumbnail={Thumbnail} title={"Hydra"} index={"04"}/>
        <motion.div
          initial={{
            x:100,
            opacity:0
          }}
          animate={{
            x:0,
            opacity:1
          }}
          className='w-3/4 mb-10'

        >
          <SyberSentryTip/>
          <div>
            <h1 className="head-1">Ports</h1>
            <p className='content-1'>An IP address identifies a device on a network, but to facilitate communication, it uses ports to handle different types of connections.</p>

            <p className='content-1'>A port is a numerical identifier (0-65535) assigned to specific services or applications running on a device. It helps distinguish different types of traffic on the same IP.</p> 
            <h1 className="head-1">Common Ports:</h1>
            <ul className='list-disc pl-5'>
            <li className='content-1'><spam className="font-bold">80</spam> – HTTP (Web Browsing)</li>
            <li className='content-1'><spam className="font-bold">443</spam> – HTTPS (Secure Web Browsing)</li>
            <li className='content-1'><spam className="font-bold">22</spam> – SSH (Secure Shell for remote access)</li>
            <li className='content-1'><spam className="font-bold">21</spam> – FTP (File Transfer Protocol)</li>
            <li className='content-1'><spam className="font-bold">53</spam> – DNS (Domain Name System)</li>

            </ul>

            <p className="head-1">What is Hydra</p>
            <p className="content-1">Hydra is a fast and powerful password-cracking tool used for brute-force attacks on various network services. It automates login attempts using a list of usernames and passwords to find valid credentials.Hydra can target specific ports and services (e.g., SSH, FTP, HTTP, RDP) to test login credentials.</p>

            <p className="head-3">Syntax:</p>
            <TerminalView body={["hydra -L <username_list> -P <password_list> <target_IP> <service>"]} title={"bash"}/>
            <p className="head-1">Or</p>
            <TerminalView body={['hydra -l <single_username> -p <single_password> <target_IP> <service>']} title={"bash"}/>

            <p className="head-1">Options:</p>

            <p className="content-1"><span className='font-bold'>-l</span> → Single username</p>
            <p className="content-1"><span className='font-bold'>-L</span>→ File containing multiple usernames</p>
            <p className="content-1"><span className='font-bold'>-P</span>→ File containing passwords</p>
            <p className="content-1"><span className='font-bold'>-P</span>→ Single password</p>
            <p className="content-1"><span className='font-bold'>-t</span>→ Number of parallel threads (e.g., -t 4)</p>
            <p className="content-1"><span className='font-bold'>-v</span>→ Verbose mode (shows every attempt)</p>
            <p className="content-1"><span className='font-bold'>-f</span>→ Stops after the first successful login</p>

            <p className="head-1">Install Hydra</p>
              <TerminalView body={["sudo apt-get install hydra"]} title={"bash"}/>

            <p className="head-1">How to do tasks:</p>
            
            <p className="content-1">The tasks below is created in a way that you need to crack the passwords of different ports of a online computer server hosted in the 
              cloud. Read the task instructions carefully and use google or other resourses to try find the correct syntax to do the task. Hints to do the task is given but try 
              to complete it without using them for better learing experience
  
            </p>

            <div className='task'>
              <p className="head-1">Task 1: Find usename of a SSH port</p>
              <p className="head-3">Task Instructions</p>
              <ul className='list-disc pl-5 content-1'>
                <li>Download below file of 30 usernames.</li>
                   <a className='bg-sky-500 px-3 rounded-xl text-white py-2 ' href={usernames} download="usernames.txt">Download</a>
                
                <li>Find who uses the password "butterfly" in the SSH port of the ip 10.0.01203</li>
                
              </ul>
              <TerminalHint body={"hydra -"}/>
            </div>

            <div className='task'>
              <p className="head-1">Task 2: Find password of a SSH port</p>
              <p className="head-3">Task Instructions</p>
              <ul className='list-disc pl-5 content-1'>
                <li>Download below file of 50 passwords</li>
                   <a className='bg-sky-500 px-3 rounded-xl text-white py-2 ' href={passwords} download="passwords.txt">Download</a>
                
                <li>Find the password of the user "abel" in the SSH port of ip 10.0.01203</li>
                
              </ul>
              <TerminalHint body={"hydra -"}/>
            </div>

            <div className='task'>
              <p className="head-1">Task 3: Find password and username of a FTP port</p>
              <p className="head-3">Task Instructions</p>
              <ul className='list-disc pl-5 content-1'>
                <li>Use the passwords and usernames file for this task.</li>          
                <li>Find the username and password of the user in the FTP port of ip 10.0.01203</li>
                
              </ul>
              <TerminalHint body={"hydra -"}/>
            </div>

            <div className='task'>
              <p className="head-1">Task 4: Find password of a MYSQL port</p>
              <p className="head-3">Task Instructions</p>
              <ul className='list-disc pl-5 content-1'>
                <li>Use the passwords file for this task.</li>          
                <li>Find the password of the user "rony" in the SSH port of ip 10.0.01203</li>
                
              </ul>
              <TerminalHint body={"hydra -"}/>
            </div>




            
            


         
         
         
          </div>

        </motion.div>



      </div>
    </div>
  )
}

export default Module4
