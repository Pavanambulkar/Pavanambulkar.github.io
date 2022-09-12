import { background, border, Box, Button, Center, Container, Flex, Grid, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import profile from "../Image/my-img.png"
import back from "../Image/back1.png"
import Styles from "../Components/Navbar.module.css"


const Home = () => {

    return (
        <div>
            <div className={Styles.drawer}>
                <Center bg={'gray.200'} h="100vh">
                    <Box w="90vw" m="auto" mt={10} >
                        <SimpleGrid w="90%" m="auto">
                            <Box position="relative" ml={10}>
                                <Image h="300px" w="400px" src={back} />
                                <Image src={profile} marginRight="40px" w="280px" borderRadius="5px" position="absolute" h="250px" top={["5", "6", "7", "8"]} left={5} />
                            </Box>
                            <Box ml={10} mt={10}>
                                <Text fontSize="3xl" fontWeight="bold">Hello, 👋 I,m</Text>
                                <Heading my={3} size="2xl" color="rgb(64,112,244)">Pavan</Heading>
                                <Text fontSize="2xl" fontWeight="bold">I'm a <span style={{ color: "rgb(242,11,151)" }}>MERN Developer</span> </Text>
                                <Button mt={5} fontWeight="bold" fontSize="20px" width="fit-content" color="white" bg="#F5C32c" _hover={{ variant: 'outline', color: "#F5C32c", bg: "white", border: "2px solid #F5c32c" }}>Resume</Button>
                            </Box >

                        </SimpleGrid >
                    </Box >
                </Center>
            </div>
            <div className={Styles.nav}>
                <Box bg={'gray.200'}>
                    <Box w="90%" m="auto" p={5} h="70vh">
                        <Flex justify="space-between" w="100%" margin="auto" gap="10%" p={10} >
                            <Flex ml={10} w="50%" flexDir="column" justify="center">
                                <Text fontSize={['xl', '2xl', '3xl', '4xl']} fontWeight="bold">Hello, 👋 I,m</Text>
                                <Heading my={3} size={['xl', '2xl', '3xl', '4xl']} color="rgb(64,112,244)">Pavan</Heading>
                                <Text fontSize={['xl', '2xl', '3xl', '4xl']} fontWeight="bold">I'm a <span style={{ color: "rgb(242,11,151)" }}>MERN Developer</span> </Text>
                                <Button mt={5} fontWeight="bold" fontSize="20px" width="fit-content" color="white" bg="#F5C32c" _hover={{ variant: 'outline', color: "#F5C32c", bg: "white", border: "2px solid #F5c32c" }}>Resume</Button>
                            </Flex >
                            <Flex w="40%" position="relative">
                                <Image h={["100px", "150px", "200px", "340px"]} w={["200px", "250px", "300px", "400px"]} src={back} />
                                <Image src={profile} w={["100px", "150px", "200px", "340px"]} borderRadius="20%" position="absolute" h={["100px", "150px", "200px", "340px"]} top={["5", "6", "7", "8"]} left={5} />
                            </Flex>
                        </Flex >
                    </Box >
                </Box>
            </div>
        </div>
    )
}

export default Home