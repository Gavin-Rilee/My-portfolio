import React from "react";
import home1 from "../img/home1.png";
import { About, Descripton, Image, Hide } from "./styles";
//Framer Motion
import { motion } from "framer-motion";
// import { titleAnim, fade, photoAnim } from "../animation";
// import Wave from "./Wave"

const AboutSection = () => {
  return (
    <About>
      <Descripton>
        <motion.div className="title">
          <Hide>
            <motion.h2>I work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
          <p>
            {" "}
            Contact me for any questions or ideas you want me to bring to life!
          </p>
          <button>Contact Me</button>
        </motion.div>
        <Image>
          <img src={home1} alt="front page maybe you" />
        </Image>
      </Descripton>
    </About>
  );
};

export default AboutSection;
