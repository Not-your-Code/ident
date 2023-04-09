import React from 'react'
import './Second.css'
export default function Second() {
    return (
        <div className='container secondCont d-flex flex-coiumn flex-lg-row mt-5 gap-4'>
            <div className='left align-self-start mt-5 d-flex gap-5 flex-column '>
                <div className='TitleS'>
                    Improving the Quality of <br/> Your Life through Better  <br/>Health
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
            <div className='right align-self-end'>
                <img src={require('../Assests/sliders/video.jpg')}/>
            </div>
        </div>
    )
}
