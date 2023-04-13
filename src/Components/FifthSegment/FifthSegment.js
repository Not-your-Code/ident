import React from 'react'
import './FifthSegment.css'

export default function FifthSegment() {
  return (
    <div className='Meet'>
        <div className='container meet'>
            <div id='MeetTitle'>
                 <h1>Meet Our Doctors</h1>
                 <h3>Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.</h3>
            </div>
            <div id='Doctors'>
              <div className='CardDoctor Card0'>
                <div id='DoctorImg'>
                  <img src={require('../Assests/DoctorsImg/abhishek.png')} id='Doctor_img'/>
                </div>
                <div id='AboutDoctor'>
                  <h5>Dr Abhishek Ghosh</h5>
                  <p id='Doctor_post'>Chief Dentist & HOD</p>
                  <p id='Doctor_des'>Black diagnose and treat diseases of the urinary tract in both men and women.
                    He
                     also diagnose and treat anything involving the reproductive tract in men.</p>
                 <div id='linksDoctor'>
                    <button className='readBtn' > Read More </button>
                    <div id='links'>
                       <img src={require('../Assests/logo/facebook.png')} className='img1'/>
                       <img src={require('../Assests/logo/insta.png')} className='img2'/> 
                    </div>
                 </div>
                </div>
              </div>
              <div className='CardDoctor Card1'>
                <div id='DoctorImg'>
                  <img src={require('../Assests/DoctorsImg/abhishek.png')} id='Doctor_img'/>
                </div>
                <div id='AboutDoctor'>
                  <h5>Dr Abhishek Ghosh</h5>
                  <p id='Doctor_post'>Chief Dentist & HOD</p>
                  <p id='Doctor_des'>Black diagnose and treat diseases of the urinary tract in both men and women.
                    He
                     also diagnose and treat anything involving the reproductive tract in men.</p>
                 <div id='linksDoctor'>
                    <button className='readBtn' > Read More </button>
                    <div id='links'>
                       <img src={require('../Assests/logo/facebook.png')} className='img1'/>
                       <img src={require('../Assests/logo/insta.png')} className='img2'/> 
                    </div>
                 </div>
                </div>
              </div>
              <div className='CardDoctor Card2'>
                <div id='DoctorImg'>
                  <img src={require('../Assests/DoctorsImg/abhishek.png')} id='Doctor_img'/>
                </div>
                <div id='AboutDoctor'>
                  <h5>Dr Abhishek Ghosh</h5>
                  <p id='Doctor_post'>Chief Dentist & HOD</p>
                  <p id='Doctor_des'>Black diagnose and treat diseases of the urinary tract in both men and women.
                    He
                     also diagnose and treat anything involving the reproductive tract in men.</p>
                 <div id='linksDoctor'>
                    <button className='readBtn' > Read More </button>
                    <div id='links'>
                       <img src={require('../Assests/logo/facebook.png')} className='img1'/>
                       <img src={require('../Assests/logo/insta.png')} className='img2'/> 
                    </div>
                 </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
