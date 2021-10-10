import React from 'react';
import home1 from '../img/home1.png';

const AboutSection = () => {
    return (
        <div>
            <div className= 'description'>
              <div className= 'title'>
                  <div className= 'hide'>
                      <h2>I work to make</h2>
                  </div>
                  <div className= 'hide'>
                      <h2>your <span>dreams</span> come </h2>
                  </div>
                  <div className= 'hide'>
                      <h2>true.</h2>
                  </div>
                  <p> Contact me for any questions or ideas you want me to bring to life!</p>
                  <button>Contact Me</button>
              </div> 
              <div className= 'image'>
                  <img src={home1} alt="front page maybe you" />
              </div>
            </div>
        </div>
    )
}

export default AboutSection
