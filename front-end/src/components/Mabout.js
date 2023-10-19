import { useEffect, useState } from 'react'
import img2 from '../assets/certifications/donut.png'
import p1 from '../assets/certifications/—Pngtree—world space day alien rocket_3854477.png'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
//import img1 from '../../assets/certifications/circle.PNG'
import AnimatedLetters from './AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Mabout.scss'

import p from '../assets/certifications/html5-logo-31820.png'
import p2 from '../assets/certifications/html5-logo-31822.png'
import p3 from '../assets/certifications/javascript-39419.png'
import p4 from '../assets/certifications/pngwing.com (1).png'
import p5 from '../assets/certifications/pngwing.com (2).png'
import p6 from '../assets/certifications/pngwing.com (3).png'
import p7 from '../assets/certifications/pngwing.com.png'








const Mabout = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    })

    return (
        <div className='backm'>
            <div className="container">
                <div className="textzone">
                    <h1 className='listtext'>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a very ambitious front-end developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a family
                        person a sports fanatic,
                        Cooking enthusiast, and tech-obsessed!!!
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='skillarea'>
                <div className='skillcontainer'>
                    <div className='skillsub'>
                        <div className='skillanime'>
                            <div className='anime1'>
                                <img className='anime' src={img2} alt='wait'></img>
                                <h1 className='animetitle'>WEB DEVLOPMENT</h1>
                            </div>
                        </div>
                        <div className='skilldetail'>
                            <ul className='Listbox'>
                                <li><img src={p} alt='img' className='iconimg' /><h1 className='iconname'>Html</h1></li>
                                <li><img src={p2} alt='img' className='iconimg' /><h1 className='iconname'>Css</h1></li>
                                <li><img src={p3} alt='img' className='iconimg' /><h1 className='iconname'>Java script</h1></li>
                                <li><img src={p4} alt='img' className='iconimg' /><h1 className='iconname'>Mongodb</h1></li>
                                <li><img src={p5} alt='img' className='iconimg' /><h1 className='iconname'>React.js</h1></li>
                                <li><img src={p6} alt='img' className='iconimg' /><h1 className='iconname'>Express.js</h1></li>
                                <li><img src={p7} alt='img' className='iconimg' /><h1 className='iconname'>Node.js</h1></li>

                            </ul>
                        </div>

                    </div>

                </div>

                <div className='skillcontainer'>
                    <div className='skillsub'>
                        <div className='skillanime'>
                            <div className='anime1'>
                                <img className='anime' src={img2} alt='wait'></img>
                                <h1 className='animetitle'>ANDROID STUDIO</h1>
                            </div>
                        </div>
                        <div className='skilldetail'>
                            <ul className='Listbox'>
                                <li><img src={p1} alt='img' className='iconimg' /><h1 className='iconname'>Xml</h1></li>
                                <li><img src={p1} alt='img' className='iconimg' /><h1 className='iconname'>Java</h1></li>
                                <li><img src={p1} alt='img' className='iconimg' /><h1 className='iconname'>Firebase</h1></li>
                                <li><img src={p1} alt='img' className='iconimg' /><h1 className='iconname'>Android studio</h1></li>

                            </ul>
                        </div>

                    </div>

                </div>


                <div className='skillcontainer'>
                    <div className='skillsub'>
                        <div className='skillanime'>
                            <div className='anime1'>
                                <img className='anime' src={img2} alt='wait'></img>
                                <h1 className='animetitle'>NETWORKING</h1>
                            </div>
                        </div>
                        <div className='skilldetail'>
                            <ul className='Listbox'>
                                <li><img src={p1} alt='img' className='iconimg' /><h1 className='iconname'>Packet tracer</h1></li>
                                <li><img src={p1} alt='img' className='iconimg' /><h1 className='iconname'>Roters& Switch</h1></li>
                                <li><img src={p1} alt='img' className='iconimg' /><h1 className='iconname'>Cyber Attacks</h1></li>
                                <li><img src={p1} alt='img' className='iconimg' /><h1 className='iconname'>Config<br/>uration</h1></li>
                                <li><img src={p1} alt='img' className='iconimg' /><h1 className='iconname'>Network <h7>Cmd</h7></h1></li>

                            </ul>
                        </div>

                    </div>

                </div>




                <div className='skillcontainer'>
                    <div className='skillsub'>
                        <div className='skillanime'>
                            <div className='anime1'>
                                <img className='anime' src={img2} alt='wait'></img>
                                <h1 className='animetitle'>PROG-LANGUAGE</h1>
                            </div>
                        </div>
                        <div className='skilldetail'>
                            <ul className='Listbox'>
                                <li><img src={p1} alt='img' className='iconimg' /><h1 className='iconname'>C++</h1></li>
                                <li><img src={p1} alt='img' className='iconimg' /><h1 className='iconname'>Basic Python</h1></li>
                                <li><img src={p1} alt='img' className='iconimg' /><h1 className='iconname'>Basic Java</h1></li>
                                <li><img src={p1} alt='img' className='iconimg' /><h1 className='iconname'>Sql</h1></li>

                            </ul>
                        </div>

                    </div>

                </div>






















            </div>








            <Loader type="pacman" />
        </div>
    )
}

export default Mabout
