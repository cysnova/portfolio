import React,{useContext} from 'react'
import styled from "styled-components";
import ThemeContext from '../../context/ThemeContext';
import { Link } from "react-router-dom"
import Logo from '../../assets/logo.png'
import {HiMoon} from 'react-icons/hi'
import {CgSun} from 'react-icons/cg'



const Nav = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
  color: ${props => props.theme === "light" ? "#333" : "#fff" };
  font-size:17px;
  text-shadow:${props => props.theme === "light"? "none":"0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00"};
  

  ul {
    display: flex;
    align-items:center;
    margin-left: auto;
    list-style: none;
    margin-right: 130px;
    gap: 50px;
  }

  button {
    width:30px;
    height:32px;
    font-size:1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: ${props => props.theme === "light" ? "grey" : "#fff"};
    color: ${props => props.theme === "light" ? "#fff" : "#333" };
    cursor: pointer;
    align-self: center;
    border-radius:40%;
    transition: box-shadow 300ms ease-out;
    
  }

  button:hover {
    box-shadow: inset -77px -72px 0px 0px rgba(235, 167, 30, 0.82);
  }
  
  a {
    text-decoration:none;
    color: ${props => props.theme === "light" ? "#333" : "#fff" };
    transition: border 600ms ease-out 139ms, border-radius 600ms ease-out 139ms;
  }
  
  a:hover {
    border-bottom: 5px solid rgba(156, 214, 101, 1);
    border-top: 5px solid rgba(156, 214, 101, 1);
    border-radius: 5px;
  }
  
  img{
    width:150px;
    margin-left:120px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    
    padding:0;
    margin-right:auto;
    width:101%;
    
    
   
  
  
    
    
    ul {
        margin: 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;

        &>:first-child{
          margin-top:30px;

        }
      }
    
  
    button {
      align-items: center;
      margin:0;
    }

    a{
      flex-direction: column;
    }
  
    img{
      padding:0;
      margin:0;
     
    }
  }
`;


const NavBar = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
  
    <Nav theme={theme}>
     <img src={Logo} alt="logo of Nova" />
      <ul>
        <li>
          <Link to ={"/"}>Home</Link>
        </li>
        <li>
          <Link to ={"/about"}>About</Link>
        </li>
        <li>
          <Link to ={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link to ={"/contact"}>Contact</Link>
        </li>
        <button onClick={toggleTheme}>{theme === 'light'? <HiMoon/> :<CgSun/>}</button>
      </ul>
      
    </Nav>
  )
}


export default NavBar