import {
  Box,
  Img,
  Progress,
  SimpleGrid,
  Text,
  Link,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import Styles from "../Components/Navbar.module.css";
import Sendin from "../Image/Sendin.png";
import "./Projects.css";
import html from "../Image/html.png";
import css from "../Image/css.png";
import js from "../Image/js.png";
import react from "../Image/react.png";
import chakra from "../Image/chakra.png";
// import { Link } from "react-router-dom";
import github from "../Image/github.png";
import deploy from "../Image/deploy.png";
import bootstrap from "../Image/bootstrap.png";

const Projects = () => {
  return (
    <>
      <div className={Styles.drawer}>
      <Heading textAlign="center" marginTop="20px">
          Built By Me ✌
        </Heading>

        <SimpleGrid
          columns={1}
          spacing={10}
          paddingTop="50px"
          margin="auto"
          width="90%"
        >
          <Box bg="white" width="90%" margin="auto" boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"   border="3px solid black " height="880px">
            <Box className="hero-image"></Box>
            <Text
              marginTop="10px"
              textAlign="center"
              fontSize="35px"
              color="red.600"
              fontWeight="bold"
            >
              SendinBlue - Clone
            </Text>
            <Text fontWeight="bold" margin="auto" width="90%">
              Sendinblue is the only all-in-one digital marketing platform
              empowering B2B and B2C businesses, ecommerce sellers and agencies
              to build customer relationships through end to end digital
              marketing campaigns, transactional messaging, and marketing
              automation.
            </Text>
            <Box
              display="flex"
              width="90%"
              margin="auto"
              gap="20px"
              paddingTop="20px"
              justifyContent="center"
            >
              <Img src={html} boxSize="40px" />
              <Img src={css} boxSize="40px" />
              <Img src={js} boxSize="40px" />
              <Img src={react} boxSize="40px" />
              <Img src={chakra} boxSize="40px" />
            </Box>

            <Progress
              value={100}
              marginTop="10px"
              size="xs"
              colorScheme="pink"
            />

            <Box
              display="flex"
              paddingTop="20px"
              justifyContent="center"
              margin="auto"
              gap="70px"
            >
              <Link
                href="https://github.com/Pavanambulkar/enormous-underwear-686"
                isExternal
              >
                <Img cursor="pointer" src={github} boxSize="40px" />
              </Link>
              <Link
                href="https://enormous-underwear-686.vercel.app/"
                isExternal
              >
                <Img cursor="pointer" src={deploy} boxSize="40px" />
              </Link>
            </Box>
          </Box>
          {/* 2nd */}
          <Box bg="white" width="90%" margin="auto" boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" border="3px solid black" height="880px">
            <Box className="hero-image1"></Box>
            <Text
              marginTop="10px"
              textAlign="center"
              fontSize="35px"
              color="blue"
              fontWeight="bold"
            >
              Zappos - Clone
            </Text>
            <Text fontWeight="bold" margin="auto" width="90%">
              Zappos is one of the fastest growing online Shopping portals in
              Asia, offering Shopping an extensive selection of Men, Women and
              Kids Products to Enjoy every moment and activities of every kind
              at competitive rates.
            </Text>
            <Box
              display="flex"
              width="90%"
              margin="auto"
              gap="20px"
              paddingTop="20px"
              justifyContent="center"
            >
              <Img src={html} boxSize="40px" />
              <Img src={css} boxSize="40px" />
              <Img src={js} boxSize="40px" />

              <Img src={bootstrap} boxSize="40px" />
            </Box>

            <Progress
              value={100}
              marginTop="29px"
              size="xs"
              colorScheme="pink"
            />

            <Box
              display="flex"
              paddingTop="20px"
              justifyContent="center"
              margin="auto"
              gap="70px"
            >
              <Link
                href="https://github.com/Pavanambulkar/Zappos_web_clone"
                isExternal
              >
                <Img cursor="pointer" src={github} boxSize="40px" />
              </Link>
              <Link
                href="https://pavanambulkar.github.io/Zappos_web_clone/"
                isExternal
              >
                <Img cursor="pointer" src={deploy} boxSize="40px" />
              </Link>
            </Box>
          </Box>

          {/* 3rd */}

          <Box bg="white" width="90%" margin="auto" boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" border="3px solid black" height="980px">
            <Box className="hero-image2"></Box>
            <Text
              marginTop="10px"
              textAlign="center"
              fontSize="35px"
              color="red.600"
              fontWeight="bold"
            >
              Amazon Prime Video - Clone
            </Text>
            <Text fontWeight="bold" margin="auto" width="90%">
              Prime Video is an on-demand streaming service that's included with
              an Amazon Prime membership. If you don't have Amazon Prime, you
              can also sign up for Prime Video on its own. You can watch
              thousands of titles on Prime Video, including many award-winning
              movies, original programs, and critically acclaimed TV series.
            </Text>
            <Box
              display="flex"
              width="90%"
              margin="auto"
              gap="20px"
              paddingTop="20px"
              justifyContent="center"
            >
              <Img src={html} boxSize="40px" />
              <Img src={css} boxSize="40px" />
              <Img src={js} boxSize="40px" />
            </Box>

            <Progress
              value={100}
              marginTop="10px"
              size="xs"
              colorScheme="pink"
            />

            <Box
              display="flex"
              paddingTop="20px"
              justifyContent="center"
              margin="auto"
              gap="70px"
            >
              <Link
                href="https://github.com/Pavanambulkar/PRIME_GITHUB_PROJECT"
                isExternal
              >
                <Img cursor="pointer" src={github} boxSize="40px" />
              </Link>
              <Link
                href="https://pavanambulkar.github.io/PRIME_GITHUB_PROJECT/"
                isExternal
              >
                <Img cursor="pointer" src={deploy} boxSize="40px" />
              </Link>
            </Box>
          </Box>
        </SimpleGrid>
        <Progress hasStripe marginTop="80px" value={100} />

        <Heading textAlign="center" marginTop="40px">
          Collaborative Project 🤝
        </Heading>

        <SimpleGrid
          columns={1}
          spacing={10}
          paddingTop="50px"
          margin="auto"
          width="90%"
        >
          <Box bg="white" width="90%" margin="auto" boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" border="3px solid black" height="880px">
            <Box className="hero-image3"></Box>
            <Text
              marginTop="10px"
              textAlign="center"
              fontSize="35px"
              color="red.600"
              fontWeight="bold"
            >
              Expedia - Clone
            </Text>
            <Text fontWeight="bold" margin="auto" width="90%">
              Expedia is one of the fastest growing online travel portals in
              Asia, offering travellers an extensive selection of hotels,
              activities and travel services to meet every budget and activities
              of every kind at competitive rates.
            </Text>
            <Text textAlign="center" marginTop="10px" fontWeight="bold">
              A collaborative project built by a team of 6, executed in 5 days.
            </Text>
            <Box
              display="flex"
              width="90%"
              margin="auto"
              gap="20px"
              paddingTop="20px"
              justifyContent="center"
            >
              <Img src={html} boxSize="40px" />
              <Img src={css} boxSize="40px" />
              <Img src={js} boxSize="40px" />
              <Img src={bootstrap} boxSize="40px" />
            </Box>

            <Progress
              value={100}
              marginTop="10px"
              size="xs"
              colorScheme="pink"
            />

            <Box
              display="flex"
              paddingTop="20px"
              justifyContent="center"
              margin="auto"
              gap="70px"
            >
              <Link
                href="https://github.com/kiranwithcode/Expedia_Clone"
                isExternal
              >
                <Img src={github} boxSize="40px" />
              </Link>
              <Link href="https://jolly-tulumba-a0bccf.netlify.app/" isExternal>
                <Img src={deploy} boxSize="40px" />
              </Link>
            </Box>
          </Box>
          {/* 2nd */}
          <Box bg="white" width="90%" margin="auto" boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" border="3px solid black" height="980px">
            <Box className="hero-image4"></Box>
            <Text
              marginTop="10px"
              textAlign="center"
              fontSize="35px"
              color="blue"
              fontWeight="bold"
            >
              LifeStyleStores - Clone
            </Text>
            <Text fontWeight="bold" margin="auto" width="90%">
              This a website where an user can be able to buy the premium
              clothes, and accessories. In this project we have tried to make a
              look alike clone of lifestylestore.com website. With our efforts
              and the technology stack.  
            </Text>
            <Text textAlign="center" marginTop="5px" fontWeight="bold">
              A collaborative project built by a team of 6, executed in 5 days.
            </Text>
            <Box
              display="flex"
              width="90%"
              margin="auto"
              gap="20px"
              paddingTop="10px"
              justifyContent="center"
            >
              <Img src={html} boxSize="40px" />
              <Img src={css} boxSize="40px" />
              <Img src={js} boxSize="40px" />

              <Img src={bootstrap} boxSize="40px" />
            </Box>

            <Progress
              value={100}
              marginTop="29px"
              size="xs"
              colorScheme="pink"
            />

            <Box
              display="flex"
              paddingTop="20px"
              justifyContent="center"
              margin="auto"
              gap="70px"
            >
              <Link
                href="https://github.com/prithvirajkeerthi/LifeStyleStores"
                isExternal
              >
                <Img src={github} boxSize="40px" />
              </Link>
              <Link
                href="https://elastic-volhard-0f1c35.netlify.app/"
                isExternal
              >
                <Img src={deploy} boxSize="40px" />
              </Link>
            </Box>
          </Box>

          {/* 3rd */}

          
        </SimpleGrid>
      </div>
      <div className={Styles.nav}>
        <Heading textAlign="center" marginTop="20px">
          Built By Me ✌
        </Heading>

        <SimpleGrid
          columns={2}
          spacing={10}
          paddingTop="50px"
          margin="auto"
          width="90%"
        >
          <Box bg="white" boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" border="3px solid black" height="680px">
            <Box className="hero-image"></Box>
            <Text
              marginTop="10px"
              textAlign="center"
              fontSize="35px"
              color="red.600"
              fontWeight="bold"
            >
              SendinBlue - Clone
            </Text>
            <Text fontWeight="bold" margin="auto" width="90%">
              Sendinblue is the only all-in-one digital marketing platform
              empowering B2B and B2C businesses, ecommerce sellers and agencies
              to build customer relationships through end to end digital
              marketing campaigns, transactional messaging, and marketing
              automation.
            </Text>
            <Box
              display="flex"
              width="90%"
              margin="auto"
              gap="20px"
              paddingTop="20px"
              justifyContent="center"
            >
              <Img src={html} boxSize="40px" />
              <Img src={css} boxSize="40px" />
              <Img src={js} boxSize="40px" />
              <Img src={react} boxSize="40px" />
              <Img src={chakra} boxSize="40px" />
            </Box>

            <Progress
              value={100}
              marginTop="10px"
              size="xs"
              colorScheme="pink"
            />

            <Box
              display="flex"
              paddingTop="20px"
              justifyContent="center"
              margin="auto"
              gap="70px"
            >
              <Link
                href="https://github.com/Pavanambulkar/enormous-underwear-686"
                isExternal
              >
                <Img cursor="pointer" src={github} boxSize="40px" />
              </Link>
              <Link
                href="https://enormous-underwear-686.vercel.app/"
                isExternal
              >
                <Img cursor="pointer" src={deploy} boxSize="40px" />
              </Link>
            </Box>
          </Box>
          {/* 2nd */}
          <Box bg="white" boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" border="3px solid black" height="680px">
            <Box className="hero-image1"></Box>
            <Text
              marginTop="10px"
              textAlign="center"
              fontSize="35px"
              color="blue"
              fontWeight="bold"
            >
              Zappos - Clone
            </Text>
            <Text fontWeight="bold" margin="auto" width="90%">
              Zappos is one of the fastest growing online Shopping portals in
              Asia, offering Shopping an extensive selection of Men, Women and
              Kids Products to Enjoy every moment and activities of every kind
              at competitive rates.
            </Text>
            <Box
              display="flex"
              width="90%"
              margin="auto"
              gap="20px"
              paddingTop="20px"
              justifyContent="center"
            >
              <Img src={html} boxSize="40px" />
              <Img src={css} boxSize="40px" />
              <Img src={js} boxSize="40px" />

              <Img src={bootstrap} boxSize="40px" />
            </Box>

            <Progress
              value={100}
              marginTop="29px"
              size="xs"
              colorScheme="pink"
            />

            <Box
              display="flex"
              paddingTop="20px"
              justifyContent="center"
              margin="auto"
              gap="70px"
            >
              <Link
                href="https://github.com/Pavanambulkar/Zappos_web_clone"
                isExternal
              >
                <Img cursor="pointer" src={github} boxSize="40px" />
              </Link>
              <Link
                href="https://pavanambulkar.github.io/Zappos_web_clone/"
                isExternal
              >
                <Img cursor="pointer" src={deploy} boxSize="40px" />
              </Link>
            </Box>
          </Box>

          {/* 3rd */}

          <Box bg="white" boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" border="3px solid black" height="680px">
            <Box className="hero-image2"></Box>
            <Text
              marginTop="10px"
              textAlign="center"
              fontSize="35px"
              color="red.600"
              fontWeight="bold"
            >
              Amazon Prime Video - Clone
            </Text>
            <Text fontWeight="bold" margin="auto" width="90%">
              Prime Video is an on-demand streaming service that's included with
              an Amazon Prime membership. If you don't have Amazon Prime, you
              can also sign up for Prime Video on its own. You can watch
              thousands of titles on Prime Video, including many award-winning
              movies, original programs, and critically acclaimed TV series.
            </Text>
            <Box
              display="flex"
              width="90%"
              margin="auto"
              gap="20px"
              paddingTop="20px"
              justifyContent="center"
            >
              <Img src={html} boxSize="40px" />
              <Img src={css} boxSize="40px" />
              <Img src={js} boxSize="40px" />
            </Box>

            <Progress
              value={100}
              marginTop="10px"
              size="xs"
              colorScheme="pink"
            />

            <Box
              display="flex"
              paddingTop="20px"
              justifyContent="center"
              margin="auto"
              gap="70px"
            >
              <Link
                href="https://github.com/Pavanambulkar/PRIME_GITHUB_PROJECT"
                isExternal
              >
                <Img cursor="pointer" src={github} boxSize="40px" />
              </Link>
              <Link
                href="https://pavanambulkar.github.io/PRIME_GITHUB_PROJECT/"
                isExternal
              >
                <Img cursor="pointer" src={deploy} boxSize="40px" />
              </Link>
            </Box>
          </Box>
        </SimpleGrid>
        <Progress hasStripe marginTop="40px" value={100} />

        <Heading textAlign="center" marginTop="20px">
          Collaborative Project 🤝
        </Heading>

        <SimpleGrid
          columns={2}
          spacing={10}
          paddingTop="50px"
          margin="auto"
          width="90%"
        >
          <Box bg="white" boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" border="3px solid black" height="680px">
            <Box className="hero-image3"></Box>
            <Text
              marginTop="10px"
              textAlign="center"
              fontSize="35px"
              color="red.600"
              fontWeight="bold"
            >
              Expedia - Clone
            </Text>
            <Text fontWeight="bold" margin="auto" width="90%">
              Expedia is one of the fastest growing online travel portals in
              Asia, offering travellers an extensive selection of hotels,
              activities and travel services to meet every budget and activities
              of every kind at competitive rates.
            </Text>
            <Text textAlign="center" marginTop="10px" fontWeight="bold">
              A collaborative project built by a team of 6, executed in 5 days.
            </Text>
            <Box
              display="flex"
              width="90%"
              margin="auto"
              gap="20px"
              paddingTop="20px"
              justifyContent="center"
            >
              <Img src={html} boxSize="40px" />
              <Img src={css} boxSize="40px" />
              <Img src={js} boxSize="40px" />
              <Img src={bootstrap} boxSize="40px" />
            </Box>

            <Progress
              value={100}
              marginTop="10px"
              size="xs"
              colorScheme="pink"
            />

            <Box
              display="flex"
              paddingTop="20px"
              justifyContent="center"
              margin="auto"
              gap="70px"
            >
              <Link
                href="https://github.com/kiranwithcode/Expedia_Clone"
                isExternal
              >
                <Img src={github} boxSize="40px" />
              </Link>
              <Link href="https://jolly-tulumba-a0bccf.netlify.app/" isExternal>
                <Img src={deploy} boxSize="40px" />
              </Link>
            </Box>
          </Box>
          {/* 2nd */}
          <Box bg="white" boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" border="3px solid black" height="680px">
            <Box className="hero-image4"></Box>
            <Text
              marginTop="10px"
              textAlign="center"
              fontSize="35px"
              color="blue"
              fontWeight="bold"
            >
              LifeStyleStores - Clone
            </Text>
            <Text fontWeight="bold" margin="auto" width="90%">
              This a website where an user can be able to buy the premium
              clothes, and accessories. In this project we have tried to make a
              look alike clone of lifestylestore.com website. With our efforts
              and the technology stack.  
            </Text>
            <Text textAlign="center" marginTop="5px" fontWeight="bold">
              A collaborative project built by a team of 6, executed in 5 days.
            </Text>
            <Box
              display="flex"
              width="90%"
              margin="auto"
              gap="20px"
              paddingTop="10px"
              justifyContent="center"
            >
              <Img src={html} boxSize="40px" />
              <Img src={css} boxSize="40px" />
              <Img src={js} boxSize="40px" />

              <Img src={bootstrap} boxSize="40px" />
            </Box>

            <Progress
              value={100}
              marginTop="29px"
              size="xs"
              colorScheme="pink"
            />

            <Box
              display="flex"
              paddingTop="20px"
              justifyContent="center"
              margin="auto"
              gap="70px"
            >
              <Link
                href="https://github.com/prithvirajkeerthi/LifeStyleStores"
                isExternal
              >
                <Img src={github} boxSize="40px" />
              </Link>
              <Link
                href="https://elastic-volhard-0f1c35.netlify.app/"
                isExternal
              >
                <Img src={deploy} boxSize="40px" />
              </Link>
            </Box>
          </Box>

          {/* 3rd */}

          
        </SimpleGrid>
      </div>
    </>
  );
};

export default Projects;
