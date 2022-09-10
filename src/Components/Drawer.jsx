import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Text,
    Flex,
    Heading,
} from '@chakra-ui/react'
import React from 'react'
import { FaBars } from "react-icons/fa"
import { Link, } from 'react-router-dom'


const links = [
    {
        path: "/",
        name: "HOME",
    },
    {
        path: "/about",
        name: "ABOUT",
    },
    {
        path: "/projects",
        name: "PROJECTS",
    },
    {
        path: "/contacts",
        name: "CONTACTS",
    },
    {
        path: "/skills",
        name: "SKILLS",
    },
]


export default function DrawerNav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        // 
        <div >
            <Flex justify="space-between" p={5} bg="#788097" >
                
                <Button ref={btnRef} color="white" variant='outline' _hover={{
                    background: "white",
                    color: "teal.500",
                }} onClick={onOpen}>
                    <FaBars />
                </Button>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size="full"

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton border="3px solid teal" />

                    <DrawerBody bg={'gray.200'}>
                        <Flex justify="center" align="center" flexDir="column">
                            {links.map((route) =>
                                <Link onClick={onClose} to={route.path} key={route.name} >
                                    <Text fontSize={25} fontWeight="bold" lineHeight="60px" color={"blackAlpha.700"} _hover={{ bg: "lightskyblue", px: "10px", color: "white", borderRadius: "10px" }}>{route.name}</Text>
                                </Link>
                            )}
                        </Flex>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </div>
    )
}