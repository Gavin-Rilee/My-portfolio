import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//Images
import project1 from '../img/project1.jpg';
import project2 from '../img/project2.jpg';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';
//Animations
import {motion} from 'framer-motion';
import { pageAnimation } from '../animation';




const OurWork = () => {
  return (
    <Work style={{ background: "#fff"}} exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Project>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/project1">
        <img src={project1} alt="project1" />
        </Link>

      </Project>
      <Project>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/project4">
        <img src={project4} alt="project4" />
        </Link>

      </Project>
      <Project>
        <h2>Good times</h2>
        <div className="line"></div>
        <Link to="/work/project3">
        <img src={project3} alt="project3" />
        </Link>

      </Project>
    </Work>
  )
}

const Work = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
h2{
  padding: 1rem 0rem;

} 
`
const Project = styled.div`
padding-bottom: 10rem;
.line{
  height:0.5rem;
  background: #cccccc;
  margin-bottom:3rem;
}
img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
  
}
`
export default OurWork
