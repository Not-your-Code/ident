import React from 'react'
import'./Providing.css'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Providing() {
  return (
    <div className='provide'>
      <div className='container ThirdCont'>
        <div className='backImg ContInfo'>
            <div id='ProvideTitle'>
             <p>Providing Care For The Sickest In Community.</p> 
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
        <div className='col ProvideCol'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
            <FontAwesomeIcon icon={faUserDoctor}  style={{color: "#80ffbd"}} className='icon-background'/>
           </div>
           <div className='col ProvideCol'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
            <FontAwesomeIcon icon={faUserDoctor}  style={{color: "#80ffbd"}} className='icon-background'/>
           </div>
          
           <div className='col ProvideCol'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
            <FontAwesomeIcon icon={faUserDoctor}  style={{color: "#80ffbd"}} className='icon-background'/>
           </div>
          
           <div className='col ProvideCol'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
            <FontAwesomeIcon icon={faUserDoctor}  style={{color: "#80ffbd"}} className='icon-background'/>
           </div>
          
         
         
        </div>
        <div className='row gap-4 row2'>
        <div className='col ProvideCol'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
            <FontAwesomeIcon icon={faUserDoctor}  style={{color: "#80ffbd"}} className='icon-background'/>
           </div>
           <div className='col ProvideCol'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
            <FontAwesomeIcon icon={faUserDoctor}  style={{color: "#80ffbd"}} className='icon-background'/>
           </div>
          
           <div className='col ProvideCol'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
            <FontAwesomeIcon icon={faUserDoctor}  style={{color: "#80ffbd"}} className='icon-background'/>
           </div>
          
           <div className='col ProvideCol'>
           <FontAwesomeIcon icon={faUserDoctor} size="2xl" style={{color: "#80ffbd",}} className='icon'/>
           <p className='CardText'>Medical Advices & <br/>
            Checkups</p>
            <FontAwesomeIcon icon={faUserDoctor}  style={{color: "#80ffbd"}} className='icon-background'/>
           </div>
          
         
         
        </div>

       </div>
       <div className='Providetext'>
        <p> Serve the community by improving the quality of life through better health.
           We have put protocols to protect our patients and  staff while continuing to provide medically necessary care
          
           </p>
           <p id='contact'>Contact For More </p>
       </div>
      </div>
       
    </div>
  )
}
