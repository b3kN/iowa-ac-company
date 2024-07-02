"use client";

import { sendEmail } from "@/utils/sendEmail";
import { validateRecaptcha } from "@/utils/validateRecaptcha";
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
import { useCallback, useEffect, useState } from "react";
import { GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail, MdPhone } from "react-icons/md";

export type FormData = {
  name: string;
  email: string;
  message: string;
  token: string;
};

export default function Contact() {
  const [verified, setVerified] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  async function onSubmit(data: FormData) {
    try {
      const emailResponse = await sendEmail(data);
      toast({
        title: `${emailResponse.message}`,
        status: "success",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: `${error.message}`,
        status: "error",
        isClosable: true,
      });
    }
  }
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }
    console.log("obtain token now");

    const token = await executeRecaptcha("verifyInquiry");
    const validToken = await validateRecaptcha(token);
    console.log("obtained token", token);
    console.log("goken validation", validToken);
    setVerified(validToken);
    // Do whatever you want with the token
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

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
      <GoogleReCaptcha onVerify={handleReCaptchaVerify} />
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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    disabled={!verified}
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
