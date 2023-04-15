import React from 'react'
import Navbar from '../Navbar/Navbar'
import TopContent from '../Navbar/TopContent/TopContent'

import './Home.css'
import FirstSegment from '../FirstSegement/FirstSegment'
import SecondSegment from '../SecondSegment/SecondSegment'
import Providing from '../ThidSegment/Providing'
import FourthSegment from '../FourthSegment/FourthSegment'
import Footer from '../footer/Footer'
import FifthSegment from '../FifthSegment/FifthSegment'
import SixthSegment from '../SixthSegment/SixthSegment'

export default function Home() {
  return (
    <div className='container-auto home'>
      <div>
        <TopContent />
        <Navbar />
      </div>
      <div className='FirstSegement'>
        <FirstSegment />
      </div>
      <div className='SecondSegment'>
        <SecondSegment/>
      </div>
      <div className='ThirdSegment'>
        <Providing />
      </div>
       <div className='FourthSegment'>
        <FourthSegment />
      </div>
      <div className='FifthSegment'>
        <FifthSegment />
      </div>
      <div className='SixthSegment'>
        <SixthSegment />
      </div>
      
    </div>

  )
}
