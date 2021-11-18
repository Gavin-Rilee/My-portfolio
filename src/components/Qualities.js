import React from 'react';
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/coding.png";
//styles
import { About, Description,Image } from '../styles';
import styled from 'styled-components'



const Qualities = () => {
    return (
        <Quality>
            <Description>
                <h2>High <span>quality</span>  skills</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt=""/>
                            <h3>Efficient</h3>
                        </div>
                        <p>I work on your timeline and make sure to get done when you need it</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt=""/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lead over 20 developers on one project with efficient speed and leadership</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt=""/>
                            <h3>Planning</h3>
                        </div>
                        <p>Adept planner using tools such as Figma, Trello, and Miro</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt=""/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Will work with anyone's budget!</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt ="Coding example" />
            </Image>
        </Quality>
    )
}


const Quality = styled(About)`
    h2{
        padding-bottom: 5rem;

    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`
const Cards = styled.div`
display: flex;
flex-wrap: wrap;
`
const Card = styled.div`
flex-basis: 20rem;
.icon{
display:flex;
align-items: center;

}
h3{
    margin-left: 1rem;
    background: white;
    color:black;
    padding: 1rem

}
`

export default Qualities