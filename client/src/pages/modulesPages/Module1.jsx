import React from 'react'
import TopHeaderBar from '../../components/TopHeaderBar'
import Thumbnail from '../../assets/Task Thumbnails/task1.png'
import {motion} from 'framer-motion'
import './module.css'
import TerminalView from '../../components/TerminalView'


function Module1() {
  return (
    <div className='flex flex-col items-center'>
      <TopHeaderBar/>
      <div className='w-3/4  flex flex-col items-center'>
        <motion.div 
          initial={{
            x:-200,
            opacity:0
          }}
          animate={{
            x:0,opacity:1
          }}
          className={ `overflow-hidden w-full h-64 flex justify-center items-center bg-center bg-cover rounded-b-3xl shadow-2xl`} 
          style={{backgroundImage: `url(${Thumbnail})`}}>
            <div className='w-full h-full flex  bg-black bg-opacity-55 '>
              <h1 className='text-white text-2xl font-bold mt-2 ml-3'>Module: 01</h1>
              <div className='h-full flex items-center'>
               <h1 className='text-white text-5xl font-bold '>Setting Up Kali Linux in a Virtual Machine</h1>

              </div>
            </div>
          
        </motion.div>
        <motion.div
          initial={{
            x:200,
            opacity:0
          }}
          animate={{
            x:0,
            opacity:1
          }}
        className='w-3/4 '>
          <h1 className='head-1'>&#8226; Why Kali Linux is Important in Cyber Security?</h1>
          <p className='head-3'>
          Kali comes with 600+ penetration testing tools, including:</p>
          <ul className='list-disc pl-5 content-1'>
            <li>            Nmap (Network scanning)
            </li>
            <li>            Metasploit (Exploitation framework)
            </li>
            <li>            Wireshark (Packet analysis)
            </li>
            <li>            John the Ripper (Password cracking)
            </li>
            <li>            Burp Suite (Web security testing)
            </li>
          </ul>
          <p className='head-3'>
          Security & Anonymity</p>
          <ul className='list-disc pl-5 content-1'>
            <li>           Live Boot Option: Run Kali without installing it (USB or VM).

            </li>
            <li>           Tor & ProxyChains: Helps in anonymous browsing.

            </li>
            <li>            Forensics Mode: Ensures minimal footprint on a target system.

            </li>
           
          </ul>

          <p className='head-3'>
          Best for Penetration Testing</p>
          <ul className='list-disc pl-5 content-1'>
            <li>            
            Kali is optimized for Red Teaming, Vulnerability Assessments, and Exploit Development.
            </li>
            <li>            
            Used by ethical hackers to simulate cyber attacks and test security defenses.
            </li>
           
          </ul>
          <p className='head-3'>
          And more...</p>

          <div className='w-full'>
          <p className='head-1'>&#8226; Installing Virtual Box</p>
          
          <p className='head-3'> Check if virtualization is enabled:</p>
          <ul className='list-disc pl-5 content-1'>
            <li>Windows: Open Task Manager → Go to Performance Tab → Look for "Virtualization: Enabled".</li>
            <li>Linux: Run in terminal:</li>
          </ul>
          <TerminalView title={"bash"} body={"lscpu | grep Virtualization"}/>
          <p className='content-1'>If enabled, you’ll see VT-x (Intel) or AMD-V (AMD).
          ⚠️ If Disabled: Enable it in BIOS (Restart → Press F2 / DEL → Find "Virtualization Technology" → Enable it).</p>

          <p className='head-1'>&#8226; Download & Install Virtualization Software</p>

          <ul className='list-disc pl-5 content-1'>
            <li >Download VirtualBox → <a href="https://www.virtualbox.org/" className='text-blue-500 underline'>VirtualBox Download.</a> 

            </li>
            <li>
            Run the installer (.exe for Windows, .deb for Linux).

            </li>
            <li>Follow the on-screen setup and complete the installation.

            </li>
          </ul>
          <p className='head-3'>
          Linux Users: Install VirtualBox via Terminal:
          </p>
          <TerminalView title={"bash"} body={"sudo apt install virtualbox -y "}/>


<div class="container">
    <h1 className='head-1'>&#8226; How to Install Kali Linux on a Virtual Machine</h1>

    <h2 className='head-3'>Step 1: Download Kali Linux ISO Image</h2>
    <p>Kali Linux offers ISO images for 32-bit, 64-bit, and ARM64 architectures. To download an ISO file:</p>
    <ul className='list-disc pl-5 content-1'>
        <li>Visit the <a href="https://www.kali.org/get-kali/" target="_blank">official Kali Linux website</a>.</li>
        <li>Select the system architecture of your host OS.</li>
        <li>Click the download button on the installer card.</li>
    </ul>

    <h2 className='head-3'>Step 2: Create Kali Linux VirtualBox Instance</h2>
    <p>Follow these steps to set up a Kali Linux VM in VirtualBox:</p>
    <ul className='list-disc pl-5 content-1'>
        <li>Launch VirtualBox Manager and click the <strong>New</strong> button.</li>
        <li>Specify a name for the VM and provide the path to the ISO image.</li>
        <li>Allocate memory (at least <strong>2GB RAM</strong>) and virtual CPUs (minimum <strong>1 CPU</strong>).</li>
        <li>Create a virtual hard disk (at least <strong>25GB</strong>).</li>
        <li>Review the setup and click <strong>Finish</strong>.</li>
    </ul>

    <h2 className='head-3'>Step 3: Configure Virtual Machine Settings</h2>
    <ul className='list-disc pl-5 content-1'>
        <li>Click on the Kali Linux VM and select <strong>Settings</strong>.</li>
        <li>In the <strong>General → Advanced</strong> tab, enable <strong>Bidirectional Clipboard</strong>.</li>
        <li>Go to <strong>Network</strong> and change "Attached to" to <strong>Bridged Adapter</strong>.</li>
        <li>Click <strong>Start</strong> to launch the VM.</li>
    </ul>

    <h2 className='head-3'>Step 4: Install Kali Linux</h2>
    <p>Follow the on-screen instructions to install Kali Linux:</p>
    <ul className='list-disc pl-5 content-1'>
        <li>Select <strong>Graphical Install</strong>.</li>
        <li>Choose language, country, and keyboard layout.</li>
        <li>Set hostname, domain (optional), and create a user account with a strong password.</li>
        <li>Partition the hard disk using <strong>Guided - Use entire disk</strong>.</li>
        <li>Select default software components and install the GRUB bootloader.</li>
        <li>After installation, reboot the VM and log in.</li>
    </ul>

    <h2 className='head-3'>Step 5: Running a Pre-Built Kali Linux VM</h2>
    <p>You can also use a pre-built Kali VM:</p>
    <ul className='list-disc pl-5 content-1'>
        <li>Download a pre-built VM from the <a href="https://www.kali.org/get-kali/#kali-virtual-machines" target="_blank">Kali Linux VM page</a>.</li>
        <li>Extract the <span class="highlight">.7z</span> file and import it into VirtualBox.</li>
        <li>Start the VM and log in with:
            <ul>
                <li>Username: <span class="highlight">kali</span></li>
                <li>Password: <span class="highlight">kali</span></li>
            </ul>
        </li>
    </ul>

    <h2 className='head-3'>Kali Linux is Now Ready!</h2>
    <p className='head-3'>You have successfully installed Kali Linux on a Virtual Machine.</p>
</div>








        </div>

          
        </motion.div>
        
        
      </div>
     
     
    </div>
  )
}

export default Module1
