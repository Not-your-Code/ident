import React from 'react'
import './SecondSegment.css'
export default function Second() {
    return (
        <div className='Segment'>
            <div className='container mainCont'>

               <div className='left'>
                    <div className='TitleS'>
                        Improving the Quality of Your Life through Better Health
                    </div>
                    <div id='subTitleS'>
                       Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and to be the first and best choice for healthcare.
                    </div>
                    <div id='Stext'>
                      We will work with you to develop individualised care plans, including <br/> management of chronic diseases. We are committed to being the region’s premier healthcare network providing patient centered care that inspires clinical and service excellence.
                    </div>
                    <div>
                      <button className="MeetBtn">Meet Our Doctors</button>
                   </div>
               
               </div>
               <div className='right'>    
                <img src={require('../Assests/sliders/video.jpg')} id="img"/>
                
            </div>
         </div>
      </div>
    )
}
