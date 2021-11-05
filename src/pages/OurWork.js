import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import project1 from "../img/project1.jpg";
import project2 from "../img/project2.jpg";
import project3 from "../img/project3.png";
import project4 from "../img/project4.png";
//Animations
import { motion } from "framer-motion";
import { sliderContainer, slider, pageAnimation, fade, photoAnim, lineAnim } from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Project>
        <motion.h2 variants={fade}>Human Rights First</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/project1">
          <Hide>
            <motion.img variants={photoAnim} src={project1} alt="athlete" />
          </Hide>
        </Link>
      </Project>

      <Project ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>Encryptid project</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/project3">
          <img src={project3} alt="Encryptid" />
        </Link>
      </Project>

      <Project
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Starbucks clone</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/project4">
          <img src={project4} alt="Starbucks" />
        </Link>
      </Project>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;