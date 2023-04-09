import React from 'react'
import './TopContent.css'
export default function TopContent() {
  return (
    <div className='container-fuild  d-none d-lg-flex flex-row align-items-center justify-content-between top'>
       <p id='title'>  Our Clinic sees over 1000 patient every month
   </p>
               
        <div className='info d-flex align-items-center justify-content-end w-50'>
              <span>
                  <p className='infos'>Emergency Line: (002) 01061245741</p>
              </span>
              <span>
                  <p className='infos'>Location: new york </p>
              </span>
              <span>
                  <p className='infos'>Mon-Fri: 8:00am - 7:00pm</p>
              </span>

          </div>
    </div>
  )
}
