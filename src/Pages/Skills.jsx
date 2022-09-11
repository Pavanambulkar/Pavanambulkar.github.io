import { SimpleGrid,Box, Img, Text, Heading, Flex, Progress } from "@chakra-ui/react";
import html from "../Image/html.png"
import css from "../Image/css.png"
import js from "../Image/js.png"
import react from "../Image/react.png"
import redux from "../Image/redux.png"
import chakra from "../Image/chakra.png"
import mui from "../Image/mui.png"
import bootstrap from "../Image/bootstrap.png"
import Styles from "../Components/Navbar.module.css"
import gify from "../Image/giphy.gif"
import node from "../Image/nodejs.png"
import express from "../Image/express.png"
import mongo from "../Image/mongo.png"
import git from "../Image/git.png"
const Skills = () => {
  return (
    <>


    <div className={Styles.drawer}>
        <Flex gap= "20px" margin="auto" paddingTop="40px" justifyContent="center">
    <Heading as='h2' size='3xl'>Skills </Heading>
    <Img boxSize="50px" src={gify}/>

        </Flex>
        <Progress hasStripe  value={100} />
       
        <Box margin="auto" paddingTop="30px">
       <Heading as='h2' size='xl' textAlign="center" color="#FF7533 " >
    Front-end 
  </Heading>
       </Box>
       <Progress value={100} size='xs' colorScheme='pink' />
      <SimpleGrid columns={1} spacing={20} paddingTop="20px" margin="auto">
        <Box bg="whitesmoke"  height="130px" paddingTop="30px"  margin="auto">
            <Img src={html}  boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px" >HTML</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={css} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px" >CSS</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={js} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px" >JavaScript</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={react} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px" >React</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={redux} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px" >Redux</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={chakra} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px" >Chakra UI</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={mui} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px" >Material UI</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={bootstrap} boxSize='100px'/>
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px" >Bootstrap</Text>
        </Box>
      </SimpleGrid>
      <Box margin="auto" paddingTop="100px">
       <Heading as='h2' size='xl' textAlign="center" color="#33DAFF " >
    Back-end & Database
  </Heading>
       </Box>
      <Progress value={100} size='xs' marginTop="10px" colorScheme='pink' />

      <SimpleGrid columns={1} spacing={20} paddingTop="20px" margin="auto">
        <Box bg="whitesmoke"  height="130px" paddingTop="30px"  margin="auto">
            <Img src={node}  boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px" >Node Js</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={express} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px" >Express Js</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={mongo} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px" >MongoDb</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={git} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px" >Git</Text>
        </Box>
       
      </SimpleGrid>

       
      
      </div>
      <div className={Styles.nav}>
      <Flex gap= "20px" margin="auto" paddingTop="40px" justifyContent="center">
    <Heading as='h2' size='3xl'>Skills </Heading>
    <Img boxSize="70px" src={gify}/>
 
        </Flex>
        <Progress hasStripe  value={100} />
        <Box margin="auto" paddingTop="30px">
       <Heading as='h2' size='xl' textAlign="center" color="#FF7533 " >
    Front-end 
  </Heading>
       </Box>
       <Progress value={100} size='xs' colorScheme='pink' />
      <SimpleGrid columns={4}  spacing={20}  paddingTop="40px" margin="auto">
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={html}  boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px">HTML</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={css} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px">CSS</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={js} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px">JavaScript</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={react} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px">React</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={redux} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px">Redux</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={chakra} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px">Chakra UI</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={mui} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px">Material UI</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={bootstrap} boxSize='100px'/>
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px">Bootstrap</Text>
        </Box>
      </SimpleGrid>
      
      <Box margin="auto" paddingTop="140px">
       <Heading as='h2' size='xl' textAlign="center" color="#33DAFF " >
    Back-end & Database
  </Heading>
       </Box>
      <Progress value={100} marginTop="10px" size='xs' colorScheme='yellow' />

      <SimpleGrid columns={4}  spacing={10}  paddingTop="100px" margin="auto">
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={node}  boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px">Node Js</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={mongo} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px">MongoDb</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={express} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px">Express Js</Text>
        </Box>
        <Box bg="whitesmoke" height="80px" margin="auto">
            <Img src={git} boxSize='100px' />
            <Text marginTop="10px" textAlign="center" fontWeight="bold" fontSize="18px">Git</Text>
        </Box>
      </SimpleGrid>
      </div>
    </>
  );
};

export default Skills;
