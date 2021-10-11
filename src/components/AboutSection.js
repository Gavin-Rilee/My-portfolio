import React from 'react';
import home1 from '../img/home1.png';
//Styled 
import styled from 'styled-components'
import { About, Descripton,Image,Hide } from './styles';


const AboutSection = () => {
    return (
        <About>
            <Descripton>
              <div className= 'title'>
                  <Hide>
                      <h2>I work to make</h2>
                  </Hide>
                  <Hide>
                      <h2>your <span>dreams</span> come </h2>
                  </Hide>
                  <Hide>
                      <h2>true.</h2>
                  </Hide>
                  <p> Contact me for any questions or ideas you want me to bring to life!</p>
                  <button>Contact Me</button>
              </div> 
              <Image>
                  <img src={home1} alt="front page maybe you" />
              </Image>
            </Descripton>
        </About>
    )
}


export default AboutSection
