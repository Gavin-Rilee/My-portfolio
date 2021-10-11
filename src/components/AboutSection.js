import React from 'react';
import home1 from '../img/home1.png';
//Styled 
import styled from 'styled-components'


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

//Styled components
const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: center;
padding: 5rem 10rem;
color: white;
;
`
const Descripton = styled.div`
flex: 1;
padding-right:5rem;
h2{
 font-weight:lighter;
}
`
const Image = styled.div`
flex: 1;
overflow: hidden;
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
`
const Hide = styled.div`
  overflow: hidden;
`
export default AboutSection
