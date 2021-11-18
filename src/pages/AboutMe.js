import React from 'react'
//Page components
import AboutSection from '../components/AboutSection';
import Qualities from '../components/Qualities';
import FaqSection from '../components/FaqSection';
import ScrollTop from '../components/ScrollTop';
//Animations
import {motion} from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutMe = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
    <AboutSection/>
    <Qualities/>
    <FaqSection/>
    <ScrollTop/>
      </motion.div>
  )
}

export default AboutMe
