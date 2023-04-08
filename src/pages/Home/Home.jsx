import React, { useContext, useState } from 'react'
import styled from "styled-components"
import ThemeContext from '../../context/ThemeContext'
import Hero from '../../components/Hero/Hero';
import Bio from '../../components/Bio/Bio';
import Social from '../../components/Social/Social'



const HomeContainer = styled.div`

  background-color: ${props => props.theme === "light" ? "#fff" :"#333"};
  color:${props => props.theme === "light"?"#333":"#fff"};
  height: 80vh;
 

  @media (max-width: 768px) {
  
    height: 100vh;
 
  }

`;


const RowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    
    
  }
`;

const BioWrapper = styled.div`
font-family: 'Raleway', sans-serif;
font-size:2.5rem;
width: 100%;
max-width: 500px;
width:500px;
text-align:left;

@media (max-width: 768px) {
  text-align: center;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
  border-image-slice: 1;
  height: 300px;
  width:400px;
  margin: 30px;
  padding:30px;
 
  
}
`;

const TextWrapper = styled.div`
font-family: 'Delicious Handrawn', cursive;
font-size: 2rem;
text-shadow:${props => props.theme === "light"? "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c" : "none" };
letter-spacing:7px;
color: #FFFFFF;
background: #ece9e9;
text-shadow: ;
`;

const HeroWrapper = styled.div`
  margin-right:13px;

  @media (max-width: 768px) {
    height: auto;
    max-width: 100%;
    object-fit: cover;
  }
`;

const SocialWrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: 0px;
width:100px;
height:400px;
justify-content: flex-end;

@media (max-width: 768px) {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width:500px;
  margin:30px;
  height:90px;
}
`;


const Button=styled.button`

font-family: 'Delicious Handrawn', cursive;
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 10px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  font-size: 20px;
  padding: 0 18px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width:100px;

&:hover {
  background-color: #fff;
}

&:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {

    min-width: 120px;
    padding: 0 25px;
  

}
`;

const Home = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <HomeContainer theme={theme}>
      <RowWrapper >
        <BioWrapper theme={theme} >
          <Bio title={"Hello , I'm Nova"} />
          <TextWrapper  theme={theme}> 
            <Bio content={"Front-end Developer"} />
          </TextWrapper>
         <Button>Resume</Button>
        </BioWrapper>
        <HeroWrapper >
          <Hero/>
        </HeroWrapper>
        <SocialWrapper >
          <Social/>
        </SocialWrapper>
      </RowWrapper>
    </HomeContainer>
  )
}

export default Home