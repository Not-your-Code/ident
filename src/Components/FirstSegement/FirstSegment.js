import { useState, useEffect } from "react";
import './FirstSegment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTooth } from '@fortawesome/free-solid-svg-icons'


import backgroundImage1 from '../Assests/sliders/1.jpg';
import backgroundImage2 from '../Assests/sliders/2.jpg';


export default function Introduction() {

    const [backgroundImage, setBackgroundImage] = useState(backgroundImage1);
    const [IntroString, setIntroString] = useState("Best Care For Dental Health")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundImage(backgroundImage === backgroundImage1 ? backgroundImage2 : backgroundImage1);
            if (IntroString === "Best Care For Dental Health") {
                setIntroString("Vibrant Smile For Healthy Lifestyle")
            } else {
                setIntroString("Best Care For Dental Health")
            }

        }, 8000);

        return () => clearInterval(intervalId);
    }, [backgroundImage]);

    return (
        <>
           <div className="Introduction">
                <div className='container  intro' >
                    <div className="BodyIntro">
                        <div id="SubTitleDiv">
                            <p id="SubTitleIntro">The Best Medical and General Practise Care</p>
                        </div>
                        <div id="MainTitleDiv">
                            <p id="MainTitleIntro">{IntroString}</p>
                        </div>
                        <div id="TextDiv">
                            <p id="TextIntro">  The health and well-being of our patients and their health care team will
                                always be our priority, so we follow the best practices for cleanliness.
                            </p>
                        </div>
                        <div className="buttonsDiv">
                            <button className="services buttonIntro">Our Services</button>
                            <button className="aboutBtn buttonIntro">More About Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

{/* <div className="row ">
                    <div className="col">
                        <div class="aboutlist d-flex flex-row gap-5 justify-content-evenly">
                            <div className="left align-self-baseline justify-content-center">
                            <FontAwesomeIcon icon={faTooth} size="xl" style={{color: "#00f0c0",}} />
                            </div>
                            <div className="right d-flex flex-column justify-content-between">
                                <div id="AboutTitle">
                                    Implant Dentristry
                                </div>
                                <div id="Aboutbody">
                                    Dental implants are surgical fixtures placed in the jawbone, which then fuse with
                                    jawbone over a few months to take care of small    </div>
                                <div className="readmore align-self-center">
                                    Readmore
                                </div>
                            </div>
                        </div>
                    </div>     
                              
                   
                </div> */}
{/* <div className="bodyCard" >
                        <div className="card-body1">
                            <h5 className="card-title1">The Best Medical and General Practise Care !</h5>
                            <h6 className="card-subtitle">{IntroString}</h6>
                            <p className="text">
                                The health and well-being of our patients and their health care team will 
                                always be our priority, so we follow the best practices for cleanliness.
                            </p>
                            <div className="d-flex flex-row gap-5 justify-content-start">
                                <button className="services buttonIntro">Our Services</button>
                                <button className="aboutBtn buttonIntro">More About Us</button>
                            </div>
                        </div>
                    </div> */}