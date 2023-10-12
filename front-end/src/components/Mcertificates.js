import React from 'react'
import './Mcertificates.scss'
import img1 from '../assets/certifications/1.PNG'
import img2 from '../assets/certifications/2.PNG'
import img3 from '../assets/certifications/3.PNG'
import img4 from '../assets/certifications/4.PNG'
import img5 from '../assets/certifications/5.PNG'
import img6 from '../assets/certifications/6.PNG'


const Mcertificate = () => {
  return (
    <div className='maincontainer'>
      <div className='subcontainer'><div className='certificatecontainer'><h1 className='certificatetitle'> 1:C++</h1><img className='imgbox' src={img1} alt='wait'></img></div></div>
      <div className='subcontainer'><div className='certificatecontainer'><h1 className='certificatetitle'> 2:Data Structures</h1><img className='imgbox' src={img2} alt='wait'></img></div></div>
      <div className='subcontainer'><div className='certificatecontainer'><h1 className='certificatetitle'> 3:Networking Essentials</h1><img className='imgbox' src={img3} alt='wait'></img></div></div>
      <div className='subcontainer'><div className='certificatecontainer'><h1 className='certificatetitle'> 4:Sql</h1><img className='imgbox' src={img4} alt='wait'></img></div></div>
      <div className='subcontainer'><div className='certificatecontainer'><h1 className='certificatetitle'> 5:WordPress</h1><img className='imgbox' src={img5} alt='wait'></img></div></div>
      <div className='subcontainer'><div className='certificatecontainer'><h1 className='certificatetitle'> 6:Basics of UI/UX</h1><img className='imgbox' src={img6} alt='wait'></img></div></div>

    </div>
  )
}

export default Mcertificate