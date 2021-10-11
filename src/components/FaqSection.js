import React from 'react'
//Styled 
import styled from 'styled-components'
import { About, Descripton,Image,Hide } from './styles';

const FaqSection = () => {
    return (
        <Faq>
            <h2>More <span>information</span> about me!</h2>
            <div className="question">
                <h4>About me?</h4>
                <div className="answer">
                    <p>Hello! I'm Gavin Rilee, and I'm a Full-Stack Web Developer specializing in extraordinary web applications, APIs, databases, and more.</p>

<p>Developing dynamic, reactive websites and applications is my passion, and I firmly believe that building websites that are not only functional, but beautiful, responsive, and engaging for the end-users should be priority #1.</p>

<p>HTML, CSS, Tailwind, JavaScript, React, Redux, Node.js, Express, Python, SQL, and PostgreSQL are just a few of the languages and technologies I have in my digital toolbox, and I'm always open to talking shop, so feel free to message me to learn more about what I can do or even just to communicate on a more general basis. I'm always happy to meet new contacts!</p>

<p>Thanks for reading, I look forward to talking to you soon!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What school did you go to?</h4>
                <div className="answer">
                    <p>Lambda!!!!!!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Have you worked on any projects since graduating?</h4>
                <div className="answer">
                    <p>Currently I have 3 clients I am producing products for.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What do you love outside of coding?</h4>
                <div className="answer">
                    <p>I love my dachshund, hiking on various terrains and exploring new trails, surfing, watching anime and going to conventions and one of my newest hobbies cosplay!</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}

const Faq = styled(About)`
display:block;
span{
    display:block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background:#cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width:100%;
}
.question{
    padding:3rem 0rem;
    cursor:pointer;
}
.answer{
    padding:2rem 0rem;
    p{
    padding:1rem 0rem;    
    }
}


`

export default FaqSection
