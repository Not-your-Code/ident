import React from 'react'
import Navbar from '../Navbar/Navbar'
import TopContent from '../Navbar/TopContent/TopContent'

import './Home.css'
import Introduction from '../FirstSegement/Introduction'
import Second from '../SecondSegment/Second'
import Providing from '../ThidSegment/Providing'


export default function Home() {
  return (
    <div className='container-auto home d-flex flex-column'>
      <div>
        <TopContent />
        <Navbar />
      </div>
      <div className='FirstSegement'>
        <Introduction />
      </div>
      <div className='SecondSegment'>
        <Second />
      </div>
      <div className='ThirdSegment'>
        <Providing />
      </div>
    </div>

  )
}
