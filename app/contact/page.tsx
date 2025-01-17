"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
  Textarea,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail, MdPhone } from "react-icons/md";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(
    async (data: FormData) => {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha("verifyInquiry");
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ ...data, token }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      const resJson = await response.json();

      toast({
        title: `${resJson.error ?? resJson.message}`,
        status: resJson.error ? "error" : "success",
        isClosable: true,
      });
    },
    [executeRecaptcha],
  );

  return (
    <Flex
      m="auto 0"
      flexDir={{ base: "column", md: "row" }}
      py={{ base: 42, md: 32 }}
      w="full"
      justifyContent="center"
      alignItems="center"
      gap={{ base: 12, md: 14, lg: 18 }}
    >
      <Box width={{ base: "16rem", sm: "20rem", lg: "24rem" }}>
        <Heading>Contact Us</Heading>
        <Text
          fontSize={{ base: 14, sm: 18 }}
          mt={{ sm: 3, lg: 5 }}
          color={useColorModeValue("gray.700", "gray.500")}
        >
          Fill out the form, or contact us directly!
        </Text>
        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
          <VStack pl={0} spacing={3} alignItems="flex-start">
            <Button
              as={NextLink}
              size="md"
              w={240}
              height={10}
              variant="ghost"
              _hover={{
                borderWidth: 2,
                borderBlock: "solid",
                borderColor: "brand.900",
              }}
              leftIcon={<MdPhone color="#0054ba" size="20px" />}
              href="tel:+13199817333"
            >
              +1 (319) 981-7333
            </Button>
            <Button
              as={NextLink}
              size="md"
              w={240}
              height={10}
              variant="ghost"
              _hover={{
                borderWidth: 2,
                borderBlock: "solid",
                borderColor: "brand.900",
              }}
              leftIcon={<MdEmail color="#0054ba" size="20px" />}
              href="mailto:fake@fake.com"
            >
              hello@abc.com
            </Button>
          </VStack>
        </Box>
      </Box>
      <Box bg="white" borderRadius="lg">
        <Box
          width={{ base: "16rem", sm: "20rem", lg: "24rem" }}
          m={8}
          color="gray.700"
        >
          <form onSubmit={handleSubmit(handleReCaptchaVerify)}>
            <VStack spacing={5}>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Your Name</FormLabel>
                <InputGroup borderColor="gray.300">
                  <InputLeftElement pointerEvents="none">
                    <BsPerson color="gray.800" />
                  </InputLeftElement>
                  <Input
                    {...register("name", {
                      required: "Name is required",
                      pattern: {
                        value: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/g,
                        message: "Invalid characters found in name, Sorry...",
                      },
                    })}
                    borderColor="gray.300"
                    placeholder="Your Name"
                    _placeholder={{
                      color: "gray.500",
                    }}
                    _hover={{
                      borderColor: "gray.500",
                      _placeholder: {
                        color: "gray.700",
                      },
                    }}
                    id="name"
                    type="text"
                    size="md"
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel>Mail</FormLabel>
                <InputGroup borderColor="gray.300">
                  <InputLeftElement pointerEvents="none">
                    <MdOutlineEmail color="gray.800" />
                  </InputLeftElement>
                  <Input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g,
                        message: "Please correct the email address.",
                      },
                    })}
                    borderColor="gray.300"
                    placeholder="Your Email Address"
                    _placeholder={{
                      color: "gray.500",
                    }}
                    _hover={{
                      borderColor: "gray.500",
                      _placeholder: {
                        color: "gray.700",
                      },
                    }}
                    id="email"
                    type="text"
                    size="md"
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.message}>
                <FormLabel>Message</FormLabel>
                <Textarea
                  {...register("message", {
                    required: "Message is required",
                    maxLength: { value: 150, message: "Woah, too long!" },
                  })}
                  id="message"
                  borderColor="gray.300"
                  _placeholder={{
                    color: "gray.500",
                  }}
                  _hover={{
                    borderColor: "gray.500",
                    _placeholder: {
                      color: "gray.700",
                    },
                  }}
                  placeholder="Type your message here"
                  rows={useBreakpointValue({ base: 10, md: 6 })}
                />
                <FormErrorMessage>
                  {errors.message && errors.message.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="name" float="right">
                {isSubmitting ? (
                  <Spinner />
                ) : (
                  <Button
                    type="submit"
                    variant="solid"
                    bg="brand.700"
                    color="white"
                    _hover={{}}
                    _disabled={{
                      bg: "gray.500",
                    }}
                  >
                    Send Message
                  </Button>
                )}
              </FormControl>
            </VStack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
