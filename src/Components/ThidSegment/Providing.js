import React from 'react'
import'./Providing.css'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Providing() {
  return (
    <div className='provide'>
      <div className='container ThirdCont py-5'>
        <div className='backImg container-auto ContInfo'>
            <div id='ProvideTitle'>
             <p>Providing Care For The <br/> Sickest In Community.</p> 
            </div>
            <div id='leftInfo'>
                <div id='ProvideSub'>
                  <p>Medcity has been present in Europe since 1990, offering innovative solutions, specializing in
                       medical services for treatment of medical infrastructure. With over 100 professionals
                        actively participates in numerous initiatives aimed at creating sustainable change
                         for patients!</p>
                    <div id='buttons'>
                    <button id="btn">Book Appointment</button>
                    
                    </div>
                </div>
            </div>
        </div>
       <div className='Cards'>
        <div className='row gap-4'>
        <div className='col'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
           </div>
           <div className='col'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
           </div>
           <div className='col'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
           </div>
           <div className='col'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
           </div>
         
        </div>
        <div className='row gap-4'>
        <div className='col'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
           </div>
           <div className='col'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
           </div>
           <div className='col'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
           </div>
           <div className='col'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
           </div>
          </div>
       </div>
      </div>
       
    </div>
  )
}
