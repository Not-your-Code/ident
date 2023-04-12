import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='footer'>
        <div className='container Cont'>
            <div className='FootRight'>
              <div id='image1'>
                <img src={require('../Assests/logo/logo-light.png')}/>
              </div>
              <div id='textFoot'>
              Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. 
              We hope you will allow us to care for you and strive to be the first
               and best choice for your family healthcare.
              </div>
              <div id='make'>
                <p>Make Appointment</p>
              </div>
            </div>
            <div className='FootMiddle'>
                <div className='Departments'>
                <label>Departments</label>
                    <ul>
                        <li>1  Clinic</li>
                        <li>2 Clinic</li>
                        <li>3 Clinic</li>
                    </ul>
                </div>
                <div className='Links'>
                <label>Links</label>
                    <ul>
                        <li>About us</li>
                        <li>Doctors</li>
                        <li>Clinic</li>
                    </ul>
                </div>
                </div>
                <div className='FootLeft'>
                  <div id="footCard">
                    card
                   </div>
                </div>
        </div>
    </div>
  )
}
