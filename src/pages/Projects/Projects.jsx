import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import ThemeContext from '../../context/ThemeContext'
import styled from "styled-components";
import Bio from '../../components/Bio/Bio'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination,PaginationItem,PaginationLink} from 'reactstrap';

import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";

const CardWrapper = styled.div`
  background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
  color: ${props => props.theme === "light" ? "#333" : "#fff"};
  border: 1px solid ${props => props.theme === "light" ? "#333" : "#fff"};
  width:500px;
  height:auto;
 
  
`;

const PagWrapper = styled.div`
display:flex;
justify-content:center;
background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
margin:auto;

`;

const PageWrapper = styled.div`

  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height:80vh;
  background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
  color: ${props => props.theme === "light" ? "#333" : "#fff"};
  text-align:center;
  font-family: 'Delicious Handrawn', cursive;
  font-size:2rem;
  letter-spacing:5px;
  padding:1rem;
    
    
`;

const ButtonStyle = styled.div`
  font-family: 'Delicious Handrawn', cursive;
  display: inline-block;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-decoration: none;
  font-size: 1.3rem;
  margin-top:15px;
  
  
  padding: 0.75em 1em;
  color: ${props => props.theme === "light" ? "#333" : "#fff"};
  border: 5px solid transparent;
  border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
  border-image-slice: 1;

  transition: 4s;
  text-align: center;

  &:before, &:after {
    content: "";
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

  &:hover, &:focus {
    color: white;
    background-color: lightblue;
  }

  &:hover:before, &:focus:before, &:hover:after, &:focus:after {
    transform: none;
    background-color: rgba(0, 0, 255, 0.75);
  }

`;


const Projects = () => {
  const {theme, toggleTheme } = useContext(ThemeContext);
  const [username, setUsername] = useState("cysnova");
  const [repositories, setRepositories] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const fetchRepositories = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      console.log(response);
      setRepositories(response.data);
      setDataFetched(true);
    } catch (error) {
      console.log(`Error fetching respositories: ${error}`);
    }
  };

  const renderPaginationItems = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(repositories.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map(number => (
      <PaginationItem key={number} active={currentPage === number}>
        <PaginationLink onClick={() => setCurrentPage(number)}>
          {number}
        </PaginationLink>
      </PaginationItem>
    ));
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = repositories.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PageWrapper theme={theme}>
    <ChakraProvider >
      {dataFetched ? (
  <>
    {repositories
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      .map((repo) => {
        return (
          <CardWrapper key={repo.id} theme={theme}>
            <Card
              theme={theme}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={repo.owner.avatar_url}
                alt="profile of Nova"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">Project's Name</Heading>
                  <Text py="2">{repo.name}</Text>
                </CardBody>
                <CardFooter>
                  <a href={repo.clone_url}>
                    <ButtonStyle variant="solid" colorScheme="blue">
                      Click here
                    </ButtonStyle>
                  </a>
                </CardFooter>
              </Stack>
            </Card>
          </CardWrapper>
        );
      })}
      <PagWrapper  theme={theme}>
        <Pagination aria-label="Page navigation example">
          {renderPaginationItems()}
        </Pagination>
      </PagWrapper>

  </>
) : (
  <>
  <Bio
        title={"Let's check out my projects!"}
        content={` Follow the link to explore my repositories ♡`}
      />
      <ButtonStyle theme={theme} onClick={fetchRepositories}>˗ˏˋ Read More ´ˎ˗  </ButtonStyle>
  </>
   
 
)}
 </ChakraProvider>
 </PageWrapper>
   );
  }
  



export default Projects;
