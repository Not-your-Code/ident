import React from 'react'
import Navbar from '../Navbar/Navbar'
import TopContent from '../Navbar/TopContent/TopContent'

import './Home.css'
import Introduction from '../Introduction/Introduction'
import Second from '../Second/Second'


export default function Home() {
  return (
    <div className='container-auto home d-flex flex-column'>
     
      <div>     
        <TopContent/>
  
        <Navbar/>   
        </div>

        <div className='Intro'>
          <Introduction/>
        </div>
        <div className='Second'>
          <Second />
        </div>
    </div>

  )
}
