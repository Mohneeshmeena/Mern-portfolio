import React from 'react'
import Mcertificate from './Mcertificates'
import Mabout from './Mabout'
import Mproject from './Mproject'
import Mdetails from './Mdetails'
import Navbar from '../navbar'
import MMain from './MMain'


const Practise = () => {
  return (

    <div className='mprac'>


      <div className='m7'><Navbar /></div>
      <div className='seprator'>.</div>
      <div className='m8'><MMain /></div>
      <div className='seprator'>.</div>

      <div className='m2'><Mabout /></div>
      <div className='seprator'>.</div>
      <div className='m4'><Mdetails /></div>
      <div className='seprator'>.</div>
      <div className='m3'><Mproject /></div>
      <div className='m1'><Mcertificate /></div>
      <div className='seprator'>.</div>


    </div>
  )
}

export default Practise