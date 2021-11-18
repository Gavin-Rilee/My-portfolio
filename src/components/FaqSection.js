import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Introduction!">
          <div className="answer">
            <p>Hello! I'm Gavin Rilee, and I'm a Full-Stack Web Developer specializing in extraordinary web applications, APIs, databases, and more.</p>
            <p>
            Developing dynamic, reactive websites and applications is my passion, and I firmly believe that building websites that are not only functional, but beautiful, responsive, and engaging for the end-users should be priority #1.
            </p>
          </div>
        </Toggle>
        <Toggle title="What languages do you know?">
          <div className="answer">
            <p>

HTML, CSS, Tailwind, JavaScript, React, Redux, Node.js, Express, Python, SQL, and PostgreSQL are just a few of the languages and technologies I have in my digital toolbox, and I'm always open to talking shop, so feel free to message me to learn more about what I can do or even just to communicate on a more general basis. I'm always happy to meet new contacts!


            </p>
          </div>
        </Toggle>
        <Toggle title="Are you available to work on projects?">
          <div className="answer">
            <p>Yes I am!</p>
            <p>
              I'm currently only working at night briefly so feel free to reach out with any requests!
            </p>
          </div>
        </Toggle>
        <Toggle title="What are some of your hobbies?">
          <div className="answer">
            <p>
              I love to take walks with my Dauschund (his name is Snurch), I have been surfing and playing soccer for about 17 years.
              I am a die-hard DND and anime fan!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
