"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { BsDiscord, BsGithub, BsPerson } from "react-icons/bs";
import {
  MdEmail,
  MdFacebook,
  MdLocationOn,
  MdOutlineEmail,
  MdPhone,
} from "react-icons/md";

export default function Contact() {
  return (
    <Flex
      m="auto 0"
      flexDir={{ base: "column", md: "row" }}
      py={{ sm: 42, md: 32 }}
      w="full"
      justifyContent="center"
      alignItems="center"
      gap={{ base: 12, md: 14, lg: 18 }}
    >
      <Box width={{ base: "16rem", sm: "20rem", lg: "24rem" }}>
        <Heading>Contact</Heading>
        <Text
          fontSize={{ base: 14, sm: 18 }}
          mt={{ sm: 3, md: 3, lg: 5 }}
          color="gray.500"
        >
          Fill out the form, or contact us directly!
        </Text>
        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
          <VStack pl={0} spacing={3} alignItems="flex-start">
            <Button
              size="md"
              height="48px"
              width="200px"
              variant="ghost"
              _hover={{ border: "2px solid #1C6FEB" }}
              leftIcon={<MdPhone color="#1970F1" size="20px" />}
            >
              +91-988888888
            </Button>
            <Button
              size="md"
              height="48px"
              width="200px"
              variant="ghost"
              _hover={{ border: "2px solid #1C6FEB" }}
              leftIcon={<MdEmail color="#1970F1" size="20px" />}
            >
              hello@abc.com
            </Button>
            <Button
              size="md"
              height="48px"
              width="200px"
              variant="ghost"
              _hover={{ border: "2px solid #1C6FEB" }}
              leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
            >
              Karnavati, India
            </Button>
          </VStack>
        </Box>
      </Box>
      <Box bg="white" borderRadius="lg">
        <Box
          width={{ base: "16rem", sm: "20rem", lg: "24rem" }}
          m={8}
          color="#0B0E3F"
        >
          <VStack spacing={5}>
            <FormControl id="name">
              <FormLabel>Your Name</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none">
                  <BsPerson color="gray.800" />
                </InputLeftElement>
                <Input type="text" size="md" />
              </InputGroup>
            </FormControl>
            <FormControl id="name">
              <FormLabel>Mail</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement pointerEvents="none">
                  <MdOutlineEmail color="gray.800" />
                </InputLeftElement>
                <Input type="text" size="md" />
              </InputGroup>
            </FormControl>
            <FormControl id="name">
              <FormLabel>Message</FormLabel>
              <Textarea
                borderColor="gray.300"
                _hover={{
                  borderRadius: "gray.300",
                }}
                placeholder="message"
              />
            </FormControl>
            <FormControl id="name" float="right">
              <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                Send Message
              </Button>
            </FormControl>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
