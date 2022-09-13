import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Textarea,
  Img,
} from "@chakra-ui/react";
import React from "react";
import Styles from "../Components/Navbar.module.css";
import contact from "../Image/contact.png";
import callme from '../Image/call-me.gif'

const Contact = () => {
  return (
    <>
      <div className={Styles.drawer}>
      <SimpleGrid
          bg="orange"
          columns={1}
          spacing={10}
          border="1px solid black"
          paddingTop="40px"
          margin="auto"
        >
         
          <Box  margin="auto" marginRight="10px">
            <Img justifyContent="center" boxSize="150" margin="auto" src={callme} />
            <Img width="90%" margin="auto" marginTop="30px" src={contact} />
          </Box>

          <Box
            width="90%"
            border="2px solid black"
            margin="auto"
            marginTop="20px"
            height="500px"
          >
            <form method="POST" action="https://formspree.io/f/moqbjgkq">
              <FormControl width="70%" margin="auto">
                <FormLabel marginTop="20px">Name</FormLabel>
                <Input
                  border="3px solid black"
                  name="name"
                  color="white"
                  fontSize="19px"
                  autoComplete="off"
                  required
                  type="text"
                />
                <FormLabel>Email address</FormLabel>
                <Input
                  border="3px solid black"
                  name="email"
                  color="white"
                  fontSize="19px"
                  autoComplete="off"
                  required
                  type="email"
                />
                <FormLabel>Subject</FormLabel>
                <Input
                  border="3px solid black"
                  name="subject"
                  color="white"
                  fontSize="19px"
                  autoComplete="off"
                  cursor="auto"
                  required
                  type="text"
                />
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  color="white"
                  fontSize="19px"
                  autoComplete="off"
                  required
                ></Textarea>
                <Input
                  bg="blue"
                  cursor="pointer"
                  color="white"
                  fontSize="20px"
                  marginTop="20px"
                  border="3px solid black"
                  type="submit"
                  value="Send Email"
                />
              </FormControl>
            </form>
          </Box>
        </SimpleGrid>
      </div>

      <div className={Styles.nav}>
        <SimpleGrid
          bg="orange"
          columns={2}
          spacing={10}
          border="1px solid black"
          paddingTop="40px"
          margin="auto"
        >
          <Box
            width="90%"
            border="2px solid black"
            margin="auto"
            marginTop="20px"
            height="500px"
          >
            <form method="POST" action="https://formspree.io/f/moqbjgkq">
              <FormControl width="70%" margin="auto">
                <FormLabel marginTop="20px">Name</FormLabel>
                <Input
                  border="3px solid black"
                  name="name"
                  color="white"
                  fontSize="19px"
                  autoComplete="off"
                  required
                  type="text"
                />
                <FormLabel>Email address</FormLabel>
                <Input
                  border="3px solid black"
                  name="email"
                  color="white"
                  fontSize="19px"
                  autoComplete="off"
                  required
                  type="email"
                />
                <FormLabel>Subject</FormLabel>
                <Input
                  border="3px solid black"
                  name="subject"
                  color="white"
                  fontSize="19px"
                  autoComplete="off"
                  cursor="auto"
                  required
                  type="text"
                />
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  color="white"
                  fontSize="19px"
                  autoComplete="off"
                  required
                ></Textarea>
                <Input
                  bg="blue"
                  cursor="pointer"
                  color="white"
                  fontSize="20px"
                  marginTop="20px"
                  border="3px solid black"
                  type="submit"
                  value="Send Email"
                />
              </FormControl>
            </form>
          </Box>
          <Box  margin="auto" marginRight="10px">
            <Img justifyContent="center" boxSize="150" margin="auto" src={callme} />
            <Img width="90%" margin="auto" marginTop="30px" src={contact} />
          </Box>
        </SimpleGrid>
      </div>
    </>
  );
};

export default Contact;
