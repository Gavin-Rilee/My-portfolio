import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <NavBar>
            <h1><Link id='logo' to="/"></Link>My Portfolio</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/work">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>    
        </NavBar>
    )
}

const NavBar = styled.nav`
min-height: 10vh; 
display:flex; 
margin: auto;
justify-content:space-between;
align-items:center;
padding: 1rem 10rem;
background-color: #282828;
a{
    color:white;
    text-decoration:none;
}
ul{
    display:flex;
    list-style: none;

}
h1{
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    color: white;
  }
  li{
      padding-left: 10rem;
      position: relative;
  }

`;

export default Nav
