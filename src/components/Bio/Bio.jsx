import React,{useContext} from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'

const BioContainer = styled.div`
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    h3{
      margin-bottom:25px;
    }
`;
const Bio = ({title,content}) => {
    const {theme} = useContext(ThemeContext);
  return (
    
    <BioContainer theme ={theme}>
        <h3>{title}</h3>
        <p>{content}</p>
        
    </BioContainer>
  )
}

export default Bio