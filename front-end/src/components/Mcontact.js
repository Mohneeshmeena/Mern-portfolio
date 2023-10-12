import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from './AnimatedLetters'
import './Mcontact.scss'
import map from '../assets/certifications/map.PNG'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')



  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  })

  return (
    <div className='cmain'>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in IT opportunities - especially on ambitious
            projects. However, if you have any other vacancy
            , please to contact me using below form either.
          </p>

          <div className="contact-form">
            <li className='cp1'><h2 className='Mtext'> Monheesh Meena</h2></li>
            <li className='cp2'><h2 className='Mtext'>8602501925</h2></li>
            <li className='cp3'><h2 className='Mtext'>Whatsapp-8602501925<br />
              Gmail-Mohneeshmeena6267@gmail.com<br />
              Linkedin-<a href='https://www.linkedin.com/in/mohneesh-meena-636087222/'>My Profile</a><br />
              <br />

            </h2></li>
          </div>
        </div>
        <div className="info-map">
          Monheesh Meena,
          <br />
          Madhya Pradesh,
          <br />
          Sehore, 466001 <br />
          Shastri Colony <br />
          <br />
          <span>Monheeshmeena6267@gmail.com</span>
        </div>
      </div>
      <div className='map'><img src={map} alt='map' className='mapimg'></img></div>
      <Loader type="pacman" />
    </div>
  )
}

export default Contact
