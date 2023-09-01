import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutContainer = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#333')};
  color: ${(props) => (props.theme === 'light' ? '#333' : '#fff')};
  width: 100%;
  padding: 0;
  height: 82vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    padding-top: 60px;

    border-top: 5px solid transparent;
    border-image: linear-gradient(
      to bottom right,
      #b827fc 0%,
      #2c90fc 25%,
      #b8fd33 50%,
      #fec837 75%,
      #fd1892 100%
    );
    border-image-slice: 1;
  }
`;

const AboutText = styled.p`
  margin-top: 100px;
  font-family: 'Delicious Handrawn', cursive;
  white-space: pre-line;
  word-spacing: 0.5em;
  font-family: 'Delicious Handrawn', cursive;
  font-size: 2rem;
  letter-spacing: 3px;
  padding: 1rem;
`;

const ButtonLink = styled.a`
  text-decoration: none;
`;

const ButtonStyle = styled.div`
  font-family: 'Delicious Handrawn', cursive;
  display: inline-block;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-decoration: none;
  font-size: 1.2rem;
  margin-top: 20px;
  height: auto;
  padding: 1em 2em;
  color: ${(props) => (props.theme === 'light' ? '#333' : '#fff')};
  border: 5px solid transparent;
  border-image: linear-gradient(
    to bottom right,
    #b827fc 0%,
    #2c90fc 25%,
    #b8fd33 50%,
    #fec837 75%,
    #fd1892 100%
  );
  border-image-slice: 1;

  transition: 4s;
  text-align: center;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: -1.5em;
    z-index: -1;
    width: 200%;
    aspect-ratio: 1;
    border: none;
    border-radius: 40%;
    background-color: rgba(0, 0, 255, 0.25);
    transition: 4s;
  }

  &:before {
    left: -80%;
    transform: translate3d(0, 5em, 0) rotate(-340deg);
  }

  &:after {
    right: -80%;
    transform: translate3d(0, 5em, 0) rotate(390deg);
  }

  &:hover,
  &:focus {
    color: white;
    background-color: lightblue;
    cursor: pointer;
  }

  &:hover:before,
  &:focus:before,
  &:hover:after,
  &:focus:after {
    transform: none;
    background-color: rgba(0, 0, 255, 0.75);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const About = () => {
  const { theme } = useContext(ThemeContext);
  const [displayText, setDisplayText] = useState('');
  const fullText =
    'Hello, my name is Nova.\nI am a web developer, based in Vancouver.'; // Use \n to create a new line

  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 100);
      }
    };

    typeText();
  }, []);

  return (
    <AboutContainer theme={theme}>
      <AboutText>{displayText}</AboutText>

      <ButtonLink href="https://dev.to/cysnova/about-nova-1le8">
        <ButtonStyle theme={theme}>˗ˏˋ Learn More ´ˎ˗</ButtonStyle>
      </ButtonLink>
    </AboutContainer>
  );
};

export default About;
