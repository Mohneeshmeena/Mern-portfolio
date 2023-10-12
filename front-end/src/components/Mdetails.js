import React from 'react'
import './Mdetails.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Name from './Subdetails/Name'




const Mdetails = () => {
    const [isanimate1, setisanimate1] = useState(false)
    const [isanimate2, setisanimate2] = useState(false)
    const [isanimate3, setisanimate3] = useState(false)
    const [isanimate4, setisanimate4] = useState(false)
    const [isanimate5, setisanimate5] = useState(false)
    const [isanimate6, setisanimate6] = useState(false)
    const [isanimate7, setisanimate7] = useState(false)






    
    return (

        
        <div className='main'>

            <div className='containermabout1'>
                <div class="btn-toolbar" className='mabouttoolbar' role="toolbar" aria-label="Toolbar with button groups">
                    <div className="maboutbuttons" role="group" aria-label="First group">
                        <button type="button" className='BUTTONMABOUT' onClick={() => setisanimate1(!isanimate1)} >Name</button>
                        <button type="button" className='BUTTONMABOUT' onClick={() => setisanimate2(!isanimate2)}>HomeTown</button>
                        <button type="button" className='BUTTONMABOUT' onClick={() => setisanimate3(!isanimate3)}>Education</button>
                        <button type="button" className='BUTTONMABOUT' onClick={() => setisanimate4(!isanimate4)}>Hobbies</button>
                        <button type="button" className='BUTTONMABOUT' onClick={() => setisanimate5(!isanimate5)}>Strength</button>
                        <button type="button" className='BUTTONMABOUT' onClick={() => setisanimate6(!isanimate6)}>Social</button>
                        <button type="button" className='BUTTONMABOUT' onClick={() => setisanimate7(!isanimate7)}>Skills</button>

                    </div>
                </div>
                <div className='maboutanimebox'>
                    <motion.div className='TITLEBOXMABOUT'

                        animate={{
                            x: isanimate1 ? 10 : 0,
                            y: isanimate1 ? 5 : 0,
                            scale: isanimate1 ? 1 : 0,
                        }}
                        initial={{
                            scale: isanimate1 ? 0.1 : 0,

                        }}
                        transition={{
                            type: 'spring',
                            damping: 300,
                            duration: 15

                        }}     >
                        <h1><Name /></h1>
                    </motion.div>
                    <motion.div className='TITLEBOXMABOUT'
                        style={{
                            marginBottom: 5

                        }}

                        animate={{
                            x: isanimate2 ? 10 : 0,
                            y: isanimate2 ? 5 : 0,

                            opacity: isanimate2 ? 1 : 0
                        }}
                        initial={{
                            opacity: isanimate2 ? 0.5 : 0
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 1000,
                            duration: 2
                        }}     >
                        <h1 className='hometown'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;I am from Sehore.</h1>
                    </motion.div>

                    <motion.div className='TITLEBOXMABOUT'
                        style={{
                            margin: 5
                        }}

                        animate={{
                            x: isanimate3 ? 10 : 0,
                            y: isanimate3 ? 5 : 0,

                            opacity: isanimate3 ? 1 : 0,


                        }}
                        initial={{
                            opacity: isanimate3 ? 0.5 : 0
                        }}
                        transition={{
                            type: 'spring',
                            damping: 300,
                            duration: 15

                        }}



                    >
                        <div className='education'>
                            <h1 className='etext'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 10th | MP BOARD | 72.44 % (2018)</h1>
                            <h1 className='etext'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;12th | MP BOARD | 79.44 % (2020)</h1>
                            <h1 className='etext'>B.Tech. – Computer Science & Engineering | CGPA: 7.25 / 10 (2020-2024)</h1>

                        </div>
                    </motion.div>

                    <motion.div className='TITLEBOXMABOUT'
                        style={{
                            margin: 5
                        }}

                        animate={{
                            x: isanimate4 ? 10 : 0,
                            y: isanimate4 ? 5 : 0,

                            opacity: isanimate4 ? 1 : 0
                        }}
                        initial={{
                            opacity: isanimate4 ? 0.2 : 0
                        }}
                        transition={{
                            type: 'spring',
                            damping: 300,
                            duration: 15

                        }}

                        whileHover={{
                            scale: 2
                        }}
                        whileTap={{
                            scale: 0.9
                        }}


                    >
                        <div className='hobbies'><h1 className='htext'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Cooking|Gaming|Sports</h1></div>
                    </motion.div>

                    <motion.div className='TITLEBOXMABOUT'
                        style={{
                            margin: 5
                        }}

                        animate={{
                            x: isanimate5 ? 10 : 0,
                            y: isanimate5 ? 5 : 0,

                            opacity: isanimate5 ? 1 : 0
                        }}
                        initial={{
                            opacity: isanimate5 ? 0.5 : 0
                        }}
                        transition={{
                            type: 'spring',
                            damping: 300,
                            duration: 15

                        }}     >
                        <div className='strength'><h1 className='stext'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Adaptive|Visionary</h1></div>
                    </motion.div>

                    <motion.div className='TITLEBOXMABOUT'
                        style={{
                            margin: 5
                        }}

                        animate={{
                            x: isanimate6 ? 10 : 0,
                            y: isanimate6 ? 5 : 0,

                            opacity: isanimate6 ? 1 : 0
                        }}
                        initial={{
                            opacity: isanimate6 ? 0.5 : 0
                        }}
                        transition={{
                            type: 'spring',
                            damping: 300,
                            duration: 15

                        }}     >
                        <div className='social'>
                            <a className='Socialtext' href='https://github.com/Mohneeshmeena/mernfoodbymeena'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;| Github | </a><br/>
                            <a className='Socialtext' href='https://www.linkedin.com/in/mohneesh-meena-636087222/'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;| Linkedin |</a><br/>
                            <h1 className='Socialtext'> &emsp;&emsp;Gmail:Mohneeshmeena6267@gmail.com </h1><br/>
                        </div>
                    </motion.div>

                    <motion.div className='TITLEBOXMABOUT'
                        style={{
                            margin: 5
                        }}

                        animate={{
                            x: isanimate7 ? 10 : 0,
                            y: isanimate7 ? 5 : 0,

                            opacity: isanimate7 ? 1 : 0
                        }}
                        initial={{
                            opacity: isanimate7 ? 0.5 : 0
                        }}
                        transition={{
                            type: 'spring',
                            damping: 300,
                            duration: 15

                        }}     >
                        <div className='Skills'>
                            <h1 className='Skillstext'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;Web Devlopment<br/>
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Networking Essemtias<br/>
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Data Structures & C++</h1>
                        </div>
                    </motion.div>




                </div>
            </div>
        </div>
    )
}

export default Mdetails