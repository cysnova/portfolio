import React,{useState, useContext} from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext';

const FormContainer = styled.form`
    display:flex;
    flex-direction:column;
    gap:12px;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff" };
    border-radius:5px;
   
    
    @media screen and (max-width: 480px) {
        width: 100%;
        padding: 16px;
    }
`;

const Input = styled.input`
    display:block;
    width:100%; 
    text-indent:20px;
    height:50px;
    border-radius:5px;

`;

const Label = styled.label`
font-family: 'Raleway', sans-serif;

`;

const TextArea = styled.textarea`
    display:block;
    width:100%; 
    text-indent:20px;
    font-size:1rem;
    padding-top:10px;
    height:50px;
    border-radius:5px;
    outline: 2px solid black;

    ::placeholder {
        text-align: center;
        line-height: 20px;
`;

const Button = styled.button`
    font-family: 'Delicious Handrawn', cursive;
    font-size:25px;
    margin-top:20px;
    display:block;
    width:100%; 
    height:50px;
    border-radius:5px;
`;
const Form = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const[formInputs ,setFormInputs] = useState({
        name:"",
        email:"",
        message:""
    })
   
    
function handleInputs(event){
    const{value,name} =event.target;
    setFormInputs(prevForm =>{
        return {
            ...prevForm,
            [name]:value

        }
    })
}
  return (
    <FormContainer theme={theme}>
        <Label htmlFor ='name'>Name</Label>
        <Input 
            type='text' 
            name='name' 
            id='name'
            onChange={handleInputs}
            value={formInputs.name}
        />
        <Label htmlFor ='email'>Email</Label>
        <Input 
            type='text' 
            name='email' 
            id='email'
            onChange={handleInputs}
            value={formInputs.email}
        />
        <Label htmlFor ='message'>Message</Label>
        <TextArea
            name='message' 
            placeholder="Please leave me a message..."
            id='message'
            onChange={handleInputs}
            value={formInputs.message}
        />
        <Button>Submit</Button>
    </FormContainer>
  )
}

export default Form