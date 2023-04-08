import React, { useContext, useState } from 'react'
import styled from "styled-components"
import ThemeContext from '../../context/ThemeContext'
import Bio from '../../components/Bio/Bio'
import Form from '../../components/Form/Form'
import Social from '../../components/Social/Social'
import'../Contact/contact.css'


const ContactContainer = styled.div`
  font-family: 'Raleway', sans-serif;
  line-height:30px;
  background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
  color: ${props => props.theme === "light" ? "#333" : "#fff"};
  display:flex;
  justify-content:center;
  flex-direction: row;
  gap: 32px;
  height:80vh;

  @media (max-width: 768px) {
    font-size:20px;
    height:120vh;
    flex-direction: column;
    padding:22px;
    
    
  }
`;



const ContactColumn = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
 
  @media (max-width: 768px) {

    &:first-child{
       border-top: 5px solid transparent;
    }
  
  border-bottom: 5px solid transparent;
  border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
  border-image-slice: 1;
  
    
    
  }
  
`;

const FormWrapper = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    font-size:20px;
    flex-direction: column;
    padding:10px;
    width:90%
    
  `;


  const BioWrapper = styled.div`
  margin-top:70px;
  padding-left:20px;
  padding-right:70px;
  text-align: justify;
  font-family: 'Raleway', sans-serif;
  margin-bottom:20px;
 
`;


const Contact = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <ContactContainer theme={theme}>
      <ContactColumn>
        <BioWrapper>
        <Bio title={"Let's Connect!"} content={"Let's work together to bring your brand to the next level. I'm always excited to hear about new projects and offer my expertise to help you achieve your goals."} />
        </BioWrapper>
           <Social/>
      </ContactColumn>
      <ContactColumn>
        <FormWrapper>
          <Form/>
        </FormWrapper>
      </ContactColumn>
    </ContactContainer>
  )}


export default Contact