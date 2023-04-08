import React, { useContext } from 'react'
import styled from "styled-components"
import ProfilePic from '../../assets/profile.jpg'

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-width: 350px;
  height: auto;
  border: 5px hidden #1C6EA4;
  border-radius: 40px 40px 40px 40px;
  box-shadow: 11px 16px 7px -2px #AFFFA1;
  
`;

const Hero = () => {
  return (
    <HeroContainer>
        <Img src={ProfilePic} alt="profile of Nova" />            
    </HeroContainer>
  )
}

export default Hero