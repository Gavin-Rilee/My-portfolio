import React from 'react';
import styled from 'styled-components'

const Nav = () => {
    return (
        <NavBar>
            <h1><a id='logo' href="#"></a>My Portfolio</h1>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
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

`

export default Nav
