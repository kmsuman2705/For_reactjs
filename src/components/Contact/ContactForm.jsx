import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import {
  BsPerson,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export default function ContactForm() {
  return (
    <Container bg="#F7FAFC" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="gray.600"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact Us</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Have questions or need assistance?
                  </Text>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Contact TalentConnect today.
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack spacing={4} alignItems="flex-start">
                      <HStack>
                        <Button
                          size="md"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #D5006D" }}
                          leftIcon={<MdPhone color="#D5006D" size="20px" />}
                        >
                          +91-9888678899
                        </Button>
                      </HStack>
                      <HStack>
                        <Button
                          size="md"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #D5006D" }}
                          leftIcon={<MdEmail color="#D5006D" size="20px" />}
                        >
                          talentconnect@gmail.com
                        </Button>
                      </HStack>
                      <HStack>
                        <Button
                          size="md"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #D5006D" }}
                          leftIcon={
                            <MdLocationOn color="#D5006D" size="20px" />
                          }
                        >
                          Jamshedpur, Jharkhand, India
                        </Button>
                      </HStack>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="Instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#D5006D" }}
                      icon={<BsInstagram size="28px" />}
                    />
                    <IconButton
                      aria-label="LinkedIn"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#D5006D" }}
                      icon={<BsLinkedin size="28px" />}
                    />
                    <IconButton
                      aria-label="Twitter"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#D5006D" }}
                      icon={<BsTwitter size="28px" />}
                    />
                    <IconButton
                      aria-label="YouTube"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#D5006D" }}
                      icon={<BsYoutube size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
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
                      <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          placeholder="Your message"
                        />
                      </FormControl>
                      <FormControl id="submit" float="right">
                        <Button
                          variant="solid"
                          bg="#D5006D"
                          color="white"
                          _hover={{ bg: "#B0004C" }}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
