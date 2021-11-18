import React from "react";
import home1 from "../img/me.png";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
 import Wave from "./Wave"

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>I work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            
            Contact me for any questions or ideas you want me to bring to life!
          </motion.p>
          <motion.button variants={fade}>Contact Me</motion.button>
        </motion.div>
        </Description>
        <Image>
          <motion.img variants={photoAnim} src={home1} alt="front page maybe you" />
        </Image>
      <Wave/>
    </About>
  );
};

export default AboutSection;
