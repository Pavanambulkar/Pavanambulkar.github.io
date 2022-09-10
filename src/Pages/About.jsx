import { Box, Heading, Image, ListIcon, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import about from "../Image/about.png";

const About = () => {
  return (
    <Box my={10}>
      <Heading m="auto" color="rgb(204,119,34)" textAlign="center" my={8}>
        About Me
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={10} w="80%" m="auto">
        <Box>
          <Image maxH="350px" src={about} />
        </Box>
        <Box>
          <ul>
            <li>
              <Text color={"blackAlpha.700"} fontSize="18px">
                Hello! My name is Pavan Ambulkar and An optimistic and
                self-motivated individual, looking forward to working within the
                IT industry. 
              </Text>
            </li>
            <li>
              <Text color={"blackAlpha.700"} fontSize="18px" mt={5}>
              Proficient knowledge of HTML, CSS, and JavaScript
                and also good at some valuable libraries like React Js, Redux,
                Bootsrap and Chakra UI.
              </Text>
            </li>
            <li>
              <Text color={"blackAlpha.700"} fontSize="18px" mt={5}>
                Looking forward to applying and enhancing my skills and
                knowledge as a developer.
              </Text>
            </li>
          </ul>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default About;
