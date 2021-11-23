import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {ProjectState} from '../ProjectState';

//Animations
import {motion} from 'framer-motion';
import { pageAnimation } from '../animation';

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    // const [projects, setProjects] = useState(ProjectState)
    const [project, setProject] = useState(null)

    //useEffect
    useEffect(() => {
        const currentProject = ProjectState.filter((stateProject) => stateProject.url === url);
        setProject(currentProject[0]);

    },[url])

    return (
        <>
        {project && (
        <Details exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <Headline>
                <h2>{project.title}</h2>
                <img src={project.mainImg} alt="project1"/>
            </Headline>
            <Awards>
                {project.awards.map((award) => (
                    <Award title={award.title}  description={award.description} link={award.link} key={award.title}/>
                )

            )}
            </Awards>
            <ImageDisplay>
                <img src={project.secondaryImg} alt="project"></img>
            </ImageDisplay>
        </Details>
        )}
        </>
    )
};

const Details = styled(motion.div)`
color:white;
`
const Headline = styled.div`
min-height:90vh;
padding-top:20vh;
position:relative;
h2{
    position:absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`
const Awards = styled.div`
min-height:80vh;
display:flex;
margin: 5rem 10rem 0;
align-items: center;
justify-content: space-around;
@media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`

const AwardStyle = styled.div`
padding: 5rem;
h3{
    font-size: 2rem;
}
.line{
    width:100%;
    background: #23d997;
    height: 0.5rem;
    margin:1rem 0rem
}
p{
    padding:2rem 0rem
}
`
const ImageDisplay = styled.div`
min-height: 50vh
img{
    width: 100%;
    height: 100vh;
    object-fit:cover;
}
`

// Award Component

const Award = ({title, description}) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default MovieDetail
