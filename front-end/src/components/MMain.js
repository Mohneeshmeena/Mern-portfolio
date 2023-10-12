import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from './AnimatedLetters'
import LogoTitle from '../assets/images/logo-s.png'
import img1 from '../assets/certifications/wave.png'
import Logo from './Logo'
import './MMain.scss'
import Sidebar from './Sidebar'
const MMain = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['M', 'o', 'h', 'n', 'e', 'e', 's','h']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]


  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  })

  return (
    <>

      <div className="container home-page">
        <Sidebar/>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / MERN Devloper / App Developer.</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
<img className='wave' src={img1}></img>
<img className='wave1' src={img1}></img>
<img className='wave2' src={img1}></img>
<div className='wavebase'></div> 
 
      <Loader type="pacman" />
    </>
  )
}

export default MMain
