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
  @media screen and (max-width: 800px) {
    flex-direction: column;
   
  }

  @media screen and (max-width: 480px) {
    padding: 50px;
  }
`;



const ContactColumn = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
 
  
  
`;

const FormWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: auto;
  }
  
  @media screen and (max-width: 480px) {
    padding:10px;
    margin:10px;
  }
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