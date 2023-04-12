import React from 'react'
import './FourthSegment.css'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function HealthCare() {
  return (
    <div className='health'>
         <div className='container healthCont'>
            <div className='Caretop'>
                    <div id="CareTitle">
                    <p>Caring For The Health Of You And Your Family</p>
                    </div>
                   
                <div className='CareLeft'>
                    <div id="CareSubtitle">
                    We Provide All Aspects Of Medical Practice For Your Whole Family!
                    </div>
                
                    <div className='CareRight'>
                         <div id='CareSub'>
                             We will work with you to develop individualised care plans, 
                             including management of chronic diseases. If we cannot assist,
                              we can provide referrals or advice about the type of practitioner you require. 
                             We treat all enquiries sensitively and in the strictest confidence.
                         </div>
                       <div id='Lists'>
                          <div id='ListRight'>
                              <div className='listItems'>
                               <label> <FontAwesomeIcon icon={faSquareCheck} style={{color: "#20c6ba",}} id="icons"/></label><text>Fracture & dislocation</text>
                               </div>
                               <div className='listItems'>
                               <label> <FontAwesomeIcon icon={faSquareCheck} style={{color: "#20c6ba",}} id="icons"/></label><text>Fracture & dislocation</text>
                               </div>
                          </div>
                        <div id='ListLeft'>
                            <div className='listItems'>
                            <label> <FontAwesomeIcon icon={faSquareCheck} style={{color: "#20c6ba",}} id="icons"/></label><text>Fracture & dislocation</text>
                            </div>
                            <div className='listItems'>
                            <label> <FontAwesomeIcon icon={faSquareCheck} style={{color: "#20c6ba",}} id="icons"/></label><text>Fracture & dislocation</text>
                            </div>
                            </div>
                    </div>
               </div>
               </div>
              
               </div>
            <div className='CareCard'>
                <div className='row gap-4'>
                    <div className='col CardCol'> Card 1</div>
                    <div className='col CardCol'> Card 2</div>

                    <div className='col CardCol card3'>Card 3</div>
                    <div className='col CardCol card4'> Card 4</div>
                 
                </div>
               </div>
           <div className='CareBottom'>
            <div id='CareHosImg'>
            <img src={require('../Assests/logo/alert.png')} id='image'/>
            </div>
            <div id="CareText">
                
                <div id='title1'>True HealthCare For Your Family</div>
                <div id='subTitle1'>
                Serve the community by improving the quality of life through better health. We have
                put protocols to protect our patients and staff while continuing to provide medically necessary care.
              </div>
             
            </div>
            <button id='btn'>new button</button>
           </div>
         </div>
    </div>
  )
}
